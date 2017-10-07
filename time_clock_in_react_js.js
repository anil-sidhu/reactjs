import React, { Component } from 'react';

class App extends Component {

  constructor() {
    super()
this.state={time:new Date()}
  }

  currentTime()
  {
    this.setState({
      time: new Date()
    })
  }
  componentWillMount()
  {
setInterval(()=>this.currentTime(),1000)
  }


  render() {

    return (
      <h1>
        {this.state.time.toLocaleTimeString()}
      </h1>
    )
  }
}

export default App;
