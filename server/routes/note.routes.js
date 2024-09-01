import NoteController from '../controllers/note.controller.js';
import { Router } from "express";

const NoteRouter = Router();

NoteRouter.route("/notes")
    .get(NoteController.getAll)
    .post(NoteController.createNew)

NoteRouter.route("/notes/:id")
    .get(NoteController.getOne)
    .put(NoteController.update)
    .delete(NoteController.delete)

export default NoteRouter;