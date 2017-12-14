import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from './actions/auth';
import { fetchPosts } from './actions/posts';
import { user, posts } from './reducers';
import './App.css';

class App extends Component {
  
  componentDidMount() {
    this.props.login();
    this.props.fetchPosts();
  }

  render() {
    const { user, posts } = this.props;
    return (
      <div className="App">
        <div className="main">
          {this.props.user.firstName}  {this.props.user.lastName}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { auth, posts } = state;
  return {
    user: state.auth.user,
    posts: state.posts.postList
  };
};

const mapDispatchToProps = { login, fetchPosts };

export default connect(mapStateToProps, mapDispatchToProps)(App);
