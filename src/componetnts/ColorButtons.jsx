import React from 'react'
import styles from '../styles/colorButtons.module.css'
function ColorButtons({color,onColor}) {
  return (
    <span 
      className={styles.colors} 
      style={{backgroundColor:color}} 
      onClick={()=>onColor(color)}
    ></span>
  )
}

export default ColorButtons