import { useParams } from "react-router-dom";
import TopNav from "../components/Navigation/TopNav";
import AllNotesOfCampaign from "../components/AllNotesOfCampaign.jsx";
import NewNoteForm from "../components/NewNoteForm.jsx";

const OneCampaign = () => {
    const { id } = useParams();

    return (
        <>
            <TopNav />
            <div className="flex justify-center gap-16 mt-16">
                <AllNotesOfCampaign campaignId={id} />
                <NewNoteForm campaignId={id} />
            </div>
        </>
    );
};

export default OneCampaign;
