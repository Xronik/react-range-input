import React, { Component } from 'react'
import styled from 'styled-components'
import '../App.css'

export class Master extends Component {
  render() {
    return (
      <MasterWrap>
        <input type="range" defaultValue="0" min="0" max="100" onChange={
          (e) => { this.props.value(e.target.value) }} />
        <button className='green' onClick={(ev) => {
          this.props.condition()
          if (this.props.state.condition) {
            ev.target.className = 'red'
          } else { ev.target.className = 'green' }
        }}>
          {
            (this.props.state.condition) ? 'On' : 'Off'
          }
        </button>
      </MasterWrap>
    )
  }
}

const MasterWrap = styled.div`
 grid-area: master;
 border: 3px solid black;
 display:flex;
 align-items: center;
 justify-content:space-around;
 flex-direction: column;
 height:100%;
 width:100%;
 border-radius:20px;
 input {
   width: 200px;
   margin-top:20px;
   cursor:pointer;
 }
 button {
   margin-bottom:20px;
   width: 100px;
   height: 40px;
   font-size: 20px;
   font-weight:bold;
   border-radius:10px;
   cursor:pointer;
   outline:none;
 }
`

export default Master
