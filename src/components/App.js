// REBUILD AS A CLASS COMPONENT

// 1 - IMPORTS
import React from 'react';
import Header from './Header';
import Main from './Main';
import HornedBeast from './HornedBeast';
import Footer from './Footer';
import Modal from 'react-bootstrap/Modal';
// import data from './data/data.json'

// 2 - CREATE THE CLASS - will always have a render method
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      hearts: '',
      showModal: false,
      selectedHornedBeast: ''
    }
  }
  addHearts = () => {
    this.setState({
      hearts: this.state.hearts + '💜'
    })
  }

  // Modal method to close the modal
  handleCloseModal = () =>{
    this.setState({
      showModal: false
    })
  }

  handleOpenModal = (description) => {
    this.setState({
      showModal: true,
      selectedHornedBeast: description
  })
  }


  render(){
    return (
      <>
        <Header hearts={this.state.hearts} />
        <Main addHearts={this.addHearts} handleOpenModal={this.handleOpenModal} />
        <Modal show={this.state.showModal} onHide={this.handleCloseModal}>
          <Modal.Header closeButton>{this.state.selectedHornedBeast}</Modal.Header>
        </Modal>
        {/* <HornedBeast /> */}
        <Footer />
      </>
    )
  }
}

// 3 - EXPORT THE CLASS SO IT'S AVAIL TO INDEX.JS and other files to import
export default App;
