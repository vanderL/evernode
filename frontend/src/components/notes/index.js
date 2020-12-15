import React, { Fragment, useEffect, useState} from 'react'
import List from "../notes/list"
import NoteService from '../../services/note'
import {Column, Button} from "rbx"
import '../../styles/notes.scss'
import { push as Menu } from 'react-burger-menu'

function Notes(props) {
    const [notes, setNotes] = useState([])
    const [current_note, setCurrentNote] = useState({title: "", body: "", id: ""})
    
    useEffect(() => {
        fetchNotes();
      }, []);
    
      async function fetchNotes(){
          const response = await NoteService.index()
          if (response.data.lenght >= 1) {
              setNotes(response.data.reverse())
              setCurrentNote(response.data[0])
          }
      }

      const selectNote = (id) => {
          const note = note.find((note) => {
              return note._id == id;
          })
          setCurrentNote(note)
      }

      const createNote = async (params) => {
          const note =  await NoteService.create()
          fetchNotes()
      }

    return(
        <Fragment>
            <Column.Group className="notes" id="notes">
                <Menu
                    pageWrapId={"notes-editor"}
                    isOpen={props.isOpen}
                    onStateChange={(state) => props.setIsOpen(state.isOpen)}
                    disableAutoFocus
                    outerContainer={"notes"}
                    customBurgerIcon={false}
                    customCrossIcon={false}
                >
                    <List 
                        notes={notes}
                        selectNote={selectNote}
                        createNote={createNote}
                        current_note={current_note}/>
                </Menu>

                <Column size={12} className="notes-editor" id="notes-editor">
                    Editor...
                </Column>

            </Column.Group>
        </Fragment>
    )
}

export default Notes