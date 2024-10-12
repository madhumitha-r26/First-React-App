import React from 'react';
//import logo from './logo.svg';
import './App.css';
import FC from './Components/FunctionalComp';
import {ClassComp1,ClassComp2} from './Components/ClassComp';
import Click1 from './Components/click';
import Counter from './Components/counter';
import PC from './Components/parentcomp';



function App() {
  return (
    /* <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
     </div> */

        <div>
            <h1>React App</h1>
            <p>This is a React App</p>
            <FC></FC>
            <ClassComp1></ClassComp1>
            <ClassComp2></ClassComp2>
            <Click1 />
            <Counter/>
            <PC/>
        </div>
       
  );
}

export default App;
