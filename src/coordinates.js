import React, { Component } from 'react';

class Demographics extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);

  handleClick(event){
      this.props.functionhere(this.props);
  }

  this.state = {
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
        neighorhood: 'shorline'
    }, {
        name: 'sN8CF1D',
        age: 75,
        gender: 'female',
        ethnicity: 'caucasian',
        neighborhood: 'lake city'
    }]
  };
return (

);
}

export default Demographics;