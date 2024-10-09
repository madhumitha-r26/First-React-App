import React,{Component} from 'react';

class Click extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            count:0
    }  
     }
    render() { 
        const {count}=this.state;
        return ( 
            <div>
                <button>CLICKED {count} TIMES</button>
            </div>
         );
    }
}
 
export default Click;