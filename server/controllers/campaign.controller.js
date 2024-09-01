import Campaign from '../models/campaign.model.js';

const CampaignController = {
    "createNew": async (req, res) => {
        try {
            const newCampaign = await Campaign.create(req.body);
            res.json(newCampaign);
        } catch(error) {
            console.log(error);
            res.status(400).json(error);
        }
    },
    "getAll": async (req, res) => {
        try {
            const allCampaigns = await Campaign.find();
            res.json(allCampaigns);
        } catch(error) {
            console.log(error);
            res.status(400).json(error);
        }
    },
    "getOne": async (req, res) => {
        try {
            const campaign = await Campaign.findById(req.params.id);
            res.json(campaign);
        } catch(error) {
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
            const updatedCampaign = await Campaign.findByIdAndUpdate(req.params.id, req.body, options);
            res.json(updatedCampaign);
        } catch(error) {
            console.log(error);
            res.status(400).json(error);
        }
    },
    "delete": async (req, res) => {
        try {
            const deletedCampaign = await Campaign.findByIdAndDelete(req.params.id);
            res.json(deletedCampaign);
        } catch(error) {
            console.log(error);
            res.status(400).json(error);
        }
    }
}

export default CampaignController;