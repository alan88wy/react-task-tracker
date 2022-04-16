import React from 'react'
import PropTypes from 'prop-types'
import { Button } from './Button'
import { useLocation } from 'react-router-dom'

export const Header = ({title, onAdd, showAdd}) => {

  const location = useLocation()

  return (
    <header className='header'>
       <h1>
       {title}
       </h1>
       { location.pathname === '/' &&
         <Button 
          color={showAdd ? 'red': 'green'} 
          onClick = { onAdd } 
          text={showAdd ? 'Close' : 'Add'} 
         />
       }
     </header>
  )
}

Header.defaultProps = {
  title: 'Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// CSS in JS
// Can us this in the above like <Header style={headingStyle}
//
// headingStyle = {
//   backgroundColor: 'black',
//   color: 'red'
// }