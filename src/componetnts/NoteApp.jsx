import React, { useState, useRef } from 'react'
import { v4 } from 'uuid';
import styles from '../styles/note.module.css'
import ColorButtons from './ColorButtons'
import Note from './Note'
import { FaPlus } from "react-icons/fa";
import { FaEraser } from "react-icons/fa";
function NoteApp() {
  const inputRef = useRef(null);
  const [note,setNote]=useState({
    id:"",
    title:"",
    color:""
  })
  const [notes,setNotes]=useState([]);
  const [inputColors,setInputcolors]=useState("#fff")
  const[colors,setColors]=useState([
    '#fff','#FFD37F','#FFFA81','#D5FA80','#78F87F',
    '79FBD6','#79FDFE','#7AD6FD','#7B84FC','#D687FC','#FF89FD'
  ])

  const changeHandeler=(event)=>{
    let name=event.target.name;
    let value=event.target.value;
  setNote((note)=>({...note,[name]:value}))
  }

  const handleKeyPress=(event)=>{
    if(event.key === 'Enter'){
      addNoteHandeler()
    }
  }

  const addNoteHandeler=()=>{
    let newNote={...note,color:inputColors,id:v4()}
    setNotes((nots)=>([...nots,newNote]))
    setNote((note)=>({...note,title:""}))
    inputRef.current.focus()
  }

  const inputColorHandeler=(color)=>{
    setInputcolors(color)
    inputRef.current.focus()
  }

  const removeHandelr=()=>{
    setNote((note)=>({...note,title:""}))
    setInputcolors("#fff")
    inputRef.current.focus()
  }

  const removeClickHandeler=(id)=>{
   setNotes(notes.filter(note=>note.id!==id))
  }

  return (
    <>
    <div className={styles.main}>
        <h1>React NoteApp</h1>
        <input ref={inputRef} type='text' name="title" value={note.title} onChange={changeHandeler} onKeyPress={handleKeyPress} style={{backgroundColor:inputColors}}/>
    </div>
    <div className={styles.btnColor}>
      {
        colors.map(color=>(
          <ColorButtons key={v4()} color={color} onColor={inputColorHandeler}/>
        ))
      }
      <div>
        <button onClick={addNoteHandeler}><FaPlus /></button>
        <button onClick={removeHandelr} className={styles.btneraser}><FaEraser /></button>
      </div>
    </div>
    <div className={styles.boxNote}>
      {
        notes.map(note=>(
          <Note key={note.id} note={note} removeClick={removeClickHandeler} />
        ))
      }
    </div>
    </>
  )
}

export default NoteApp