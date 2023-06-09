import './app.css';
import React from 'react';
import CardList from '../Components/CardList';
import ErrorBoundary from '../Components/ErrorBoundary';
import Scroll from '../Components/Scroll';
import SearchBox from '../Components/SearchBox';

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
    const { robots, searchfield } = this.state
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase())
    })
    return (
      <div className='tc' >
        <h1 className='f1'>RobotFriend</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <ErrorBoundary>
            <CardList robots={filteredRobots} />
          </ErrorBoundary>
        </Scroll>
      </div>
    )
  }
}

export default App;