import { useEffect, useState, useContext } from "react";
import NoteService from "../services/note.services.js";

import NoteCard from "./Cards/NoteCard";

const AllNotesOfCampaign = (props) => {
    const [noteList, setNoteList] = useState([]);
    const { campaignId } = props;

    useEffect(() => {
        NoteService.getAllNotes().then((response) => {
            setNoteList(response);
        });
    }, []);

    return (
        <>
            <div>
                {noteList.map((note, index) => (
                    <div className="mb-10" key={index}>
                        {note.campaign._id === campaignId ? (
                            <NoteCard note={note} />
                        ) : (
                            ""
                        )}
                    </div>
                ))}
            </div>
        </>
    );
};

export default AllNotesOfCampaign;
