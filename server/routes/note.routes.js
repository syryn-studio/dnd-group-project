import NoteController from '../controllers/note.controller.js';
import { Router } from "express";

const NoteRouter = Router();

NoteRouter.route("/")
    .get(NoteController.getAll)
    .post(NoteController.createNew)

NoteRouter.route("/:id")
    .get(NoteController.getOne)
    .put(NoteController.update)
    .delete(NoteController.delete)

export default NoteRouter;