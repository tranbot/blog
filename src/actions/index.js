import jsonPlaceholder from "../apis/jsonPlaceholder";
import jsonPlaceHolder from "../apis/jsonPlaceholder";

export const fetchPosts = () => async dispatch => {
  // we don't always use 'getState'
  const response = await jsonPlaceholder.get("/posts");

  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

export const fetchUser = id => async dispatch => {
  const response = await jsonPlaceHolder.get(`/users/${id}`);

  dispatch({ type: "FETCH_USER", payload: response.data });
};
