import React, { Component } from 'react'
import Master from './Master'
import Slave from './Slave'
import styled from 'styled-components'
// import './App.css'

export class Main extends Component {

  state = {
    range: 0,
    condition: true,
  }

  changeValue = (value) => {
    this.setState({
      range: value
    })
  }

  changeCondition = () => {
    this.setState({
      condition: !this.state.condition
    })
  }

  displaynone = 'abra'

  render() {
    return (
      <MainWrap>
        <Master value={this.changeValue} condition={this.changeCondition} state={this.state} />
        {
          (this.state.condition) ? <Slave state={this.state} /> : <Slave state={this.state} className="abra" />
        }
      </MainWrap>
    )
  }
}

const MainWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr repeat(2, 250px) 1fr;
  grid-template-rows: 130px;
  grid-template-areas: '. master slave .';
  align-items:center;
  justify-items:center;  
  margin-top: 100px;
  grid-gap:20px;
`

export default Main