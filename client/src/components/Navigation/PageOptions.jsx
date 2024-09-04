import { Link } from "react-router-dom";
import { useContext } from "react";
import { LoggedInUserContext } from "../../context/LoggedInUserContext";

const PageOptions = (props) => {
    const { title, creatable, navLink } = props;
    const { isLoggedIn, user } = useContext(LoggedInUserContext);
    return (
        <>
            <div className="navbar justify-between px-8 mt-8">
                <div className="flex-1">
                    <h1 className="text-4xl font-unifraktur">{title}</h1>
                </div>
                <Link
                    to={navLink}
                    className="btn btn-primary rounded-none shadow-lg">
                    <span className="font-unifraktur text-2xl">
                        {creatable}
                    </span>
                </Link>
            </div>
        </>
    );
};
export default PageOptions;
