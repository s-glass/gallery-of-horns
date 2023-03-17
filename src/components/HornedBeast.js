import React from 'react';
import '../HornedBeast.css';
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import Header from './Header'

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

  // needsFood = () => {
  //   this.setState({
  //     feedMe: true
  //   })
  // }

  // wasFed = () => {
  //   this.setState({
  //     feedMe: false
  //   })
  // }
  // Handler to call the open modal that requires an argument
  handleImgClick = () => {
    this.props.handleOpenModal(this.props.image_url, this.props.description)
  }

  render() {
    return (
      <>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" onClick={this.handleImgClick} src={this.props.image_url} alt={this.props.description} />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>
            <p onClick={this.handleVote}>Favorite Me! {this.state.votes}💜</p>
          </Card.Text>
          {/* <Button onClick={this.needsFood} variant="info">I'm hungry</Button>
          <Button onClick={this.wasFed} variant="warning">I've been fed</Button> */}
          <div>{this.state.feedMe ? 'I am hungry!' : ''}</div>
        </Card.Body>
      </Card>

      </>
    );
  }
}

export default HornedBeast;