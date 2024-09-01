import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CampaignService from "../services/campaign.services.js";

const EditCampaignForm = (props) => {
    const {id} = useParams();


    return (
        <>
            <h1>This is the Edit Campaign Form</h1>
        </>
    )
};

export default EditCampaignForm;