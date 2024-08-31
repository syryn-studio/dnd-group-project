import { model, Schema } from 'mongoose';

const NoteSchema = new Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
        minlength: [2, "Title must be at least 2 characters long"]
    },
    content: {
        type: String,
        required: [true, "Content is required"],
        minlength: [2, "Content must be at least 2 characters long"]
    },
    campaign: {
        type: String,
        required: [true, "Campaign ID is required"]
    },
    createdBy: {
        type: String,
        required: [true, "User ID is required"]
    }
})
const Note = model('Note', NoteSchema);
export default Note;