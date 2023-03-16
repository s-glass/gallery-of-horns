import React from 'react';

class Header extends React.Component {
  render () {
    return <h1>Welcome to the Gallery of Horns! {this.props.hearts}</h1>
  }
}

export default Header;