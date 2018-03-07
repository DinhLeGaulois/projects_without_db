import React from 'react'
import PropTypes from 'prop-types'

const CalcBtn = ({ children, onBtnClick }) => {
  return (
    <button
      className="btnCalc"
      onClick={e => {
        e.preventDefault()
        onBtnClick()
      }}
    >
      {children}
    </button>
  )
}

CalcBtn.propTypes = {
  children: PropTypes.node.isRequired,
  onBtnClick: PropTypes.func.isRequired
}

export default CalcBtn
