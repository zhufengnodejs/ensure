import React, {Component} from 'react';
import ReactDOM from 'react-dom'
export default class Transition extends Component {
  constructor(){
    super();
    this.state = {className:''};
  }
  componentWillUpdate(){
    let dom = ReactDOM.findDOMNode(this);
    if(this.props.in){
      this.setState({className:'entering'});
      setTimeout(()=>{
        this.setState({className:'entered'});
      },50);
    }
  }
  render() {
    return this.props.children(this.state.className)
  }
}