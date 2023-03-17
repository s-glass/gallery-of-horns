// REBUILD AS A CLASS COMPONENT

// 1 - IMPORTS
import React from 'react';
import Header from './Header';
import Main from './Main';
// import HornedBeast from './HornedBeast';
import Footer from './Footer';
import data from '../data/data.json'
import SelectedBeast from './SelectedBeast'

// 2 - CREATE THE CLASS - will always have a render method
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      selectedHornedBeast: ''
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


  render() {
    return (
      <>
        <Header />
        <Main data={data} handleOpenModal={this.handleOpenModal} />
        <SelectedBeast showModal={this.state.showModal} handleCloseModal= {this.handleCloseModal} selectedHornedBeast={this.state.selectedHornedBeast} selectedBeastDsc={this.state.selectedBeastDsc}/>
        <Footer />
      </>
    )
  }
}

// 3 - EXPORT THE CLASS SO IT'S AVAIL TO INDEX.JS and other files to import
export default App;
