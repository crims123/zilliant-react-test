import React, { Component } from 'react';

import '../node_modules/react-md/dist/react-md.deep_orange-blue.min.css'
import Layout from './github/components/Layout'
import Repos from './github/components/Repos'

class App extends Component {
  render() {
    return (
      <Layout>
        <Repos />
      </Layout>
    );
  }
}

export default App;
