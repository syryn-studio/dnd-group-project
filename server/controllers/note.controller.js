import Note from '../models/note.model.js';

const NoteController = {
    "createNew": async (req, res) => {
        try {
            const newNote = await Note.create(req.body);
            res.json(newNote);
        } catch (error) {
            console.log(error);
            res.status(400).json(error);
        }
    },
    "getAll": async (req, res) => {
        try {
            const allNotes = await Note.find().populate("createdBy").populate("campaign");
            res.json(allNotes);
        } catch (error) {
            console.log(error);
            res.status(400).json(error);
        }
    },
    "getOne": async (req, res) => {
        try {
            const note = await Note.findById(req.params.id).populate("createdBy").populate("campaign");
            res.json(note);
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
            const updatedNote = await Note.findByIdAndUpdate(req.params.id, req.body, options).populate("createdBy").populate("campaign");
            res.json(updatedNote);
        } catch (error) {
            console.log(error);
            res.status(400).json(error);
        }
    },
    "delete": async (req, res) => {
        try {
            const deletedNote = await Note.findByIdAndDelete(req.params.id);
            res.json(deletedNote);
        } catch (error) {
            console.log(error);
            res.status(400).json(error);
        }
    },
    "getByUser": async (req, res, next) => {
        const filter = { user: req.params.id };
        try {
            const notes = await Note.find(filter).populate("createdBy").populate("campaign")
            res.json(notes);
        } catch (err) {
            next(err);
        }
    },
    "getByCampaign": async (req, res, next) => {
        const filter = { campaign: req.params.id };
        try {
            const notes = await Note.find(filter).populate("createdBy").populate("campaign")
            res.json(notes);
        } catch (err) {
            next(err);
        }
    }
}

export default NoteController;