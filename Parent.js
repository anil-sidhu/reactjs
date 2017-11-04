import React, { Component } from 'react';


import Child from "./Child"; 
class App extends Component {

  constructor(props) {
    super(props)
  }

  childCall()
  {
    alert("hello , this call from child component")
  }
  
  render() { 
    return (
      <div >
      <Child childCall={this.childCall.bind(this)} data="hello Son" />
    
      </div>
    )
  }
}

export default App;
