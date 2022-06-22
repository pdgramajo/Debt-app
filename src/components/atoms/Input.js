import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Input = ({
  id,
  type = 'text',
  size = 'normal',
  disabled,
  placeholder,
  classname,
  value,
  onChange,
  onKeyDown
}) => {
  return (
    <input
      type={type}
      className={classNames(
        'form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none',
        {
          'px-4 py-2 text-xl': !disabled && size === 'normal',
          'px-3 py-1.5 text-base': !disabled && size === 'large',
          'px-2 py-1 text-sm': !disabled && size === 'small',
          'bg-gray-100 bg-clip-padding': disabled
        },
        classname
      )}
      id={id}
      data-testid={`input-control-${id}`}
      placeholder={placeholder}
      disabled={disabled}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  )
}

export default Input

Input.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  size: PropTypes.string,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  classname: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onKeyDown: PropTypes.func
}
