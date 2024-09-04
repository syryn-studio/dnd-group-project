import { useContext } from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LoggedInUserContext } from "../../context/LoggedInUserContext";
import CampaignService from "../../services/campaign.services";

const CampaignOptions = (props) => {
    const { title, creatable, navLink, campaignId } = props;
    const { user } = useContext(LoggedInUserContext);
    const [campaignData, setCampaignData] = useState({
        createdBy: { _id: "" },
    });

    useEffect(() => {
        CampaignService.getOneCampaign(campaignId)
            .then((res) => {
                console.log(res);
                setCampaignData(res);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [campaignId]);

    return (
        <>
            <div className="navbar justify-between px-8 mt-8">
                <div className="flex-1">
                    <h1 className="text-4xl font-unifraktur">
                        {campaignData.name}
                    </h1>
                </div>

                <Link
                    to={navLink}
                    className="btn btn-primary rounded-none shadow-lg">
                    <span className="font-unifraktur text-2xl">
                        {creatable}
                    </span>
                </Link>
            </div>
        </>
    );
};
export default CampaignOptions;
