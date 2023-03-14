import React from 'react';
import HornedBeast from './HornedBeast';

class Main extends React.Component {
  render(){
    return (
      <>
      <h2>Check out these animals with cool horns</h2>

      <HornedBeast title="Cow" description="Brown Cow" imageUrl="https://upload.wikimedia.org/wikipedia/commons/b/b4/Cow_horned_portrait.jpg"/>
      <HornedBeast title="Goat" description="Brown Goat" imageUrl="https://upload.wikimedia.org/wikipedia/commons/b/bf/Goat-Batinah.jpg"/>

      </>
    )
  }
}

export default Main;