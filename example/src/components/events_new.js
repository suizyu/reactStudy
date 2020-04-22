import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

// import { postEvents } from '../actions'

class Events extends Component {

  render() {
    return(
      <React.Fragment>
        <h1>events new</h1>
      </React.Fragment>
    );
  }
}

//const mapDispatchToProps = ({ postEvents })

export default connect(null, null)(Events)