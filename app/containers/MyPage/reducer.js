import { RECEIVE_API_DATA } from './actions';

export const initialState = {
  users: {},
};

const myPageReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case RECEIVE_API_DATA:
      return data;
    default:
      return state;
  }
};

export default myPageReducer;
