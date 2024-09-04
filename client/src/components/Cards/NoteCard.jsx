import { useContext } from "react";
import { Link } from "react-router-dom";
import { LoggedInUserContext } from "../../context/LoggedInUserContext";

const NoteCard = (props) => {
    const { note } = props;
    const { user } = useContext(LoggedInUserContext);

    return (
        <>
            <div className="drop-shadow-lg">
                <div className="card max-w-xs rounded-2xl bg-base-100 px-8 pb-8">
                    <div className="mt-8">
                        <h1 className=" font-semibold text-lg">{note.title}</h1>
                        <div className="absolute -top-4 -right-4">
                            <div className="flex g-4">
                                <p className="text-xs align-text-bottom">
                                    {note.createdBy.firstName}
                                </p>
                                <img
                                    className="rounded-full w-16 "
                                    src={note.createdBy.image}
                                    alt=""
                                />
                            </div>
                        </div>
                        <p>{note.content}</p>
                        <ul className="flex justify-center gap-4">
                            <Link to={`/notes/${note._id}`}>View</Link>
                            {user._id == note.createdBy._id ? (
                                <>
                                    <li>|</li>
                                    <Link to={`/notes/update/${note._id}`}>
                                        Edit
                                    </Link>
                                </>
                            ) : (
                                ""
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};
export default NoteCard;
