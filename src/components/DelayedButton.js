// Code DelayedButton Component Here
import React, { Component } from 'react';

export default class DelayedButton extends Component {

  // setTimeout(() => {
  //   handleClick(e) => {
  //     this.props.onDelayedClick(e)
  //   }
  // }, this.props.delay)

  handleClick = (e) => {
    console.log(e)
    e.persist()
    setTimeout(() => this.props.onDelayedClick(e),this.props.delay)
  }


  render() {
    return(
      <div>
      <button onClick={this.handleClick}>Delayed</button>
        {/* <button onClick={(e) => {setTimeout(() => {this.props.onDelayedClick(e)},this.props.delay)}}>Delayed</button> */}
      </div>
    )
  }
}
