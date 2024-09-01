import TopNav from "../components/Navigation/TopNav.jsx";
import NewCampaignForm from "../components/NewCampaignForm.jsx";

const CreateNewCampaign = () => {
    return (
        <>
            <TopNav />
            <h1>This is the page to create a New Campaign</h1>
            <NewCampaignForm />
        </>
    )
};

export default CreateNewCampaign;