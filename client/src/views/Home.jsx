import { LoggedInUserContext } from "../context/LoggedInUserContext";
import { useNavigate } from "react-router-dom";
import UserService from "../services/users.services";
import { useContext } from "react";

const Home = () => {
    const navigate = useNavigate();
    const { user, setUser, setIsLoggedIn, isLoggedIn } =
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
        <div>
            <h1>Welcome, {user.firstName}</h1>
            <button onClick={logoutUser}>Log Out</button>
        </div>
    );
};
export default Home;
