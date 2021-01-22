import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = (props) => {
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

export default App;

/* state = {
  persons: [
    { name: 'Lara', age: 0 },
    { name: 'Manu', age: 101 },
    { name: 'Sue', age: 3 },
  ],

  otherState: 'some other value',
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
}; */

// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <h1>Hi</h1>
//     </div>
//   );
// }

// export default App;
