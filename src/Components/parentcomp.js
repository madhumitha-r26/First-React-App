import React, { Component } from 'react'
import PC from './purecomp';
import RC from './regcomp'

class parentcomp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"madhu"
      }
    }

    componentDidMount(){
        setInterval(()=>{
            this.setState({name:"madhu"})
        },3000);
    }

  render() {
    //console.log("Parent Component")
    return <div>i am parent component
      <RC name={this.state.name}/>
      <PC name={this.state.name}/>
      </div>;
  }
}

export default parentcomp