import React, { Component } from 'react'
import styled from 'styled-components'
import '../App.css'

export class Slave extends Component {
  render() {

    if (!this.props.state.condition) {
      this.visible = ''
    } else {
      this.visible = 'visible'
    }

    return (
      <SlaveWrap className={`${this.visible}`} >
        <div>{this.props.state.range}</div>
      </SlaveWrap >
    )
  }
}

const SlaveWrap = styled.div`
 grid-area: slave;
 border: 3px solid black;
 height:100%;
 width:100%;
 display:flex;
 align-items: center;
 justify-content:center;
 border-radius:20px;
 font-size:40px;
 font-weight:bold;
`

export default Slave
