import React from 'react'
import PropTypes from 'prop-types'

import styles from './Button.css'

const Button = ({ onClick, label }) => (
  <button className={styles.Button} onClick={onClick}>
    <img src={require('./x.svg')} alt="x" />
    <span className={styles.label}>{label}</span>
  </button>
)

Button.defaultProps = {
  onClick: null,
}

Button.propTypes = {
  onClick: PropTypes.func,
  label: PropTypes.string.isRequired,
}

export default Button
