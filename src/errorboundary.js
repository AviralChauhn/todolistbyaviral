import React, { Component } from 'react'

export default class errorboundary extends Component {
    constructor(props){
        super.props

this.state={
    error:null,errorInfo:null,
}   
 }
 componentDidCatch(error,info){
    this.setState({
        error:error,
        errorInfo:info
    })
 }
  render() {
    if(this.state.errorinfo){

    return (
      <div>
        <h1>errror Occured</h1>
      </div>
    )
    }
    return this.props.children
  }
}
