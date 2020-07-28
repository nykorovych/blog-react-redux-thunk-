import React from "react";
import { connect } from "react-redux";
import { fetchPosts, fetchPostsAndUsers } from "../actions";
import UserHeader from './UserHeader'

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPostsAndUsers();
  }
  renderList() {
    return this.props.posts.map((post) => {
      return (
        <div className="item" key={post.id}>
          <i className="latge middle aligned icon user"></i>
          <div className="content">
            <div className="description">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
            <UserHeader userId={post.userId}></UserHeader>
          </div>

        </div>
      );
    });
  }
  render() {
    console.log(this.props.posts);
    return <div className="ui relaxed divided list"
    >{this.renderList()}</div>;
  }
}
const mstp = (state) => {
  return { posts: state.posts };
};
export default connect(mstp, { fetchPosts: fetchPosts, fetchPostsAndUsers })(PostList);
