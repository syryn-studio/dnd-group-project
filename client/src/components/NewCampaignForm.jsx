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
        heroText: "",
        heroImage: "",
        players: [],
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
                    heroText: "",
                    heroImage: "",
                    players: [],
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
            <div className="flex justify-center mt-5">
                <form
                    className="card bg-base-100 w-auto shadow-xl gap-2 px-4 py-8"
                    onSubmit={(e) => submitHandler(e)}>
                    {errors && <p className="text-red-500">{errors.name}</p>}
                    <h2 className="text-4xl ml-6 text-center font-unifraktur">
                        Add Your Adventure
                    </h2>
                    <label
                        htmlFor="name"
                        className="input input-bordered flex items-center gap-2">
                        Name:
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
                    </label>
                    <label
                        htmlFor="heroText"
                        className="input input-bordered flex items-center gap-2">
                        Brief Synopsis:
                        <input
                            type="text"
                            value={campaignData.heroText}
                            name="heroText"
                            id="heroText"
                            onChange={(e) => campaignChangeHandler(e)}
                        />
                        {errors.validationErrors && (
                            <p className="text-red-400">
                                {errors.validationErrors.heroText}
                            </p>
                        )}
                    </label>

                    <textarea
                        className="textarea textarea-bordered textarea-lg w-full items-start"
                        placeholder="Detailed Description"
                        type="textarea"
                        value={campaignData.description}
                        name="description"
                        id="description"
                        onChange={(e) => campaignChangeHandler(e)}
                    />

                    {errors.validationErrors && (
                        <p className="text-red-400">
                            {errors.validationErrors.description}
                        </p>
                    )}
                    <label
                        htmlFor="image"
                        className="input input-bordered flex items-center gap-2">
                        Campaign Image:
                        <input
                            placeholder="URL only for now"
                            type="text"
                            value={campaignData.image}
                            name="image"
                            id="image"
                            onChange={(e) => campaignChangeHandler(e)}
                        />
                        {errors.validationErrors && (
                            <p className="text-red-400">
                                {errors.validationErrors.image}
                            </p>
                        )}
                    </label>
                    <label
                        htmlFor="heroImage"
                        className="input input-bordered flex items-center gap-2">
                        Thumbnail Image:
                        <input
                            placeholder="URL only for now"
                            type="text"
                            value={campaignData.heroImage}
                            name="heroImage"
                            id="heroImage"
                            onChange={(e) => campaignChangeHandler(e)}
                        />
                        {errors.validationErrors && (
                            <p className="text-red-400">
                                {errors.validationErrors.heroImage}
                            </p>
                        )}
                    </label>
                    <button className="btn btn-primary" type="submit">
                        Add Campaign
                    </button>
                </form>
            </div>
        </>
    );
};

export default NewCampaignForm;
