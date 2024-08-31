import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import dbConnect from './config/mongoose.config.js';
import UserRouter from './routes/user.routes.js';
import cookieParser from 'cookie-parser';

dotenv.config();
const app = express();
const PORT = process.env.Port

app.use(cookieParser(), express.json(), cors({ "credentials": true, "origin": "http://localhost:5173" }));
dbConnect();
app.use('/api/users', UserRouter); //! This is the route that will be used to access the user routes (May error at first, but will be fixed in the next step)

// Error handling
// Routes not found in App
app.use((req, res, next) => {
    const err = new Error('Not found');
    err.status = 404;
    err.name = "Not found";
    next(err);
});
// All other errors
app.use((err, req, res, next) => {
    err.name === "ValidationError" ? err.status = 400 : null;
    // Normalize
    const normalizedError = {
        statusCode: err.status || 500,
        message: err.message || "Something went wrong",
        name: err.name || "Internal Server Error",
        validationErrors: extractValidationErrors(err)
    }
    // Return
    res.status(normalizedError.statusCode).json(normalizedError);
})

// Extract Validation Errors
function extractValidationErrors(err) {
    const validationErrors = {};
    if (err.name === "ValidationError") {
        for (const field in err.errors) {
            const errorMessage = err.errors[field].message;
            validationErrors[field] = errorMessage;
        }
    }
    return validationErrors;
}

// Start the Server
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));