// import React, { useState } from 'react';
import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 },
    ],

    otherState: 'some other value',
    showPersons: false,
  };

  switchNameHandler = () => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximillian';
    this.setState({
      persons: [
        { name: 'Laralam', age: 0 },
        { name: 'Manu', age: 101 },
        { name: 'Sue', age: 303 },
      ],
    });
  };

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Yana', age: 35 },
        { name: event.target.value, age: 35 },
        { name: 'Katia', age: 309 },
      ],
    });
  };

  togglerPersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person) => {
            return <Person name={person.name} age={person.age}></Person>;
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi</h1>
        <p>This is working</p>
        <button style={style} onClick={this.togglerPersonsHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;

// ------------------------------------------ Hooks
/* const App = (props) => {
  const [personState, setpersonsState] = useState({
    persons: [
      { name: 'Lara', age: 0 },
      { name: 'Manu', age: 101 },
      { name: 'Sue', age: 3 },
    ],
  });

  const [otherState, setOtherState] = useState('some other value');

  console.log(personState, otherState);

  const switchNameHandler = () => {
    setpersonsState({
      persons: [
        { name: 'Laralam', age: 0 },
        { name: 'Manu', age: 101 },
        { name: 'Sue', age: 303 },
      ],

      otherState: personState.otherState,
    });
  };

  return (
    <div className="App">
      <h1>Hi</h1>
      <p>This is working</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personState.persons[0].name} age={personState.persons[0].age}></Person>
      <Person name={personState.persons[1].name} age={personState.persons[1].age} click={switchNameHandler}>
        My Hobbies: Racing
      </Person>
      <Person name={personState.persons[2].name} age={personState.persons[2].age}></Person>
    </div>
  );
  // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Hello mai'));
};
 */
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <h1>Hi</h1>
//     </div>
//   );
// }

// export default App;
