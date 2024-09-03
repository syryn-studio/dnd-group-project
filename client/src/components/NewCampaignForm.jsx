import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CampaignService from "../services/campaign.services";
import { Link } from "react-router-dom"
import { useContext } from "react";
import { LoggedInUserContext } from "../context/LoggedInUserContext.jsx";




const NewCampaignForm = (props) => {
    const {user} = useContext(LoggedInUserContext)
    const [campaignData, setCampaignData] = useState({name:"", description:"",image:"",createdBy:user._id});

    const navigate = useNavigate();
    const [errors, setErrors] = useState({});

    const campaignChangeHandler = (e) => {
        const {name,value} = e.target;
        setCampaignData((prevCampaignData)=>({ 
            ...prevCampaignData,[name]:value
        }))
    }

    const submitHandler = (e) => {
        e.preventDefault();

    

        CampaignService.createNewCampaign(campaignData)
            .then(() => {
                setCampaignData({name:"", description:"",image:"",createdBy:""})
                console.log(res);
                console.log(res.data);
                navigate("/home")
            })
            .catch((err) => {
                console.log(err);
                console.log(err.response.data);
                setErrors(err.response.data);
            })
    }


    return (
        <>
            <div>
                <form onSubmit={(e)=>submitHandler(e)}>
                    {props.children}
                    <div >
                        <label htmlFor="name" >Name:</label>
                        <input type="text" name="name" value={campaignData.name} onChange={(e)=>campaignChangeHandler(e)} id="name"  />
                        <div >{errors.name && <p>{errors.name.message}</p>}</div>
                    </div>
                    <div >
                        <label htmlFor="description" >Description:</label>
                        <input type="text" name="description" value={campaignData.description} onChange={(e)=>campaignChangeHandler(e)} id="description"  />
                        <div >{errors.description && <p>{errors.description.message}</p>}</div>
                    </div>
                    <div >
                        <label htmlFor="image" >Image:</label>
                        <input type="text" name="image" value={campaignData.image} onChange={(e)=>campaignChangeHandler(e)} id="image"  />
                        <div >{errors.image && <p>{errors.image.message}</p>}</div>
                    </div>
                    <button type="submit" >Add Campaign</button>
                </form>
            </div>
        </>
    )
};

export default NewCampaignForm;