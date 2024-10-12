import React from 'react'
import logo from './logo.svg';
import './App.css';
import ClassProps from './Components/ClassProps';
import FNP from './Components/functioncomp'
import NewComp from './Components/NewComp';


class App extends React.Component{
  styles={
    fontStyle:"bold",
    color:"teal"
  };

  render(){
    return (
      <div className="App">
           <h1 style={this.styles}>HELLO</h1>
           <NewComp></NewComp>

          <ClassProps name="Learner1" place="Place A"> 
            <p>child Component</p>
          </ClassProps>
          <ClassProps name="Learner2" place="Place B"> 
            <button>CLICK</button>
          </ClassProps>
          <ClassProps name="Learner3" place="Place C"> </ClassProps>
          <FNP name="Learner4" place="Place D"></FNP>  
      </div>
    )
}
}



export default App;
