import { Component } from 'react';
import { CardList } from './components/card-list/card-list';
import { SearchBox } from './components/search-box/search-box';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor () {
    super();
    this.state = {
      monsters: [],
      searchTerm: ''
    }

    // this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount () {
    // fetch('http://localhost:3030/pessoa/1512/fotothumb/1')
    //   // fetch('http://localhost:3030/infoKDConnections')
    //   .then(response => {
    //     console.log(response);
    //   })

    // axios.get(`http://localhost:3030/pessoa/1512/fotothumb/1`)
    //   .then(res => {
    //     console.log(res.data);
    //   });

    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const persons = res.data;
        this.setState({ monsters: persons });
      });
  }

  handleChange = (e) => {
    this.setState({ searchTerm: e.target.value })
  }

  render () {
    const { monsters, searchTerm } = this.state;
    const filteredMonsters = monsters.filter(monster => {
      return monster.username.toLowerCase().includes(searchTerm.toLowerCase());
    });


    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox placeholder='Filter' handleChange={this.handleChange} />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }


}

export default App;
