import CampaignController from '../controllers/campaign.controller.js';
import { Router } from "express";

const CampaignRouter = Router();

CampaignRouter.route("/campaigns")
    .get(CampaignController.getAll)
    .post(CampaignController.createNew)

CampaignRouter.route("/campaigns/:id")
    .get(CampaignController.getOne)
    .put(CampaignController.update)
    .delete(CampaignController.delete)

export default CampaignRouter;