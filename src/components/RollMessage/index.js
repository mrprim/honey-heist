import React from 'react'
import './index.scss'

export default ({ data }) =>
  <div className='message roll'>
    Rolled {buildMessage(data)}
  </div>

const buildMessage = data => {
  return Object.entries(data)
    .sort(([a], [b]) => a > b ? 1 : -1)
    .map(([_, { sides, result }, i]) => <span key={i} className={`die-result d${sides}`}>{`d${sides}[${result}], `}</span>)
}
