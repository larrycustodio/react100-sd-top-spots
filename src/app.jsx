import React, { Component } from 'react';
import axios from 'axios';
import TopSpot from './topspot';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      topspots: []
    }
  }
  componentWillMount() {
    axios.get('https://origin-top-spots-api.herokuapp.com/api/topspots')
      .then(response => response.data)
      .then(topspots => this.setState({ topspots }));
  }
  render() {
    return (
      <div className="App container">
        <div className="row">
          <div className="jumbotron">
            <h1>San Diego Top Spots</h1>
            <p>A list of the top {this.state.topspots.length} places to see in San Diego, California</p>
          </div>
          {this.state.topspots.map(topspot => (
              <TopSpot
                key={topspot.id}
                name={topspot.name}
                description={topspot.description}
                location={topspot.location} />
            ))}
        </div>
      </div>
    );
  }
}