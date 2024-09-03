import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CampaignService from "../services/campaign.services";
import { useContext } from "react";
import { LoggedInUserContext } from "../context/LoggedInUserContext.jsx";

const NewCampaignForm = () => {
    const navigate = useNavigate();
    const { user } = useContext(LoggedInUserContext);
    const [errors, setErrors] = useState({});
    const [campaignData, setCampaignData] = useState({
        name: "",
        description: "",
        image: "",
        createdBy: user._id,
    });

    const campaignChangeHandler = (e) => {
        const { name, value } = e.target;
        setCampaignData((prevCampaignData) => ({
            ...prevCampaignData,
            [name]: value,
        }));
    };

    const submitHandler = (e) => {
        e.preventDefault();

        CampaignService.createNewCampaign(campaignData)
            .then(() => {
                setCampaignData({
                    name: "",
                    description: "",
                    image: "",
                    createdBy: "",
                });
                navigate("/home");
            })
            .catch((err) => {
                setErrors(err.response.data);
            });
    };

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
                        Add Campaign
                    </button>
                </form>
            </div>
        </>
    );
};

export default NewCampaignForm;
