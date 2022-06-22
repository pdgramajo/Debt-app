import React, { useState } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Input from '../atoms/Input'

const AutoComplete = ({
  suggestions,
  propertyToSearch = 'value',
  notFoundText = 'sorry no suggestions'
}) => {
  const [filteredSuggestions, setFilteredSuggestions] = useState([])
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0)
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [input, setInput] = useState('')

  const onChange = e => {
    const userInput = e.target.value

    // Filter our suggestions that don't contain the user's input
    const unLinked = suggestions.filter(
      suggestion =>
        suggestion[propertyToSearch]
          .toLowerCase()
          .indexOf(userInput.toLowerCase()) > -1
    )

    setInput(e.target.value)
    setFilteredSuggestions(unLinked)
    setActiveSuggestionIndex(0)
    setShowSuggestions(true)
  }

  const onClick = e => {
    setFilteredSuggestions([])
    setInput(e.target.innerText)
    setActiveSuggestionIndex(0)
    setShowSuggestions(false)

    // handleOnClick(e.target.innerText)
  }

  const onKeyDown = e => {
    // User pressed the enter key
    if (e.keyCode === 13) {
      setInput(filteredSuggestions[activeSuggestionIndex][propertyToSearch])
      setActiveSuggestionIndex(0)
      setShowSuggestions(false)
    }
    // User pressed the up arrow
    else if (e.keyCode === 38) {
      if (activeSuggestionIndex === 0) {
        return
      }

      setActiveSuggestionIndex(activeSuggestionIndex - 1)
    }
    // User pressed the down arrow
    else if (e.keyCode === 40) {
      if (activeSuggestionIndex - 1 === filteredSuggestions.length) {
        return
      }

      setActiveSuggestionIndex(activeSuggestionIndex + 1)
    }
  }

  const SuggestionsListComponent = () => {
    return filteredSuggestions.length ? (
      <ul className="suggestions bg-white border border-gray-200 w-96 text-gray-900">
        {filteredSuggestions.map((suggestion, index) => {
          let className

          // Flag the active suggestion with a class
          if (index === activeSuggestionIndex) {
            className = 'suggestion-active bg-gray-100 text-gray-500'
          }

          return (
            <li
              className={classNames(
                'block px-6 py-2 border-b border-gray-200 w-full hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-0 focus:bg-gray-200 focus:text-gray-600 transition duration-500 cursor-pointer',
                className
              )}
              key={suggestion[propertyToSearch]}
              onClick={onClick}
            >
              {suggestion[propertyToSearch]}
            </li>
          )
        })}
      </ul>
    ) : (
      <div className="no-suggestions">
        <span role="img" aria-label="tear emoji">
          😪
        </span>{' '}
        <em>{notFoundText}</em>
      </div>
    )
  }

  return (
    <div className="grid">
      <Input
        id={'user-search'}
        placeholder="type to search"
        classname={'w-full'}
        value={input}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
      {showSuggestions && input && <SuggestionsListComponent />}
    </div>
  )
}

export default AutoComplete

AutoComplete.propTypes = {
  suggestions: PropTypes.arrayOf(PropTypes.object),
  propertyToSearch: PropTypes.string,
  notFoundText: PropTypes.string
}
