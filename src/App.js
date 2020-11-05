import { Component } from 'react';
import { CardList } from './components/card-list/card-list';
import axios from 'axios';

class App extends Component {
  constructor () {
    super();
    this.state = {
      monsters: [],
      searchTerm: ''
    }
  }
  componentDidMount () {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const persons = res.data;
        this.setState({ monsters: persons });
      })
  }
  test(a) {
    console.log(`a: ${a}`);
    console.log(`this: ${this.state.searchTerm}`);
  }
  render () {
    return (
      <div className="App">
        <div>
          hello: {this.state.searchTerm}
        </div>

        <input onChange={e => this.setState({ searchTerm: e.target.value })} type="search" placeholder="Filter" />
        <CardList monsters={this.state.monsters} />
      </div>
    );
  }


}

export default App;
