import React, { useCallback } from 'react'
import './index.scss'

export default ({ sides, size = 'md', className, rollFunc = sides => { } }) => {
  const onClick = useCallback(() => {
    rollFunc(sides)
  }, [rollFunc, sides])

  return (
    <div className={`die d${sides} ${size} ${className}`} onClick={onClick}>
      d{sides}
    </div>
  )
}
