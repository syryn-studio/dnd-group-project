import { useContext } from "react";
import { Link } from "react-router-dom";
import { LoggedInUserContext } from "../../context/LoggedInUserContext";

const NoteCard = (props) => {
    const { note } = props;
    const { user } = useContext(LoggedInUserContext);

    return (
        <>
            <Link to={`/notes/${note._id}`} className="">
                <div className="card max-w-xs rounded-2xl bg-base-100 px-8 pb-8 drop-shadow-md">
                    <div className="mt-8">
                        <h1 className=" font-semibold text-lg">{note.title}</h1>
                        <div className="absolute -top-6 -right-5">
                            <div className="flex items-end ">
                                {user._id == note.createdBy._id ? (
                                    <p className="text-xs font-bold text-primary pb-2">
                                        You
                                    </p>
                                ) : (
                                    <p className="text-xs ">
                                        {note.createdBy.firstName}
                                    </p>
                                )}
                                <img
                                    className="rounded-full w-16 border"
                                    src={note.createdBy.image}
                                    alt=""
                                />
                            </div>
                        </div>
                        <p>{note.content}</p>
                    </div>
                </div>
            </Link>
        </>
    );
};
export default NoteCard;
