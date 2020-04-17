// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Hello World!
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React, { Component } from 'react';

// Propsは親のCompornentから値を渡される。
// StateはCompornentの内部でのみ使用される
// Popsは変更不能だが、Stateは変更可能

const App = () => (<Counter></Counter>);

class Counter extends Component {
  constructor(props) {
    super(props)    
    console.log(this.state)
    this.state = { count: 0 }
  }

  countPlus = () => {
    // NGパターン
    // this.state = {count: this.state.count + 5};
    // setStateが実行されると、コールバックでrenderが作動する。
    
    this.setState({ count: this.state.count + 1})
  }

  countMinus = () => {
    this.setState({ count: this.state.count -1})
  }

  render() {
    return(
      <React.Fragment>
        <div>count: { this.state.count }</div>
        <button onClick={this.countPlus}>＋１</button>
        <button onClick={this.countMinus}>－１</button>
      </React.Fragment>
    );
  }
}

export default App;