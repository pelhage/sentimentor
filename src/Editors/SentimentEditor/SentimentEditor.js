import React, { PropTypes } from 'react'
import './index.css'
import '../Index.css'

const SentimentEditor = (props) => {
  return (
    <section className="SentimentEditor">
      {props.children}
    </section>
  )
}

SentimentEditor.propTypes = {
  children: PropTypes.node
}

export default SentimentEditor
