import TopNav from "../components/Navigation/TopNav.jsx";
import NewCampaignForm from "../components/NewCampaignForm.jsx";

const CreateNewCampaign = () => {
    return (
        <>
            <TopNav />
            <h1>Add your Adventure!</h1>
            <NewCampaignForm />
        </>
    )
};

export default CreateNewCampaign;