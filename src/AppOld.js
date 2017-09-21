import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import ReactDOM from 'react-dom';
import './App.css';

//Previous version using google-map-react

const shorelinePopup = ({ text }) => (
  <div style = {{
    position: 'relative', color: 'white', background: 'blue',
    height: 40, width: 60, top: -20, left: -30,
  }}>
    {text}
  </div>
);

class App extends Component {
  static defaultProps = {
    center: {lat: 47.6883402, lng: -122.358208},
    zoom: 11
  };
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Listen to English in the Pacific Northwest</h2>
        </div>
      <GoogleMapReact
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      >
        <shorelinePopup
          lat={47.756}
          lng={-122.3457}
          text={'Shoreline'}
          />
        </GoogleMapReact>
      </div>
    );
  }
}
ReactDOM.render(
  <div style={{width: '100%', height: '400px'}}>
    <App/>
  </div>,
  document.getElementById('root')
);

export default App;
