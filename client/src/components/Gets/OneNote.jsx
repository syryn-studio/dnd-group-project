import { useParams, useNavigate, Link } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import NoteService from "../../services/note.services";
import { LoggedInUserContext } from "../../context/LoggedInUserContext";

const OneNote = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [note, setNote] = useState({});
    const { user, isLoggedIn } = useContext(LoggedInUserContext);

    // !Retrieve the note from the database
    useEffect(() => {
        NoteService.getOneNote(id).then((response) => {
            setNote(response);
        });
    }, [id]);

    const deleteNote = () => {
        const postDeleteID = note.campaign._id;
        NoteService.deleteNote(id).then(() => {
            navigate(`/campaigns/${postDeleteID}`);
        });
    };

    return (
        <>
            <div className="flex justify-center align-middle gap-8 mt-16 ">
                <div className="flex flex-col bg-black bg-opacity-85 p-8 m-auto rounded-lg drop-shadow-lg">
                    {/* <img
                        className="mb-8 max-w-2xl rounded-xl"
                        src={note.createdBy.image}
                        alt=""
                    /> */}
                    <h1 className="text-4xl text-white font-unifraktur flex justify-center mb-2">
                        {note.title}
                    </h1>
                    <p className="text-white flex justify-center mb-8">
                        {note.content}
                    </p>
                    <div className="flex justify-center gap-4">
                        <Link
                            to={`/notes/${note._id}/edit`}
                            className="btn btn-primary w-24">
                            Edit
                        </Link>
                        <button
                            onClick={deleteNote}
                            className="btn btn-primary w-24">
                            Delete
                        </button>
                    </div>
                </div>
            </div>
            {/* <div>{note.createdBy.image}</div> */}
        </>
    );
};
export default OneNote;
