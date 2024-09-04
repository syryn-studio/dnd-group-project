import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import NoteService from "../services/note.services.js";
import CampaignService from "../services/campaign.services";
import { useContext } from "react";
import { LoggedInUserContext } from "../context/LoggedInUserContext.jsx";

const NewNoteForm = ({campaignId}) => {
    const navigate = useNavigate();
    const { user } = useContext(LoggedInUserContext);
    const [errors, setErrors] = useState({});
    const [noteData, setNoteData] = useState({
        title:"",
        content:"",
        campaign:"",
        createdBy:user._id
    });
    
    const noteChangeHandler = (e) => {
        const { name, value } = e.target;
        setNoteData((prevNoteData) => ({
            ...prevNoteData,
            [name]: value,
        }));
    };

    const submitHandler = (e) => {
        e.preventDefault();

        NoteService.createNewNote(noteData)
            .then(() => {
                setNoteData({
                    title: "",
                    content: "",
                    campaign: "",
                    createdBy: "",
                });
                navigate("/home");
            })
            .catch((err) => {
                setErrors(err.response.data);
            });
    } ;

    return (
        <>
            <div>
                <form onSubmit={(e) => submitHandler(e)} >
                {errors && <p className="text-red-500">{errors.name}</p>}
                    <div>
                        <label htmlFor="title">Title:</label>
                        <input
                            type="text"
                            name="title"
                            value={noteData.title}
                            onChange={(e) => noteChangeHandler(e)}
                            id="title"
                        />
                        {errors.validationErrors && (
                            <p className="text-red-400">
                                {errors.validationErrors.title}
                            </p>
                        )}
                    </div>
                    <div>
                        <label htmlFor="content">Content:</label>
                        <input
                            type="text"
                            name="content"
                            value={noteData.content}
                            onChange={(e) => noteChangeHandler(e)}
                            id="content"
                        />
                        {errors.validationErrors && (
                            <p className="text-red-400">
                                {errors.validationErrors.content}
                            </p>
                        )}
                    </div>
                    <button className="btn btn-primary" type="submit">
                        Add Note
                    </button>
                </form>
            </div>
        </>
    )
};

export default NewNoteForm;