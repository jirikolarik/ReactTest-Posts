import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from './actions/auth';
import { fetchPosts } from './actions/posts';
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
      
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { auth, posts } = state;
  return { };
};

const mapDispatchToProps = { login, fetchPosts };

export default connect(mapStateToProps, mapDispatchToProps)(App);
