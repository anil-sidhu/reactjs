import React, { Component } from 'react';

class App extends Component {

  constructor() {
    super()
    this.state = {
      data: [],
    }
  }
  componentDidMount() {
    return fetch('https://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {
       
        this.setState({
          data:responseJson.movies
        })
        console.log(this.state.data)
      })
    }
  render() {
    return (
      <div>
        {
          this.state.data.map( (dynamicData,key)=>
          <div>
            {
              dynamicData.title
            }
            </div>

          )
        }

      </div>
    )
  }
}

export default App;

