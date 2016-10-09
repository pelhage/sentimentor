import React, { PropTypes } from 'react'
import './index.css'

const Score = (props) => {
  const { score, positive, negative } = props

  return (
    <div className="Score">
      <p>Score: {score}</p>
      <p>Positive Words: {positive.length}</p>
      <p>Negative Words: {negative.length}</p>
    </div>
  )
}

Score.propTypes = {
  score: PropTypes.number,
  positive: PropTypes.array,
  negative: PropTypes.array
}

export default Score
