import {Component} from 'react';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroupChild from './ReactCSSTransitionGroupChild';
var createTransitionTimeoutPropValidator = type => {
  var transitionName = `transition${type}`,
    transitionTimeoutName = transitionName + 'Timeout';
  return (prop) => {
    // 当过渡为true时
    if (prop[transitionName]) {
      //如果对应timeout不存在，验证不通过
      if (prop[transitionTimeoutName] == null) {
        return new Error('...');
        //如果timeout不为数值类型，验证不通过
      } else if (typeof prop[transitionTimeoutName] !== 'number') {
        return new Error('...');
      }
    }
  }
}

class ReactTransitionGroup extends Component {
  render() {
    return (
      React.Children.map(this.props.children, (item, index) => (
        this.props.childFactory(item)
      ))
    )
  }
}

export default class ReactCSSTransitionGroup extends Component {
  static propTypes = {
    transitionName: (prop) => undefined/* 先搁置这部分 */,
    transitionAppear: PropTypes.bool,
    transitionEnter: PropTypes.bool,
    transitionLeave: PropTypes.bool,
    transitionAppearTimeout: createTransitionTimeoutPropValidator('Appear'),
    transitionEnterTimeout: createTransitionTimeoutPropValidator('Enter'),
    transitionLeaveTimeout: createTransitionTimeoutPropValidator('Leave'),
    transitionName: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape({
        enter: PropTypes.string,
        leave: PropTypes.string,
        appear: PropTypes.string,
        enterActive: PropTypes.string,
        leaveActive: PropTypes.string,
        appearActive: PropTypes.string
      })
    ])
  }

  _wrapChild(child) {
    return (
      <ReactCSSTransitionGroupChild>
        {child}
      </ReactCSSTransitionGroupChild>
    )
  }

  render() {
    // 封装函数用childFactory传递给ReactTransitionGroup
    return <ReactTransitionGroup {...this.props} childFactory={this._wrapChild}/>
  }
}
