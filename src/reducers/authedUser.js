import { SET_AUTHED_USER } from '../actions/authedUser';

export default function authedUser(state = null, action) {
  const { type, user } = action;
  switch(type) {
    case SET_AUTHED_USER:
      return user;
    default:
      return state;
  }
}