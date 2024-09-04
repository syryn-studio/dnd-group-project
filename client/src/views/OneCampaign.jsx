import { useParams } from "react-router-dom";
import TopNav from "../components/Navigation/TopNav";
import AllNotesOfCampaign from "../components/AllNotesOfCampaign.jsx";
import NewNoteForm from "../components/NewNoteForm.jsx";
import { useContext } from "react";
import { LoggedInUserContext } from "../context/LoggedInUserContext.jsx";
import CampaignOptions from "../components/Navigation/CampaignOptions.jsx";
import CampaignDetails from "./CampaignDetails.jsx";

const OneCampaign = () => {
    const { id } = useParams();

    return (
        <>
            <TopNav />
            <CampaignOptions
                navLink={`/campaigns/${id}/edit`}
                creatable="Admin Options"
                title="Campaign Details"
                campaignId={id}
            />
            <CampaignDetails campaignId={id} />

            <div className="flex justify-center gap-16 mt-16">
                <AllNotesOfCampaign campaignId={id} />

                <NewNoteForm campaignId={id} />
            </div>
        </>
    );
};

export default OneCampaign;
