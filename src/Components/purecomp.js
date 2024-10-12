import React, { PureComponent } from 'react'

class purecomp extends PureComponent {
  render() {
    //console.log("Pure Component")
    return <div>i am pure component {this.props.name}</div>
  }
}

export default purecomp