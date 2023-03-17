import React from 'react';
import HornedBeast from './HornedBeast';
import data from '../data/data.json'
import '../Main.css'

class Main extends React.Component {
  render() {
    return (
      <main>
        {this.props.data.map((hornedbeast, index) => {
          return (
            <HornedBeast
              title={hornedbeast.title}
              image_url={hornedbeast.image_url} 
              description={hornedbeast.description}
              key={index}
              handleOpenModal={this.props.handleOpenModal}
            />
          )
        })}
      </main>
    )
  }
}

export default Main;