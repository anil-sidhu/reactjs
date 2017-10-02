import React, { Component } from 'react';


class App extends Component {

  constructor() {
    super()
    this.state={
     showMe:true
    }
  }
operation()
{
  this.setState({
    showMe:!this.state.showMe
  })
}

  render() {
    return (
      <div>
        <h1>
          Hide and Show in React js
        </h1>
        {
          this.state.showMe?
          <div>
          Please hide me
        </div>
        :null
        }
        
        <button onClick={()=>this.operation()}>Click Me</button>
      </div>
    )
  }
}

export default App;
