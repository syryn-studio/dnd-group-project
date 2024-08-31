import { connect } from 'mongoose';
import dotenv from 'dotenv';

// Connect to MongoDB
dotenv.config();
const MONGODB_URI = process.env.MONGODB_URI;
async function dbConnect() {
    try {
        await connect(MONGODB_URI, {
            dbName: 'CampaignNoteTracker',
        });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } catch (error) {
        console.log(error);
        throw error;
    }
}

// Export the connection
export default dbConnect;