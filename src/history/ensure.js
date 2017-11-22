import React, {Component} from 'react';
export default class Container extends Component {
  constructor() {
    super();
    this.state = {
      currentComponent: null
    }
  }

  doSomething = () => {
    require.ensure(['./app2'], (require) => {
      const Comp = require('./app2');
      this.setState({
        currentComponent: <Comp/>
      })
    })
  };

  render() {
    return (
      <div>
        <span onClick={this.doSomething} style={{border: "1px solid #000"}}>点击后，按需加载如下模块</span>
        {this.state.currentComponent}
      </div>
    )
  }
}