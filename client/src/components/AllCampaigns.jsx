import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CampaignService from "../services/campaign.services.js";
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
            <h1>Choose A Campaign</h1>
            {campaignList.map((campaign, index) => (
                <div key={index} className="Campaign card">
                    <div className="Card title">
                        <Link to={`/campaigns/${campaign._id}`}>
                            {campaign.name}
                        </Link>
                    </div>
                    <div className="Card description">
                        {campaign.description}
                    </div>
                    <div className="Card image">{campaign.image}</div>
                </div>
            ))}
        </>
    );
};

export default AllCampaigns;
