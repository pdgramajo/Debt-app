import React from 'react'
import PropTypes from 'prop-types'

const Label = ({ children }) => {
  return (
    <label htmlFor="floatingInput" className="text-gray-700">
      {children}
    </label>
  )
}

export default Label

Label.propTypes = {
  children: PropTypes.node
}
