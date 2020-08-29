import React, { useState, useEffect } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({
    Email: "",
    Password: "",
    ConfirmPw: ""
  });
  
  const getUsers = () => {
    axios.get('http://localhost:5000/api/user/all')
      .then(response => {
        setUsers(response.data);
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    getUsers();  
  }, [])

  const changeHandler = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  }

  const submitHandler = e => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/user', user)
      .then(response => {
        console.log(response);
        getUsers();
      })
      .catch(err => {
        console.log(err);
      })
  }

  return (
    <div className="App">
      <ul>
      {
        users.length == 0 ?
        <li>'No Users Found'</li>
        :
        users.map((item, i) => 
          <li key={i}>{item.email}</li>
        )
      }
      </ul>

      <form onSubmit={ submitHandler }>
        <label htmlFor="Email">Email: </label>
        <input type="text" name="Email" onChange={ changeHandler }/>
        <br/>
        <label htmlFor="Password">Password: </label>
        <input type="password" name="Password" onChange={ changeHandler }/>
        <br/>
        <label htmlFor="ConfirmPw">Confirm: </label>
        <input type="password" name="ConfirmPw" onChange={ changeHandler }/>
        <br/>
        <input type="submit" value="Submit"/>
      </form>
    </div>
  );
}

export default App;
