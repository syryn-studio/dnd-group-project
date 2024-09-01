import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { LoggedInUserContext } from "../context/LoggedInUserContext";
import UserService from "../services/users.services.js";
import CampaignService from "../services/campaign.services.js";
import NoteService from "../services/note.services.js";
import TopNav from "../components/Navigation/TopNav";
import AllNotesOfCampaign from "../components/AllNotesOfCampaign.jsx";

const OneCampaign = () => {
    const {id} = useParams();
    const [campaign, setCampaign] = useState({});
    const [note, setNote] = useState({});

    const navigate = useNavigate();

    useEffect(() => {
        CampaignService.getOneCampaign(id)
            .then((res) => {setCampaign(res)})
    }, []);

    return (
        <>
            <TopNav />
            <div>
                <h1>This page is for One Campaign</h1>
            </div>
            <AllNotesOfCampaign />
        </>
    )
};

export default OneCampaign;