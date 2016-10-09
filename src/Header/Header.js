import React, { PropTypes } from 'react'
import './index.css'

const Header = (props) => {
  return (
    <div className="Header">
      {props.children}
    </div>
  )
}

Header.propTypes = {
  children: PropTypes.node
}

export default Header
