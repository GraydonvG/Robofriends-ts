import { useEffect, useState, ChangeEvent } from 'react';

import { getData } from '../utils/data.utils';

import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

export type Robots = {
  id: number;
  name: string;
  email: string;
};

function App() {
  const [robots, setRobots] = useState<Robots[]>([]);
  const [filteredRobots, setFilteredRobots] = useState(robots);
  const [searchField, setSearchField] = useState('');

  useEffect(() => {
    async function fetchUsers() {
      const users = await getData<Robots[]>('https://jsonplaceholder.typicode.com/users');
      setRobots(users);
    }
    fetchUsers();
  }, []);

  useEffect(() => {
    const filteringRobots = robots.filter((robot) => {
      return robot.name.toLocaleLowerCase().includes(searchField.toLocaleLowerCase());
    });
    setFilteredRobots(filteringRobots);
  }, [robots, searchField]);

  function onSearchChange(event: ChangeEvent<HTMLInputElement>): void {
    setSearchField(event.target.value);
  }

  return !robots.length ? (
    <h2 className="white mt3 ml3">Loading...</h2>
  ) : (
    <div className="tc">
      <h1 className="f1">RoboFriends</h1>
      <SearchBox
        searchChange={onSearchChange}
        placeHolder={'search robots'}
      />
      <Scroll>
        <CardList robots={filteredRobots} />
      </Scroll>
    </div>
  );
}

export default App;
