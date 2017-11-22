import React, {Component} from 'react';
import ReactCSSTransitionGroup from './ReactCSSTransitionGroup';
import './App.css'
export default class Home extends Component {
  constructor() {
    super();
    this.state = {items: [1]};
  }

  add = () => {
    this.setState({items: [1, 2]});
  }

  render() {
    return (
      <div>
        <ReactCSSTransitionGroup
          transitionName={{
            enter: 'itemEnter',
            leave: 'itemLeave',
            appear: 'itemAppear',
            enterActive: 'itemEnterActive',
            leaveActive: 'itemLeaveActive',
            appearActive: 'itemAppearActive'
          }}
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionEnterTimeout={200}
          transitionLeaveTimeout={200}>
          {this.state.items}
        </ReactCSSTransitionGroup>
        <button onClick={this.add}>add</button>
      </div>
    )
  }
}
