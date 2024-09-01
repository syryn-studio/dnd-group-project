import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import NoteService from "../services/note.services.js";

const EditNoteForm = (props) => {
    const {id} = useParams();


    return (
        <>
            <h1>This is the Edit Note Form</h1>
        </>
    )
};

export default EditNoteForm;