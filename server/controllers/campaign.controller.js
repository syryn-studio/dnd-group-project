import Campaign from '../models/campaign.model.js';

const CampaignController = {
    "createNew": async (req, res) => {
        try {
            const newCampaign = await Campaign.create(req.body);
            res.json(newCampaign);
        } catch (error) {
            console.log(error);
            res.status(400).json(error);
        }
    },
    "getAll": async (req, res) => {
        try {
            const allCampaigns = await Campaign.find().populate("players").populate("createdBy");
            res.json(allCampaigns);
        } catch (error) {
            console.log(error);
            res.status(400).json(error);
        }
    },
    "getOne": async (req, res) => {
        try {
            const campaign = await Campaign.findById(req.params.id).populate("players").populate("createdBy");
            res.json(campaign);
        } catch (error) {
            console.log(error);
            res.status(400).json(error);
        }
    },
    "update": async (req, res) => {
        try {
            const options = {
                "new": true,
                "runValidators": true
            };
            const updatedCampaign = await Campaign.findByIdAndUpdate(req.params.id, req.body, options).populate("players").populate("createdBy");
            res.json(updatedCampaign);
        } catch (error) {
            console.log(error);
            res.status(400).json(error);
        }
    },
    "delete": async (req, res) => {
        try {
            const deletedCampaign = await Campaign.findByIdAndDelete(req.params.id);
            res.json(deletedCampaign);
        } catch (error) {
            console.log(error);
            res.status(400).json(error);
        }
    }
    ,
    "getByUser": async (req, res, next) => {
        const filter = { user: req.params.id };
        try {
            const campaigns = await Campaign.find(filter).populate("players").populate("createdBy");
            res.json(campaigns);
        } catch (err) {
            next(err);
        }
    }
}

export default CampaignController;