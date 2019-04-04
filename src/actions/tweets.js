import { hideLoading, showLoading } from 'react-redux-loading';

import { saveLikeToggle, saveTweet } from '../utils/api';

export const RECEIVE_TWEETS = 'RECEIVE_TWEETS';
export const TOGGLE_TWEEET = 'TOGGLE_TWEEET';
export const ADD_TWEET = 'ADD_TWEET';

export const receiveTweets = tweets => ({
  type: RECEIVE_TWEETS,
  tweets,
});

const toggleTweet = ({ id, authedUser, hasLiked }) => ({
  type: TOGGLE_TWEEET,
  id,
  authedUser,
  hasLiked
});

const addTweet = tweet => ({
  type: ADD_TWEET,
  tweet
});

export const handleToggleTweet = info => dispatch => {
  dispatch(toggleTweet(info));

  return saveLikeToggle(info)
    .catch(error => {
      console.warn('Error in handleToggleTweet: ', error);
      dispatch(toggleTweet(info));
      alert('The was an error liking the tweet. Try again.');
    });
}

export const handleAddTweet = (text, replyingTo) => (dispatch, getState) => {
  const { authedUser } = getState();

  dispatch(showLoading());

  return saveTweet({
    text,
    author: authedUser,
    replyingTo
  }).then((tweet) => {
      dispatch(addTweet(tweet));
      dispatch(hideLoading());
    });
}
