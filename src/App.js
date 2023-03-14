// REBUILD AS A CLASS COMPONENT

// 1 - IMPORTS
import React from 'react';
import Header from './Header';
import Main from './Main';
import HornedBeast from './HornedBeast';
import Footer from './Footer';

// 2 - CREATE THE CLASS - will always have a render method
class App extends React.Component {
  render(){
    return (
      <>
        <Header />
        <Main />
        <HornedBeast />
        <Footer />
      </>
    )
  }
}

// 3 - EXPORT THE CLASS SO IT'S AVAIL TO INDEX.JS and other files to import
export default App;
