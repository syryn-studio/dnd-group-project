import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import UserService from "../../services/users.services";
import { useContext } from "react";
import { LoggedInUserContext } from "../../context/LoggedInUserContext";

const TopNav = () => {
    const navigate = useNavigate();
    const { user, setUser, isLoggedIn, setIsLoggedIn } =
        useContext(LoggedInUserContext);
    const logoutUser = () => {
        UserService.logoutUser()
            .then(() => {
                setIsLoggedIn(false);
                setUser(null);
                navigate("/");
            })
            .catch((err) => console.log(err));
    };
    return (
        <>
            <div className="navbar bg-base-100 drop-shadow-lg p-8">
                <div className="flex-1">
                    <Link
                        to={"/home"}
                        className="btn btn-ghost text-6xl font-unifraktur">
                        Adventure Archives
                    </Link>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <Link
                                to={"/home"}
                                className="font-unifraktur text-3xl">
                                Home
                            </Link>
                        </li>
                        <li>
                            <p className="font-unifraktur text-3xl">
                                My Campaigns
                            </p>
                        </li>

                        <>
                            <li> </li>
                            <li>
                                <button
                                    onClick={logoutUser}
                                    className="font-unifraktur text-3xl">
                                    Log Out
                                </button>
                            </li>
                        </>
                    </ul>
                </div>
            </div>
        </>
    );
};
export default TopNav;
