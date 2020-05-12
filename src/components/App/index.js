import React from 'react'
import Context from '../Context'
import Messages from '../Messages'
import Chatbox from '../Chatbox'
import Login from '../Login'
import './index.scss'
import DiceRoller from '../DiceRoller'
import Debug from '../Debug'

export default () =>
  <Context>
    {/* <Debug /> */}
    <div className='App'>
      <div className='contents'>
        {/* {<Login />} */}
        <Chatbox />
        <DiceRoller />
        <Messages />
      </div>
    </div>
  </Context>
