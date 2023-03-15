import React from 'react';
import '../HornedBeast.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      votes: 0,
      feedMe: false
    }
  }

  // Method to update state for each hornedbeast to track votes
  handleVote = () => {
    // react method called this.setState() -> takes in an object and rebuilds that state object
    this.setState({
      votes: this.state.votes + 1
    })
  }

  // Methods to update state of feedMe // ternary - wtf?
  // what? true : false

  needsFood = () => {
    this.setState({
      feedMe: true
    })
  }

  wasFed = () => {
    this.setState({
      feedMe: false
    })
  }

  render() {
    return (
      //       <article>
      //         <h3>{this.props.title}</h3>
      //         <p>💜 {this.state.votes}</p>
      //         <p onClick={this.handleVote}>Favorite Me!</p>
      //         <img src={this.props.image_url} alt={this.props.title} />
      //         <Button onClick={this.needsFood} variant="info">I'm hungry</Button>
      //         <Button onClick={this.wasFed} variant="warning">I've been fed</Button>

      //         <div>{this.state.feedMe ? 'I am hungry!' : ''}</div>
      //       </article>
      //     )
      //   }
      // }

      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={this.props.image_url} alt={this.props.title} />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>
            <h5>💜 {this.state.votes}</h5>
            <p onClick={this.handleVote}>Favorite Me!</p>
          </Card.Text>
          <Button onClick={this.needsFood} variant="info">I'm hungry</Button>
          <Button onClick={this.wasFed} variant="warning">I've been fed</Button>
          <div>{this.state.feedMe ? 'I am hungry!' : ''}</div>
        </Card.Body>
      </Card>
    );
  }
}

export default HornedBeast;