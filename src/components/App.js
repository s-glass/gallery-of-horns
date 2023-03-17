// REBUILD AS A CLASS COMPONENT

// 1 - IMPORTS
import React from 'react';
import Header from './Header';
import Main from './Main';
// import HornedBeast from './HornedBeast';
import Footer from './Footer';
import data from '../data/data.json'
import SelectedBeast from './SelectedBeast'
import { Form, ListGroup } from 'react-bootstrap';

// 2 - CREATE THE CLASS - will always have a render method
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      selectedHornedBeast: '',
      selectedBeastDsc: '',
      hornNum: '',
      data: data
    }
  }

  // Modal method to close the modal
  handleCloseModal = () => {
    this.setState({
      showModal: false
    })
  }

  handleOpenModal = (image_url, description) => {
    this.setState({
      showModal: true,
      selectedHornedBeast: image_url,
      selectedBeastDsc: description
    })
  }

  handleSelect = (event) => {
    let selectedHornNum = event.target.value;

    if(selectedHornNum ==='1'){
      let hornData = data.filter(num => num.horns === 1)
      this.setState({
        data: hornData
      })
    } else if(selectedHornNum === '2'){
      let hornData = data.filter(num => num.horns === 2);
      this.setState({
        data: hornData
      })
    } else if(selectedHornNum === '3'){
      let hornData = data.filter(num => num.horns === 3);
      this.setState({
        data: hornData
      })
    } else if(selectedHornNum === '100') {
      let hornData = data.filter(num => num.horns === 100);
      this.setState({
      data: hornData
    })
    } else {
      let hornData = data.filter(num => num.horns >= 1)
      this.setState({
        data: hornData
      })
    }
    console.log(selectedHornNum);
  }

  render() {
    return (
      <>
        <Header />

        <Form onInput={this.submitHandler}>
          <Form.Group>
            <Form.Select name="selected" onChange={this.handleSelect}>
              <option value="">Select A Horn Number to View Filtered Beasts</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="100">100</option>
            </Form.Select>
          </Form.Group>
        </Form>

        <Main data={this.state.data} handleOpenModal={this.handleOpenModal} />

        <SelectedBeast 
        showModal={this.state.showModal} 
        handleCloseModal= {this.handleCloseModal} 
        selectedHornedBeast={this.state.selectedHornedBeast} 
        selectedBeastDsc={this.state.selectedBeastDsc}
        />

        <Footer />
        </>
    )
  }
}

// 3 - EXPORT THE CLASS SO IT'S AVAIL TO INDEX.JS and other files to import
export default App;


//For lab next week:

  // submitHandler = (event) => {
  //   event.preventDefault();

  //   this.setState({
  //     username: event.target.username.value
  //   })

  //   console.log('App state in handler: ', this.state);
  // }

  // handleInput = (event) => {
  //   this.setState({
  //     username: event.target.value
  //   })
  //   console.log('App state in handler: ', this.state)
  // }
