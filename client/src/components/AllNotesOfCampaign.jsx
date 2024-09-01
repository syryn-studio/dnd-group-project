import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NoteService from "../services/note.services.js";

const AllNotesOfCampaign = () => {
    const [noteList, setNoteList] = useState([]);

    useEffect(() => {
        NoteService.getAllNotes()
            .then((notesFromAPI) => {setNoteList(notesFromAPI)})
    }, []);

    return (
        <>
            <h1>This component returns All Notes of a Campaign</h1>
        </>
    )
};

export default AllNotesOfCampaign;