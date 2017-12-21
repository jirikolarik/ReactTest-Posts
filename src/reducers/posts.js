import { POSTS_REQUEST, POSTS_SUCCESS } from '../constants';

const posts = (state = { postList:[] }, action) => {
  switch (action.type) {
    case POSTS_REQUEST:
      return Object.assign({ isFetching: true } ,state);
    case POSTS_SUCCESS:
      return {
        postList: action.payload,
        isFetching: false
      }
    default:
      return state;
  }
};

export default posts;
