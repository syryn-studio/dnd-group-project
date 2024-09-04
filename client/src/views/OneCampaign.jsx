import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { LoggedInUserContext } from "../context/LoggedInUserContext";
import UserService from "../services/users.services.js";
import CampaignService from "../services/campaign.services.js";
import NoteService from "../services/note.services.js";
import TopNav from "../components/Navigation/TopNav";
import AllNotesOfCampaign from "../components/AllNotesOfCampaign.jsx";
import NewNoteForm from "../components/NewNoteForm.jsx";

const OneCampaign = () => {
    const {id} = useParams();
    const [campaign, setCampaign] = useState({});
    const [note, setNote] = useState({});
    const [campaignId, setCampaignId] = useState();

    const navigate = useNavigate();

    useEffect(() => {
        CampaignService.getOneCampaign(id)
            .then((res) => {setCampaign(res);setCampaignId(id)})
            
    }, [id]);
    

    return (
        <>
            <TopNav />
            <div>
                <h1>Campaign Notes</h1>
            </div>
            <div>
                <h2>{campaign.name}</h2>
            </div>
            <div>
                <AllNotesOfCampaign />
            </div>
            <div>
                <NewNoteForm campaignId={campaignId}/>
            </div>
        </>
    )
};

export default OneCampaign;