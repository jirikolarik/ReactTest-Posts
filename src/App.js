// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from './actions/auth';
import { fetchPosts } from './actions/posts';
import Header from './components/header/header';
import Posts from './components/posts/posts';
import './App.css';

type Props = {
  user: {
    firstName: string,
    lastName: string,
    gender: 'Male' | 'Female',
    maritalStatus: ?string
  },
  posts: {
    isFetching: boolean,
    postList: Array<{
      PostID: number,
      Id: number,
      Name: string,
      Email: string,
      Body: string
    }>
  }
}

class App extends Component<Props> {

  componentDidMount() {
    this.props.login();
    this.props.fetchPosts();
  }

  render() {
    const { user, posts } = this.props;
    return (
      <div className="App">
        <Header user={user} />
        <Posts posts={posts}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { auth, posts } = state;
  return {
    user: auth && auth.user,
    posts
  };
};

const mapDispatchToProps = { login, fetchPosts };

export default connect(mapStateToProps, mapDispatchToProps)(App);
