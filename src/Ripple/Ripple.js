import React from 'react'
import styles from './styles.css'

export default Ripple = props => (
  <>
    <style>${`${styles}`}</style>
    <div className="lds-ripple">
      <div></div>
      <div></div>
    </div>
  </>
)
