import React, {Component} from 'react';

export default class ReactCSSTransitionGroupChild extends Component {
  transition = (animationType, finishCallback, userSpecifiedDelay) => {
    var node = ReactAddonsDOMDependencies.getReactDOM().findDOMNode(this);
    var className = this.props.name[animationType] || this.props.name + '-' + animationType;
    var activeClassName = this.props.name[animationType + 'Active'] || className + '-active';
    var timeout = null;

    var endListener = function (e) {

      clearTimeout(timeout);
      // 清除两个className
      CSSCore.removeClass(node, className);
      CSSCore.removeClass(node, activeClassName);

      finishCallback && finishCallback();
    };

    CSSCore.addClass(node, className);
    // 在下一个tick添加active类名
    this.queueClassAndNode(activeClassName, node);

    // 500ms后清空类名
    timeout = setTimeout(endListener, userSpecifiedDelay);
  }

  componentWillEnter(done) {
    // 设置并消除enter的过渡
    this.transition('enter', done, 500);
  }

  componentWillLeave(done) {
    // 设置并消除leave的过渡
    this.transition('leave', done, 500);
  }

  componentWillAppear(done) {
    // 设置并消除appear的过渡
    this.transition('appear', done, 500);
  }

  render() {
    return this.props.children;
  }
}