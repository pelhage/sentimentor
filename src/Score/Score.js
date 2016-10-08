import React, { PropTypes } from 'react'

const Score = (props) => {
  const { score, positive, negative } = props

  return (
    <div>
      <div>Score: {score}</div>
      <div>Positive Words: {positive.length}</div>
      <div>Negative Words: {negative.length}</div>
    </div>
  )
}

Score.propTypes = {
  score: PropTypes.number,
  positive: PropTypes.array,
  negative: PropTypes.array
}

export default Score
