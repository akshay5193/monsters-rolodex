import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

class App extends Component {

  constructor() {
    super();

    this.state = {
      string: 'Hello Akshay!!!',
      monsters: [],
      searchField: ''
    };
    // this.handleChange = this.handleChange.bind(this);  ----> you don't need this line if you use ES6 arrow function declaration...
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
      .catch(err => console.log('error in getting data'))
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  }

  render() {

    // const monsters = this.state.monsters;
    // const searchField = this.state.searchField;
    const { monsters, searchField } = this.state;

    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="search monsters"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;

        //   <header className="App-header">
        //   <img src={logo} className="App-logo" alt="logo" />
        //   <p>{this.state.string}</p>
        //   <button onClick={() => this.setState({ string: "Hello Ramoli!!!" })}>Change Text</button>
        // </header>
