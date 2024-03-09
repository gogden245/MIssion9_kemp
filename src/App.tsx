import React from 'react';
import './App.css';
import data from './CollegeBasketballTeams1.json';

interface TeamProps {
  school: string;
  name: string;
  city: string;
  state: string;
}

const teamNames: TeamProps[] = data.teams;

function Welcome() {
  return <h1>NCAA Basketball Teams</h1>;
}

class Team extends React.Component<TeamProps> {
  render() {
    const { school, name, city, state } = this.props;

    return (
      <div className="team-card">
        <h2>School: {school}</h2>
        <h3>Mascot: {name}</h3>
        <h3>
          City: {city}, {state}
        </h3>
        <br></br>
      </div>
    );
  }
}

function TeamList() {
  // this is a function
  return (
    <div className="team-list">
      {teamNames.map((team, index) => (
        <Team key={index} {...team} />
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Welcome />
      <TeamList />
    </div>
  );
}

export default App;
