import React from 'react'
import ReactDOM from 'react-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import './styles.css';


class TodoList extends React.Component {
  constructor(props) {
    super(props)
    this.state = { items: ['hello', 'world', 'click', 'me'] }
  }
  handleAdd() {
    this.setState({
      items: [
        ...this.state.items,
        prompt('Enter some text')
      ]
    });
  }
  handleRemove(i) {
    let newItems = this.state.items.slice();
    newItems.splice(i, 1);
    this.setState({ items: newItems });
  }
  render() {
    return (
      <div className='container'>
                <TransitionGroup>
                  {this.state.items.map((item, i) => (
                    <CSSTransition
                      timeout={1000}
                      classNames="fade"
                      key={item}
                    >
                      <div>
                        {`${item} `}
                <button onClick={() => this.handleRemove(i)}>
                  &times;
                </button>
              </div>
            </CSSTransition>
          ))}
        </TransitionGroup>
        <button onClick={() => this.handleAdd()}>Add Item</button>
      </div>
    );
  }
}

ReactDOM.render(<TodoList />, document.getElementById('root'))