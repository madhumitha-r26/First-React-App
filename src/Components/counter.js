import React,{Component} from 'react';
import UpdatedComp from './higherorder';

export class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            count:0
         };
    }
   
    IncrementCount=()=>{
        this.setState({count:this.state.count+1});
    }
    render() { 
        const {count}=this.state;
        return ( 
            <div>
                <button onMouseEnter={this.IncrementCount}>{this.props.name} incremented to {count} times</button>
            </div>
         );
    }
}
 
export default UpdatedComp(Counter);