import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';

//Calling super() inside of any method (constructor() in this case), means it will call the method (constructor()) from the class it extends from (Component class) because we are extending Component. All the initialization happens in Component.

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfiled: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState({ robots: users }));
  }

  onSearchChange = (event) => {
    this.setState({ searchfiled: event.target.value });
  };

  render() {
    const { robots, searchfiled } = this.state;
    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchfiled.toLowerCase());
    });
    return !robots.length ? (
      <h2 className="white mt3 ml3">Loading...</h2>
    ) : (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <ErrorBoundry>
            <CardList robots={filteredRobots} />
          </ErrorBoundry>
        </Scroll>
      </div>
    );
  }
}

export default App;
