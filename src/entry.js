console.log('entry')

// normally these would be come in the form of ES2015 import statements
// import {Component, render, version} from 'nervjs'
import React, {Component, version} from 'react';
import {render} from 'react-dom'
import {Page, Toolbar, Button} from 'react-onsenui'

const t0 = performance.now();

// import '../node_modules/onsenui/css/onsenui.css';
// import '../node_modules/onsenui/css/onsen-css-components.css';

class Clock extends Component {
  constructor() {
    super();
    // set initial time:
    this.state = {
      time: Date.now()
    };
  }

  componentDidMount() {
    // update time every second
    this.timer = setInterval(() => {
      this.setState({time: Date.now()});
    }, 1000);
    console.log('hi')
    const t1 = performance.now();
    this.setState({timer: (t1 - t0)})
  }

  componentWillUnmount() {
    // stop when not renderable
    clearInterval(this.timer);
  }

  render() {
    let time = new Date(this.state.time).toLocaleTimeString();
    return <div>
      <h3>{'Momo Boilerplate'}</h3>
      <span>{'Nervjs version: ' + version}</span>
      <br/>
      <span>{time}</span>
      <br/>
      <Button style={{margin: '6px'}}>Test button</Button>
      <p>Timer: {this.state.timer}</p>
      {[...Array(10000).keys()].map(function(name, index){
        return <li key={ index }>{index}</li>;
      })}
    </div>;
  }
}

// render an instance of Clock into <body>:
render(<Clock/>, document.getElementById('app'));
