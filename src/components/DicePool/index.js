import React, { useCallback } from 'react'
import useMessages from '../../hooks/useMessages'
import { roll } from '../../utils/dice'
import Die from '../Die'
import * as messageTypes from '../../constants/messageTypes'
import './index.scss'

export default ({ dice, setPool }) => {
  const { send } = useMessages()
  const rollPool = useCallback(() => {
    if (!dice || !dice.length) {
      return
    }

    const data = dice.reduce((d, sides, i) => {
      const result = roll(sides)
      d[i] = { sides, result }
      return d
    }, {})

    send(messageTypes.ROLL, { data })
    setPool([])
  }, [dice, send, setPool])

  const clearPool = useCallback(() => {
    setPool([])
  }, [setPool])

  return (
    <>
      <div className='dice-pool'>
        {dice.map((sides, i) => <Die key={i} sides={sides} size='sm' className='pop-in' />)}
      </div>
      <div>
        <button onClick={rollPool}>Roll</button>
        <button onClick={clearPool}>Clear</button>
      </div>
    </>
  )
}
