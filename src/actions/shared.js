import { getInitialData } from '../utils/api';
import { receiveTweets } from './tweets';
import { receiveUsers } from './users';
import { setAuthedUser } from './authedUser';

const AUTHED_ID = 'dan_abramov';

export const handleInitData = () => {
  return dispatch => {
    return getInitialData()
      .then(({ users, tweets }) => {
        dispatch(receiveTweets(tweets));
        dispatch(receiveUsers(users));
        dispatch(setAuthedUser(AUTHED_ID));
      });
  }
};
