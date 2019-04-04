import { RECEIVE_TWEETS, TOGGLE_TWEEET, ADD_TWEET } from '../actions/tweets';

export default function tweets(state = {}, action) {
  switch(action.type){
    case RECEIVE_TWEETS:
      const { tweets } = action;

      return {
        ...state,
        ...tweets
      };
    case TOGGLE_TWEEET:
      const { id, hasLiked, authedUser} = action;

      return {
        ...state,
        [id]: {
          ...state[id],
          likes: hasLiked === true
            ? state[id].likes.filter(userId => userId !== authedUser)
            : state[id].likes.concat([authedUser])
        }
      };
    case ADD_TWEET:
      const { tweet } = action;
      
      let replyingTo = {};
      if(tweet.replyingTo !== null) {
        replyingTo = {
          [tweet.replyingTo]: {
            ...state[tweet.replyingTo],
            replies: state[tweet.replyingTo].replies.concat([tweet.id])
          }
        };
      }

      return {
        ...state,
        [tweet.id]: tweet,
        ...replyingTo
      };
    default:
      return state;
  }
}