import { useState, useEffect } from "react";
import { redirect, useNavigate, useParams } from "react-router-dom";
import CampaignService from "../services/campaign.services.js";

const EditCampaignForm = (props) => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [campaignData, setCampaignData] = useState({});

    const {id} = useParams();
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});

    useEffect(()=> {
        CampaignService.getOneCampaign(id)
            .then((res)=>{
                console.log(res.data);
                setCampaignData(res.data);
            })
            .catch((err)=> {console.log(err)})
    }, [id])


    useEffect(()=> {
        CampaignService.getOneCampaign(id)
            .then((res)=>{
                console.log(res.data);
                setName(res.data.name);
                setDescription(res.data.description);
                setImage(res.data.image);
            })
            .catch((err)=> {console.log(err)})
    }, [id])


    const nameHandler = (e) => {
        setName(e.target.value)
    }

    const descriptionHandler = (e) => {
        setDescription(e.target.value)
    }

    const imageHandler = (e) => {
        setImage(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault();

        CampaignService.updateCampaign(id, campaignData), {
            name,
            description,
            image
        }
            .then(res => {
                console.log(res);
                console.log(res.data);
                navigate("/home")
            })
            .catch(err => {
                console.log(err);
                console.log(err.response.data.errors);
                setErrors(err.response.data.errors)
            })
    }


    return (
        <>
            <h1>This is the Edit Campaign Form</h1>
        </> 
    )
};

export default EditCampaignForm;