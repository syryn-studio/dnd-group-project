import { useState, useEffect } from "react";
import { redirect, useNavigate, useParams } from "react-router-dom";
import CampaignService from "../services/campaign.services.js";
import { useContext } from "react";
import { LoggedInUserContext } from "../context/LoggedInUserContext.jsx";

const EditCampaignForm = (props) => {
    const { user } = useContext(LoggedInUserContext);
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

    const campaignChangeHandler = (e) => {
        const { name, value } = e.target;
        setCampaignData((prevCampaignData) => ({
            ...prevCampaignData,
            [name]: value,
        }));
    };

    const submitHandler = (e) => {
        e.preventDefault();

        CampaignService.updateCampaign(id, campaignData), {
            name,
            description,
            image,
            createdBy: user._id
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
                <div>
                <form onSubmit={(e) => submitHandler(e)}>
                    {errors && <p className="text-red-500">{errors.name}</p>}
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            name="name"
                            value={campaignData.name}
                            onChange={(e) => campaignChangeHandler(e)}
                            id="name"
                        />
                        {errors.validationErrors && (
                            <p className="text-red-400">
                                {errors.validationErrors.name}
                            </p>
                        )}
                    </div>
                    <div>
                        <label htmlFor="description">Description:</label>
                        <input
                            type="text"
                            name="description"
                            value={campaignData.description}
                            onChange={(e) => campaignChangeHandler(e)}
                            id="description"
                        />
                        {errors.validationErrors && (
                            <p className="text-red-400">
                                {errors.validationErrors.description}
                            </p>
                        )}
                    </div>
                    <div>
                        <label htmlFor="image">Image:</label>
                        <input
                            type="text"
                            name="image"
                            value={campaignData.image}
                            onChange={(e) => campaignChangeHandler(e)}
                            id="image"
                        />
                        {errors.validationErrors && (
                            <p className="text-red-400">
                                {errors.validationErrors.image}
                            </p>
                        )}
                    </div>
                    <button className="btn btn-primary" type="submit">
                        Make Changes
                    </button>
                </form>
            </div>
        </> 
    )
};

export default EditCampaignForm;