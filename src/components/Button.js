import React from 'react'
import PropTypes from 'prop-types'

export const Button = ({color, text, onClick, showAddTask}) => {

  return (
    
      <button
      onClick={onClick}
        style={{backgroundColor: color}} 
        text={text}
        className='btn'
      >
      {text}
      </button>
  )
}

Button.defaultProps = {
  color: 'steelblue',
  text: 'Add'
}

Button.propTyprd = {
  color: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func,
  showAddTask: PropTypes.bool
}
