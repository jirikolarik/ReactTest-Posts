import React, { Component } from 'react';
import './posts.css';

function Item({ item }) {
  return (
    <div className="item">
      <div className="left">
        <div>{item.Id}</div>
        <div>{item.Email}</div>

      </div>

      <div className="right">
        <div>{item.Name}</div>
        <div>{item.Body}</div>
      </div>
    </div>
  )
}

class Posts extends Component<Props> {
  render() {
    const { isFetching, postList } = this.props.posts;
    if (isFetching) {
      return null;
    }

    return (
      <div className="posts">
        {postList.map((item) => <Item key={item.Id} item={item} />)}
      </div>
    );
  }
}

export default Posts;
