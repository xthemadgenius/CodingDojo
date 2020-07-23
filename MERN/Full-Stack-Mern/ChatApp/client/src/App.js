import React, {useState, useEffect} from 'react';
import io from 'socket.io-client';
import './App.css';
import Chat from './components/Chat'

function App() {

  const [socket, setState] = useState(io(":8000"));

  useEffect(() => {
    console.log("Is the App working?")
    socket.on("Welcome", data => console.log(data));
  })
  return (
    <div className="App">
      <h1>Chat App</h1>
      <hr/>
      <Chat/>
    </div>
  );
}

export default App;
