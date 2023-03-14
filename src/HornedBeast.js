import React from 'react';

class HornedBeast extends React.Component {
  render(){
    return (
      <article>
        <h2>{this.props.title}</h2>

        <img src={this.props.imageUrl} width="500" height="450" alt={this.props.description} title={this.props.title}/>

        <p>{this.props.description}</p>

      </article>
    )
  }
}

export default HornedBeast;