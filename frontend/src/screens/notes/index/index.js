import React, { Fragment, useState } from 'react'
import HeaderLogged from '../../../components/header_logged'
import { Column } from "rbx"
import "../../../styles/notes.scss"
import Note from '../../../components/notes'

function Notes(){
    const[isOpen, setIsOpen] = useState(false)

    return (
        <Fragment>
            <HeaderLogged setIsOpen={setIsOpen} />
            <Note isOpen={isOpen} setIsOpen={setIsOpen}/>
        </Fragment>
    )
}


export default Notes