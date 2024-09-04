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
    createdBy: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    campaign: {
        type: Schema.Types.ObjectId,
        ref: 'Campaign',
    },
})
const Note = model('Note', NoteSchema);
export default Note;