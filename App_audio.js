import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentSpeaker: "sL13CF1I"
    };
  }
    /*for (i=0; i<audio.length; i++) {
            audioURLs.push("<div id= " + audio[i] + ">" + audio[i] + "<audio controls> <source src=" + currentSpeakerURL + audio[i] + ".mp3> </div>");
        }

    this.props*/

render() {
    let audioURLs = [];
    const audio = ["bull_bowl", "com_calm", "cot_caught", "don_dawn", "bacon", "eggs", "ham", "aid", "awed", "had", "head", "heed",
        "hid", "hide", "hode", "hood", "howd", "hud", "odd", "whod"];
    //Defining Speaker URLs 
    const speakerDigits = [
        {id: "sL13CF1I", digit: 1},
        {id: "sN8CF1D", digit:2},
        {id: "sM22CF2L", digit:3},
        {id: "sR2CF2A", digit:4},
        {id: "sU9CF3E", digit:5},
        {id: "sI30CF3R", digit:7}
    ];
    //Generating audio for each file    
    let currentSpeaker = this.state.currentSpeaker;
    let speakerDigit = speakerDigits.filter(function(d) {
      return d.id ===currentSpeaker;
    })[0].digit;
    let currentSpeakerURL = "http://depts.washington.edu/sociolab/sources/speaker-files/Spk" + speakerDigit + "/";
    for (let i=0; i<audio.length; i++) {
            audioURLs.push("<div>" + audio[i] + "<audio controls> <source src=" + currentSpeakerURL + audio[i] + ".mp3></div>");
        }
return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Sportsball!</h2>
        </div>
        <div className = "content" dangerouslySetInnerHTML =
        {{__html: audioURLs }} />
      </div>
    );
  }
}

export default App;

