import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Button = ({
  id,
  name,
  disabled,
  handleChange,
  type = 'primary',
  size = 'base',
  className,
  style,
  children
}) => {
  return (
    <button
      id={id}
      data-testid={`button-component-${id}`}
      type="button"
      className={classNames(
        'inline-block',
        {
          'px-3 py-2 text-xs': !disabled && size === 'mini',
          'px-3 py-2 text-sm': !disabled && size === 'small',
          'px-5 py-2.5 text-sm': !disabled && size === 'base',
          'px-5 py-3 text-base': !disabled && size === 'large',
          'px-6 py-3.5 text-base': !disabled && size === 'extralarge',
          'bg-blue-600 text-white font-medium leading-tight uppercase shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out':
            !disabled && type === 'primary',
          'border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out':
            !disabled && type === 'outline',
          'bg-purple-600 text-white font-medium leading-tight uppercase shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out':
            !disabled && type === 'secondary',
          'bg-green-500 text-white font-medium leading-tight uppercase shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out':
            !disabled && type === 'success',
          'bg-red-600 text-white font-medium leading-tight uppercase shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out':
            !disabled && type === 'danger',
          'bg-yellow-500 text-white font-medium leading-tight uppercase shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-700 active:shadow-lg transition duration-150 ease-in-out':
            !disabled && type === 'warning',
          'bg-blue-400 text-white font-medium leading-tight uppercase shadow-md hover:bg-blue-500 hover:shadow-lg focus:bg-blue-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-lg transition duration-150 ease-in-out':
            !disabled && type === 'info',
          'bg-gray-200 text-gray-700 font-medium leading-tight uppercase shadow-md hover:bg-gray-300 hover:shadow-lg focus:bg-gray-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out':
            !disabled && type === 'light',
          'bg-gray-800 text-white font-medium leading-tight uppercase shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out':
            !disabled && type === 'dark',
          'bg-transparent text-blue-600 font-medium leading-tight uppercase hover:text-blue-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out':
            !disabled && type === 'link'
        },
        className
      )}
      name={name}
      style={style}
      onClick={e => {
        if (!disabled) {
          handleChange(e)
        }
      }}
    >
      {children}
    </button>
  )
}

export default Button
Button.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  handleChange: PropTypes.func,
  id: PropTypes.string,
  name: PropTypes.string,
  size: PropTypes.string,
  style: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.objectOf(PropTypes.any)
  ]),
  tooltip: PropTypes.string,
  type: PropTypes.oneOf([
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'light',
    'dark',
    'link',
    'outline'
  ]).isRequired
}
