import { LoggedInUserContext } from "../context/LoggedInUserContext";
import { useNavigate } from "react-router-dom";
import UserService from "../services/users.services";
import { useContext } from "react";
import TopNav from "../components/Navigation/TopNav";
import AllCampaigns from "../components/AllCampaigns.jsx";
import PageOptions from "../components/Navigation/PageOptions.jsx";
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
            <PageOptions
                title="Choose Your Campaign"
                creatable="New Campaign"
                navLink="/campaigns/create"
            />
            <div className="m-8">
                <div className="flex justify-between flex-wrap gap-8">
                    <AllCampaigns />
                </div>
            </div>
        </>
    );
};
export default Home;
