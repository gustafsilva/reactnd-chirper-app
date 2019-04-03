import React, { Component } from 'react'
import { connect } from 'react-redux';

import { handleInitData } from '../actions/shared';
import Dashboard from './Dashboard';

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(handleInitData());
  }
  
  render() {
    const { loading } = this.props;

    if(loading === true) {
      return <p>Loading...</p>;
    }

    return (
      <div>
        <Dashboard />
      </div>
    )
  }
}

const mapStateToProps = ({ authedUser }) => ({
  loading: authedUser === null
});


export default connect(mapStateToProps)(App);