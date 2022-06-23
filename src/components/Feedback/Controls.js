import React from 'react'
import Button from './Button'

const Controls = ({ buttons }) => {
  return (
    <div>
      {buttons.map((button) => (
        <Button
          key={button.key}
          event={button.event}
        />
      ))}
    </div>
  )
}

export default Controls