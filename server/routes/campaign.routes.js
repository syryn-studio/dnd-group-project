import CampaignController from '../controllers/campaign.controller.js';
import { Router } from "express";

const CampaignRouter = Router();

CampaignRouter.route("/")
    .get(CampaignController.getAll)
    .post(CampaignController.createNew)

CampaignRouter.route("/:id")
    .get(CampaignController.getOne)
    .put(CampaignController.update)
    .delete(CampaignController.delete)

export default CampaignRouter;