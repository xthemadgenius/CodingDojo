import React from 'react';
import './App.css';
import BigInversion from './components/BigInversion'
import People from './components/people/People';
import MakePeople from './components/people/MakePeople';

function App() {
  return (
    <div className="App">
      <BigInversion firstName={"Bob"} lastName={"Sagot"} age={43} hairColor={"Black"}/>
      <BigInversion firstName={"Romney"} lastName={"Mit"} age={53} hairColor="Gray"/>
      <BigInversion firstName={"Trump"} lastName={"Donald"} age={64} hairColor={"Blonde"}/>
      <BigInversion firstName={"Fish"} lastName={"Moon"} age={22} hairColor={"Rainbow"}/>
      <MakePeople 
      people={[
        {firstName:"Rob", lastName:"steves", age:"4", hairColor:"Gold"},
      ]}
      />
    </div>
  );
}

export default App;
