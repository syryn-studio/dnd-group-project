import { useParams } from "react-router-dom";
import TopNav from "../components/Navigation/TopNav";
import AllNotesOfCampaign from "../components/AllNotesOfCampaign.jsx";
import NewNoteForm from "../components/NewNoteForm.jsx";
import { Link } from "react-router-dom";

const OneCampaign = () => {
    const { id } = useParams();

    return (
        <>
            <TopNav />
            <div className="flex justify-center gap-16 mt-16">
                <AllNotesOfCampaign campaignId={id} />
                <button > <Link to={`/campaigns/${id}/edit`}>Edit Campaign</Link></button>
                <NewNoteForm campaignId={id} />
            </div>
        </>
    );
};

export default OneCampaign;
