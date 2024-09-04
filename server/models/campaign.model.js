import { model, Schema } from 'mongoose';
const CampaignSchema = new Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        minlength: [2, "Name must be at least 2 characters long"]
    },
    description: {
        type: String,
        required: [true, "Description is required"],
        minlength: [2, "Description must be at least 2 characters long"]
    },
    image: {
        type: String,
        required: [true, "Image is required"],
        // ! Add a default image
    },
    heroText: {
        type: String,
        required: [false],
    },
    heroImage: {
        type: String,
        required: [false],
        // ! Add a default image
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        required: [true, "Campaign must have a creator"],
        ref: 'User',
    },
    players: [{
        type: Schema.Types.ObjectId,
        ref: 'User',
    }],
    notes: [{
        type: Schema.Types.ObjectId,
        ref: 'Note',
    }],
}
)
const Campaign = model('Campaign', CampaignSchema);
export default Campaign;