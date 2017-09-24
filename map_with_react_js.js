import React, { Component } from 'react';


class App extends Component {

  constructor()
  {
    super()
    this.state={
      data:[
        {
          name:'john',
          email:'john@test.com'
        },
        {
          name:'keli',
          email:'keli@test.com'
        },
        {
          name:'sam',
          email:'sam@test.com'
        },
      ]
    }
  }

 
  render() {
   
    return (
      <div className="App">
        <h1>map function in react js</h1>
        {
          this.state.data.map((rowdata,i)=>
    <div>
    <span>{i}</span> 
      { "   "}
      <span>{rowdata.name}</span> 
      { "   "}
    <span>{rowdata.email}</span>
      </div>
    )
        }
      </div>
    );
  }
}

export default App;
