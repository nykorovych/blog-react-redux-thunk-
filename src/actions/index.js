import jsonPlaceholder from "../api/jsonPlaceholder";
import _ from "lodash";

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());

  // const userIds = _.uniq(_.map(getState().posts, "userId"));
  // userIds.forEach((id) => {
  //   dispatch(fetchUser(id));
  // });
  _.chain(getState().posts)
    .map('userId')
    .uniq()
    .forEach(id => dispatch(fetchUser(id)))
    .value()

  // const userIds = getState().posts.map(post => {
  //   return post.userId
  // })
  // const filteredIS = userIds.filter((id, i) =>{
  //   return userIds.indexOf(id) === i
  // })
};

export const fetchPosts = () => async (dispatch) => {
  const res = await jsonPlaceholder.get("posts");
  dispatch({ type: "FETCH_POSTS", payload: res.data });
};

export const fetchUser = (id) => async (dispatch) => {
  const res = await jsonPlaceholder.get(`users/${id}`);

  dispatch({ type: "FETCH_USER", payload: res.data });
};

// --------------------MEMOIZED VERSION
// export const fetchUser = (id) => npm start (dispatch) => _fetchUser(id, dispatch);

// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const res = await jsonPlaceholder.get(`users/${id}`);

//   dispatch({ type: "FETCH_USER", payload: res.data });
// });
