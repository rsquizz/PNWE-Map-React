import React, { Component } from 'react';
import './App.css';
import Audio from './Audio';

//TODO: Match cirlces with speaker ID & age, populate demodata on hover, populate audiofiles on click
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentSpeaker: null,
      speakers: [{
        name: 'sL13CF1I',
        age: 92,
        gender: 'female',
        ethnicity: 'caucasian',
        neighborhood: 'lake forest park'
    }, {
        name: 'sR2CF2A',
        age: 41,
        gender: 'female',
        ethnicity: 'caucasian',
        neighborhood: 'ravenna'
    }, {
        name: 'sI30CF3R',
        age: 25,
        gender: 'female',
        ethnicity: 'caucasian',
        neighborhood: 'phinney ridge'
    }, {
        name: 'sU9CF3E',
        age: 26,
        gender: 'female',
        ethnicity: 'caucasian',
        neighborhood: 'northgate'
    }, {
        name: 'sM22CF2L',
        age: 58,
        gender: 'female',
        ethnicity: 'caucasian',
        neighorhood: 'shoreline'
    }, {
        name: 'sN8CF1D',
        age: 75,
        gender: 'female',
        ethnicity: 'caucasian',
        neighborhood: 'lake city'
      }]
    };

    this.mouseOver = this.mouseOver.bind(this);
  }
  
  mouseOver (e) {
    const id = e.target.id;
    const currentSpeaker = this.state.speakers.filter((speaker) =>
    (speaker.name === id))[0];
    this.setState({ currentSpeaker });
    };
  
  render() { //remember, rendering/validation happens here and not before
   let audioPanel = <div />
   if (this.state.currentSpeaker !== null) {
      const { age, gender, ethnicity } = this.state.currentSpeaker;
      //Consider setting audio panel width to make it wider
      audioPanel = <div id="audioPanel">
        <div className="App-header">
        <h3>About this speaker:</h3>
        </div>
            <div id="demoData">
                <div id="age"><p>Age: {age}</p></div>
                <div id="gender"><p>Gender: {gender}</p></div>
                <div id="ethnicity"><p>Ethnicity: {ethnicity}</p></div>
            </div>
            <Audio currentSpeaker= {this.state.currentSpeaker} />
            </div>
   } else {
     audioPanel = <div id="audioPanel">
     <div className="App-header">
        <h2>Hover over a circle on the map to choose a speaker</h2>
      </div>
      </div>
   }
   return ( //output for the page
      <div className="App">
        <div className="App-header">
          <h3>Listen to English in the Pacific Northwest</h3>
        </div>
        <div id="container">
          <div id="mapContainer">
            <img id="seattlemap" src={require("./seattlemap.PNG")} alt="a map of Seattle" />
            <svg width="600" height="500">
              <circle id="sM22CF2L" cx="355" cy="35" onClick={this.handleClick} onMouseOver={this.mouseOver}/>
              <circle id="sL13CF1I" cx="553" cy="42" onClick={this.handleClick} onMouseOver={this.mouseOver}/>
              <circle id="sI30CF3R" cx="325" cy="380" onClick={this.handleClick} onMouseOver={this.mouseOver}/>
              <circle id="sR2CF2A" cx="485" cy="375" onClick={this.handleClick} onMouseOver={this.mouseOver}/>
              <circle id="sN8CF1D" cx="502" cy="190" onClick={this.handleClick} onMouseOver={this.mouseOver}/>
              <circle id="sU9CF3E" cx="422" cy="235" onClick={this.handleClick} onMouseOver={this.mouseOver}/>
            </svg>
          </div>
        </div>
        {audioPanel}
      </div>
    );
  }
}

export default App;
//event listener for hover works, onclick doesn't
//make demodata