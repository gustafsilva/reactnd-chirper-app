import React, { Component } from 'react'
import { connect } from 'react-redux';

import { handleInitData } from '../actions/shared';


class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(handleInitData());
  }
  
  render() {
    return (
      <div>
        Starter Code
      </div>
    )
  }
}

export default connect()(App);