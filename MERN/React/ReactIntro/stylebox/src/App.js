import React from 'react';
import { Provider } from 'styletron-react';
import { Client as Styletron } from 'styletron-engine-atomic';
import './App.css';

import OtherComponents from './components/OtherComponents';
// import SomeOtherComponent from './otherComp/SomeOtherComponent'; //DO Not Use until you understand the code for the OtherComp directory

const engine = new Styletron();

function App() {
  return (
    <Provider value={engine}>
      <OtherComponents/>
    </Provider>
  );
}

export default App;

//!!!Use Components Directory only to style Css for divs
// Do Not use Other Comp Directory Code will Fail
