import React, { Component } from 'react';
import axios from 'axios';

import AntList from './Classes/AntList';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = { antData: null, loading: false }

    this.query = '{ ants {name length weight color } }';

    this.getAntData = this.getAntData.bind(this);
  }

  componentWillMount() {
    this.getAntData();
  }

  async getAntData() {
    this.setState({ loading: true });
    try {
      const getQuery = axios(`https://antserver-blocjgjbpw.now.sh/graphql?query=${this.query}`);

      const query = await getQuery;

      const { ants } = query.data.data;

      this.setState({ antData: ants, loading: false});
    }
    catch (e) {
      alert(e);
      this.setState({ loading: false});
    }
  }

  onLoading(){
    if (!this.state.loading)
      return <AntList ants={this.state.antData} />
  }
  render() {
    return (
      <div className="container">
          {this.onLoading()}
      </div>
    );
  }
}











export default App;
