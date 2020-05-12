import React, { useCallback, useState } from 'react'
import Die from '../Die'
import Switch from '@material-ui/core/Switch'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import DicePool from '../DicePool'
import useMessages from '../../hooks/useMessages'
import { roll } from '../../utils/dice'
import * as messageTypes from '../../constants/messageTypes'
import './index.scss'

export default () => {
  const [isPool, setIsPool] = useState(false)
  const [pool, setPool] = useState([])

  const addToPool = useCallback(size => setPool([...pool, size]), [setPool, pool])

  const { send } = useMessages()

  const rollFunc = useCallback(sides => {
    if (isPool) {
      addToPool(sides)
    } else {
      const result = roll(sides)
      send(messageTypes.ROLL, { data: { 0: { sides, result } } })
    }
  }, [send, isPool, addToPool])

  return (
    <div className='dice-roller'>
      <div className='dice'>
        <Die sides={4} rollFunc={rollFunc} />
        <Die sides={6} rollFunc={rollFunc} />
        <Die sides={8} rollFunc={rollFunc} />
        <Die sides={10} rollFunc={rollFunc} />
        <Die sides={12} rollFunc={rollFunc} />
        <Die sides={20} rollFunc={rollFunc} />
        <Die sides={100} rollFunc={rollFunc} />
      </div>

      <FormGroup row>
        <FormControlLabel control={<Switch checked={isPool} onChange={() => setIsPool(prev => !prev)} />} label='Pool Mode' />
      </FormGroup>

      {isPool ? <DicePool dice={pool} setPool={setPool} /> : null}
    </div>
  )
}
