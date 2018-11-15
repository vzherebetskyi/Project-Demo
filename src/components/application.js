import React from 'react';
import Title from './title.js';
import Download from './download.js';
import About from './aboutus.js';
import Footer from './footer.js'

export default class App extends React.Component {
    
    render() {
      const title = 'ARTEAM Labs';
      return(
      <div>
      <Title title = {title} />
      <Download />
      <About />
      <Footer />
      </div>
      );
    }
  }