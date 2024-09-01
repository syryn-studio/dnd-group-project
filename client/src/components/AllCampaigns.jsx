import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CampaignService from "../services/campaign.services.js";

const AllCampaigns = () => {
    const [campaignList, setCampaignList] = useState([]);

    useEffect(() => {
        CampaignService.getAllCampaigns()
            .then((campaignsFromAPI) => {setCampaignList(campaignsFromAPI)})
    }, []);

    return (
        <>
            <h1>This component returns All Campaigns</h1>
        </>
    )
};

export default AllCampaigns;