import React from 'react'

export const InfoGame = ({score,remaining}) => {
  return (
    <div>
        <p>Trials: {score}</p>
        <p>Pairs remaining: {remaining}</p>
    </div>
  )
}
