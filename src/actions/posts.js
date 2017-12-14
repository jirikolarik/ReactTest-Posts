import api from '../api/fakeApi';
import { POSTS_REQUEST, POSTS_SUCCESS } from '../constants';

function fethingPosts() {
  return {
    type: POSTS_REQUEST,
  };
}
function postsSuccess(postList) {
  return {
    type: POSTS_SUCCESS,
    payload: postList,
  };
}

export function fetchPosts() {
  return (dispatch) => {
    dispatch(fethingPosts());
    return api.fetchPosts()
      .then((posts) => dispatch(postsSuccess(posts)));
  };
}
