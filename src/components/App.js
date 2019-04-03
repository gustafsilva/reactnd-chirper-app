import React, { Component } from 'react'
import { connect } from 'react-redux';
import LoadingBar from 'react-redux-loading';

import { handleInitData } from '../actions/shared';
import Dashboard from './Dashboard';

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(handleInitData());
  }
  
  render() {
    const { loading } = this.props;

    return (
      <div>
        <LoadingBar />
        {loading !== true && <Dashboard />}
      </div>
    )
  }
}

const mapStateToProps = ({ authedUser }) => ({
  loading: authedUser === null
});


export default connect(mapStateToProps)(App);