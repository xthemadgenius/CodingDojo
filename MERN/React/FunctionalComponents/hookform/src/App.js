import React, {useState} from 'react';
import './App.css';
import HookForm from './components/HookForm';
import User from './components/User';

function App() {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  return (
    <div className="App">
      <HookForm input={state} setInput={setState}/>
      <User data={state}/>
    </div>
  );
}

export default App;
