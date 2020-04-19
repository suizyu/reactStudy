import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment, decrement} from '../actions';

class EventsIndex extends Component {
  componentDidMount(){
    console.log('hello');
    this.props.readEvents();
  }
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
const mapDispatchToProps = dispatch => ({ readEvents })

export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex)