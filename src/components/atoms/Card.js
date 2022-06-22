import React from 'react'
import PropTypes from 'prop-types'

const Card = ({ title, children }) => {
  return (
    <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
      <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">
        {title}
      </h5>
      {children}
    </div>
  )
}

export default Card

Card.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node
}
