import React from 'react';
import './App.css';

import Tinder from './components/Tinder';
import userData from './components/userData';


function App() {
  return (
    <div className="App">
      {userData.map((data,idx) => {
        return (
          <Tinder
          key={idx}
          username={data.username}
          imgUrl={data.imgUrl}
          likeCount={data.likeCount}
          bio={data.bio}
          />
        );
    })}
    </div>
  );
}

export default App;
