import React, { Component } from 'react'
import bellA from "./bellA.png";
import bellB from "./bellB.png";

class NewComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message:"SUBSCRIBE IT!",
         sub:"SUBSCRIBE",
         imageUrl:bellA
      }
    }
        styles={
          fontStyle:"italic",
          color:"purple"
        };

        buttonChanged=()=>{
            this.setState({
                message:"HIT THE BELL ICON",
                sub:"SUBSCRIBED"
            })
        }
        imageChange=()=>{
          this.setState({
           imageUrl:bellB,
           message:"THANK YOU FOR SUBSCRIBING"
          })
        }

  render() {
    return (
      <div className='App'>
        <h3 style={this.styles}>{this.state.message}</h3>
        <button onClick={this.buttonChanged}>{this.state.sub}</button>
        <p/>
        <img style={{width:"30px",height:"30px"}} src={this.state.imageUrl} alt="" onClick={this.imageChange}/>
      </div>
    )
  }
}

export default NewComp