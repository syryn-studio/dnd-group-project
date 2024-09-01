import { LoggedInUserContext } from "../context/LoggedInUserContext";
import { useNavigate } from "react-router-dom";
import UserService from "../services/users.services";
import { useContext } from "react";
import TopNav from "../components/Navigation/TopNav";
import AllCampaigns from "../components/AllCampaigns.jsx";

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
        <>
            <TopNav />
            <div>
                <h1 className="text-4xl mt-8 ml-8">
                    Testing...Welcome, {user.firstName}
                </h1>
            </div>
            <AllCampaigns />
        </>
    );
};
export default Home;
