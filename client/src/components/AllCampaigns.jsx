import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CampaignService from "../services/campaign.services.js";
import CampaignCard from "./Cards/CampaignCard.jsx";
import { useParams } from "react-router-dom";

const AllCampaigns = () => {
    const [campaignList, setCampaignList] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        CampaignService.getAllCampaigns(id)
            .then((campaignsFromAPI) => setCampaignList(campaignsFromAPI))
            .catch((err) => console.error(err));
    }, []);

    return (
        <>
            {campaignList.map((campaign, index) => (
                <CampaignCard key={index} campaign={campaign} />
            ))}
        </>
    );
};

export default AllCampaigns;
