import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import GraphDisplay from './GraphDisplay.jsx'

class Data extends Component {
  render() {
    return (
      <div className="outerbox">
       <GraphDisplay />
      </div>
    )
  }
}

export default Data;