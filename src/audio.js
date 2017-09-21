import React, { Component } from 'react';

class Audio extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
      this.props.functionhere(this.props);
  }

render() {
    const audioURLs =[];
    const audio = [];
    audio.push(
        "bull_bowl", "com_calm", "cot_caught", "don_dawn", "bacon", "eggs", "ham", "aid", "awed", "had", "head", "heed",
        "hid", "hide", "hode", "hood", "howd", "hud", "odd", "whod");

    //Defining Speaker URLs 
    const spk1 = "http://depts.washington.edu/sociolab/sources/speaker-files/Spk1/";
    const spk2 = "http://depts.washington.edu/sociolab/sources/speaker-files/Spk2/";
    const spk3 = "http://depts.washington.edu/sociolab/sources/speaker-files/Spk3/";
    const spk4 = "http://depts.washington.edu/sociolab/sources/speaker-files/Spk4/";
    const spk5 = "http://depts.washington.edu/sociolab/sources/speaker-files/Spk5/";
    const spk6 = "http://depts.washington.edu/sociolab/sources/speaker-files/Spk6/";
    const spk7 = "http://depts.washington.edu/sociolab/sources/speaker-files/Spk7/";
  
    for (i=0; i<audio.length; i++) {
            audioURLs.push("<div id= " + audio[i] + ">" + audio[i] + "<audio controls> <source src=" + spk3 + audio[i] + ".mp3> </div>");
        }
return (
    
    );
    }
}

export default Audio;