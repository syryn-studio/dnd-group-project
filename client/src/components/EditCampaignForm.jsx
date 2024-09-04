import { useState, useEffect } from "react";
import { redirect, useNavigate, useParams } from "react-router-dom";
import CampaignService from "../services/campaign.services.js";
import { useContext } from "react";
import { LoggedInUserContext } from "../context/LoggedInUserContext.jsx";

const EditCampaignForm = (props) => {
    const { user } = useContext(LoggedInUserContext);
    const [campaignData, setCampaignData] = useState({
        createdBy: { _id: "" },
    });

    const { id } = useParams();
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});

    useEffect(() => {
        CampaignService.getOneCampaign(id)
            .then((res) => {
                console.log(res);
                setCampaignData(res);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [id]);

    const campaignChangeHandler = (e) => {
        const { name, value } = e.target;
        setCampaignData((prevCampaignData) => ({
            ...prevCampaignData,
            [name]: value,
        }));
    };

    const submitHandler = (e) => {
        e.preventDefault();

        CampaignService.updateCampaign(id, campaignData)
            .then((res) => {
                console.log(res);
                console.log(res.data);
                navigate("/home");
            })
            .catch((err) => {
                console.log(err);
                console.log(err.response.data.errors);
                setErrors(err.response.data.errors);
            });
    };

    return (
        <>
            <div className="flex justify-center mt-5">
                {user._id === campaignData.createdBy._id ? (
                    <form
                        className="card bg-base-100 w-auto shadow-xl gap-2 px-4 py-8"
                        onSubmit={(e) => submitHandler(e)}>
                        {errors && (
                            <p className="text-red-500">{errors.name}</p>
                        )}
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
                            className="textarea textarea-bordered textarea-lg w-full items-start min-h-96"
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
                            Edit Campaign
                        </button>
                    </form>
                ) : (
                    <h1>Only the creator of this campaign can edit it.</h1>
                )}
            </div>
        </>
    );
};

export default EditCampaignForm;
