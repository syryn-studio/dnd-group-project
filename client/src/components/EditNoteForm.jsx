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
            <div className="flex justify-center mt-16">
                <form
                    className="card bg-base-100 shadow-xl gap-2 px-4 py-8 "
                    onSubmit={(e) => submitHandler(e)}>
                    <h2 className="text-2xl ml-6 text-center">Edit Note</h2>
                    <label
                        htmlFor="title"
                        className="input input-bordered flex items-center gap-2">
                        <input
                            type="text"
                            value={note.title}
                            name="title"
                            id="title"
                            onChange={(e) => changeHandler(e)}
                        />
                    </label>
                    <textarea
                        className="textarea textarea-bordered textarea-lg w-full min-h-40 min-w-96"
                        type="textarea"
                        value={note.content}
                        name="content"
                        id="content"
                        onChange={(e) => changeHandler(e)}
                    />
                    <div className="flex justify-center">
                        <button className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default EditNoteForm;
