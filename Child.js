
import React, { Component } from 'react';


class Child extends Component {

  constructor(props) {
    super(props)
  }
componentWillMount()
{

}
  render() { 
    return (
      <div >
     
      <h1>{this.props.data}</h1>
    <button onClick={()=>this.props.childCall()} > click me for alert
      </button>
      </div>
    )
  }
}

export default Child;
