import React, { Component } from 'react';
import './header.css';


class Header extends Component<Props> {

  preName = () => {
    const { gender, maritalStatus } = this.props.user;
    if (gender === 'Male') {
      return (<span>Mr.</span>)
    }

    switch (maritalStatus) {
      case 'Married':
        return <span>Mrs</span>
      case 'Not married':
        return <span>Miss</span>
      default:
        return <span>Ms</span>
    }
  }

  render() {
    const { firstName, lastName, gender, maritalStatus } = this.props.user;
    return (
      <header className="header">
        <nav className="navigation">
          <span className="nav-item">New Post</span>
          <span className="nav-item">View Post</span>
          <span className="nav-item">Delete Post</span>
        </nav>

        <div>
          Welcome {this.preName()} {firstName} {lastName}
        </div>
      </header>
    );
  }
}

export default Header;
