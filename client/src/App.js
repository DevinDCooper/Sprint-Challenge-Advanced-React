import React from 'react';
import PlayersCard from "./playersCard";
import Navbar from "./Navbar";
import './App.css';


class App extends React.Component {
  state = {
  info: []

  };

  componentDidMount(){
    fetch('http://localhost:5000/api/players')
    .then(res => res.json())
    .then(players =>{
      console.log("dc: App.js CDM: fetch: then2: players", players);
      this.setState({info: players})
    })
    .catch(err => console.error(err));
  }



  render(){
    return (
      <div className="players-info"> 
      <Navbar/>
     {this.state.info.map(data => {
       return <PlayersCard data = {data} key={data.id}/>
     })} 
      </div>
    )
  }
}



export default App;
