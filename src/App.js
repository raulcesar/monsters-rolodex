import { Component } from 'react';
// import logo from './logo.svg';
import { CardList } from './components/card-list/card-list';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor () {
    super();
    this.state = {
      monsters: []
    }
  }
  componentDidMount () {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const persons = res.data;
        this.setState({ monsters: persons });
      })
  }

  render () {
    return (
      <div className="App">
        <CardList monsters={this.state.monsters}>
        </CardList>
      </div>
    );
  }


}

export default App;
