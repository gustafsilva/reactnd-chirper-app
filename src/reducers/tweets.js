import { RECEIVE_TWEETS, TOGGLE_TWEEET } from '../actions/tweets';

export default function tweets(state = {}, action) {
  const { type } = action;
  switch(type){
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
    default:
      return state;
  }
}