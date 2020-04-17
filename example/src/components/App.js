import React, { Component } from 'react';
import { connect } from 'react-redux';

import { increment, decrement} from '../actions';

// Propsは親のCompornentから値を渡される。
// StateはCompornentの内部でのみ使用される
// Popsは変更不能だが、Stateは変更可能

class App extends Component {
    //reducerで行っているのでconstructorは不要。

  render() {
    const props = this.props
    return(
      <React.Fragment>
        <div>value: { props.value }</div>
        <button onClick={props.increment}>＋１</button>
        <button onClick={props.decrement}>－１</button>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({ value: state.count.value })
const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement())
})

//別の書き方
//const mapDispatchToProps = ({ increment, decrement }}

export default connect(mapStateToProps, mapDispatchToProps)(App)