import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import NoteService from "../services/note.services.js";

const EditNoteForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [note, setNote] = useState({});
    const [errors, setErrors] = useState({});

    useEffect(() => {
        NoteService.getOneNote(id).then((response) => {
            setNote(response);
        });
    }, []);

    const changeHandler = (e) => {
        const { name, value } = e.target;
        setNote((prevNoteValue) => ({ ...prevNoteValue, [name]: value }));
    };

    const submitHandler = (e) => {
        e.preventDefault();
        NoteService.updateNote(id, note)
            .then(() => {
                navigate(`/notes/${id}`);
            })
            .catch((err) => {
                console.log(err.response.data);
                setErrors(err.response.data);
            });
    };

    return (
        <>
            <form onSubmit={(e) => submitHandler(e)}>
                <h2>Edit Note</h2>
                <label htmlFor="title">
                    <input
                        type="text"
                        value={note.title}
                        name="title"
                        id="title"
                        onChange={(e) => changeHandler(e)}
                    />
                </label>
                <textarea
                    type="textarea"
                    value={note.content}
                    name="content"
                    id="content"
                    onChange={(e) => changeHandler(e)}
                />
                <button className="btn btn-primary">Submit</button>
            </form>
        </>
    );
};

export default EditNoteForm;
