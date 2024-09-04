import { LoggedInUserContext } from "../context/LoggedInUserContext";
import { useNavigate } from "react-router-dom";
import UserService from "../services/users.services";
import { useContext } from "react";
import TopNav from "../components/Navigation/TopNav";
import AllCampaigns from "../components/AllCampaigns.jsx";
import CreateNewCampaign from "./CreateNewCampaign.jsx";
import { Link } from "react-router-dom";

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
                <button>
                    <Link to={`/campaigns/create`}>Create A Campaign</Link>
                </button>
            </div>
            <AllCampaigns />
        </>
    );
};
export default Home;
