import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import LoadingBar from 'react-redux-loading';

import { handleInitData } from '../actions/shared';
import Dashboard from './Dashboard';
import NewTweet from './NewTweet';
import TweetPage from './TweetPage';
import Nav from './Nav';

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(handleInitData());
  }

  render() {
    const { loading } = this.props;

    return (
      <Router>
        <Fragment>
        <LoadingBar />
          <div className="container">
            <Nav />
            {loading !== true && (
              <div>
                <Route path="/" exact component={Dashboard} />
                <Route path="/tweet/:id" component={TweetPage} />
                <Route path="/new" component={NewTweet} />
              </div>
            )}
          </div>
        </Fragment>
      </Router>
    )
  }
}

const mapStateToProps = ({ authedUser }) => ({
  loading: authedUser === null
});


export default connect(mapStateToProps)(App);