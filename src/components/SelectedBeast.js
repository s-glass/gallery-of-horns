import React from 'react';
import Modal from 'react-bootstrap/Modal'


class SelectedBeast extends React.Component {
  render () {
    console.log(this.props)
    return (
    <>
        <Modal show={this.props.showModal} onHide={this.props.handleCloseModal}>
          <Modal.Header closeButton> <Modal.Title>{this.props.selectedBeastDsc}</Modal.Title></Modal.Header>
          <img src={this.props.selectedHornedBeast} alt='' ></img>
        </Modal>
    </>
    )
  }
}


export default SelectedBeast