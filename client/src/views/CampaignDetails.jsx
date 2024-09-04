import CampaignService from "../services/campaign.services";
import { useEffect } from "react";
import { useState } from "react";

const CampaignDetails = (props) => {
    const { campaignId } = props;
    const [campaignData, setCampaignData] = useState({});

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
            <div className="flex justify-center mt-12">
                <div className="flex flex-col max-w-6xl">
                    <div className="flex justify-center">
                        <img
                            className="mb-2 max-w-6xl flex justify-center"
                            src={campaignData.image}
                            alt="Image"
                        />
                    </div>
                    <div className="">
                        <p className="p-4">{campaignData.description}</p>
                    </div>
                </div>
            </div>
        </>
    );
};
export default CampaignDetails;
