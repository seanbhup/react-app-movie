import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import $ from 'jquery'
import Movie from "./Movie"

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      movies: []
    }
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount(){
    var url = "https://api.themoviedb.org/3/movie/now_playing?api_key=55e2d237df80ec5178651841fda5124c"
    $.getJSON(url, (nowPlayingData) =>{
      this.setState({
        movies: nowPlayingData.results
      })
    });
  }

  render() {
    var moviePosters = [];
    this.state.movies.map((movie,index) => {
      moviePosters.push(<Movie movie={movie} key={index} />)
    })

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="App-intro">
          {moviePosters}
        </div>
        
      </div>
    );
  }
}

export default App;
