import './app.css';
import React from 'react';
import CardList from './CardList';
import Scroll from './Scroll';
import SearchBox from './SearchBox';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchfield: ""
    }
  }
  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ robots: users }))
  }
  render() {
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })
    return (
      <div className='tc' >
        <h1 className='f1'>RobotFriend</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
      </div>
    )
  }
}

export default App;