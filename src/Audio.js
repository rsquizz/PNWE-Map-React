import React, { Component } from 'react';

//removing "bacon" due to url errors
const audio = ["bull_bowl", "com_calm", "cot_caught", "don_dawn", "eggs", "ham", "aid", "awed", "had", "head", "heed",
"hid", "hide", "hode", "hood", "howd"];

class Audio extends Component {

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.currentSpeaker !== this.props.currentSpeaker && prevProps.currentSpeaker !== null) {
      audio.forEach((name, index) => {
        this.refs['audio' + index].load()
      });
    }
  }
  
  render(props) {
    let audioURLs = [];
    
    //Defining Speaker URLs 
    const speakerDigits = [
      {id: "sL13CF1I", digit: 1},
      {id: "sN8CF1D", digit:2},
      {id: "sM22CF2L", digit:3},
      {id: "sR2CF2A", digit:4},
      {id: "sU9CF3E", digit:5},
      {id: "sI30CF3R", digit:7}//7 is correct, I'm skipping speaker 6
    ];
    //Generating audio for each file    
    let currentSpeaker = this.props.currentSpeaker.name;
    let speakerDigit = speakerDigits.filter(function(d) {
      return d.id ===currentSpeaker;
    })[0].digit;
    let currentSpeakerURL = "http://depts.washington.edu/sociolab/sources/speaker-files/Spk" + speakerDigit + "/";
    //TODO: Align the play buttons on the audio controls (by creating a container for the text rendered by {audio[i]})
    for (let i=0; i<audio.length; i++) {
          audioURLs.push(<div key={i}>
            {audio[i]}
            <audio controls ref={'audio' + i}>
              <source src={currentSpeakerURL + audio[i] + '.mp3'} />
            </audio>
          </div>);
        }
  return (
      <div className="App">
        <div className="App-header">
          <h3>Click on the play button to listen!</h3>
        </div>
        <div className = "content">
        { audioURLs } 
        </div>
      </div>
    );
  }
}

export default Audio;