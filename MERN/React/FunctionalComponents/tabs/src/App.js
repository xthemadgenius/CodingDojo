import React, {useState} from 'react';
import './App.css';
import { Container } from './components/Styles';

import Tabs from './components/Tabs';
import Content from './components/Content';
import btnInfo from './components/btnInfo';

function App() {
  const [content, setContent] = useState({});
  
  return (
    <div className="App">
      <Container>
        <h1>Learn More about the Dojo</h1>
        <Tabs tabs={btnInfo} setContent={setContent}/>
        <Content data={content}/>
      </Container>
    </div>
  );
}

export default App;
