import React from 'react'
import styles from '../styles/note.module.css'
function Note({note:{id,title,color},removeClick}) {

  const removeHandeler=(id)=>{
    removeClick(id)
  }
  return (
    <div className={styles.note}  onClick={()=>{removeHandeler(id)}}>
        <p style={{backgroundColor:color}}>{title}</p>
    </div>
  )
}

export default Note