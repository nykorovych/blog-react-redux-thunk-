import jsonPlaceholder from "../api/jsonPlaceholder";
import _ from "lodash";

export const fetchPosts = () => async (dispatch) => {
  const res = await jsonPlaceholder.get("posts");
  dispatch({ type: "FETCH_POSTS", payload: res.data });
};

export const fetchUser = (id) => async (dispatch) => _fetchUser(id, dispatch);

const _fetchUser = _.memoize(async (id, dispatch) => {
  const res = await jsonPlaceholder.get(`users/${id}`);

  dispatch({ type: "FETCH_USER", payload: res.data });
});
