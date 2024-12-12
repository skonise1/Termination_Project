import express from "express"; // Importing the Express framework
import { config } from "dotenv"; // To load environment variables from .env file
import cors from "cors"; // To handle cross-origin requests
import { sendEmail } from "./utils/sendEmail.js"; // Utility function for sending emails

const app = express();
const router = express.Router();

config({ path: "./config.env" }); // Load environment variables

// Middleware for parsing requests and enabling CORS
app.use(cors({
    origin: [process.env.FRONTEND_URL], // Allow requests only from the frontend URL
    methods: ["POST"],
    credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route for sending emails
router.post("/send/mail", async (req, res, next) => {
    const { name, email, message } = req.body;

    // Check for missing input fields
    if (!name || !email || !message) {
        return res.status(400).json({
            success: false,
            message: "Please provide all details",
        });
    }

    try {
        // Call utility function to send an email
        await sendEmail({
            email: "sriramyakonisetti5@gmail.com",
            subject: "GYM WEBSITE CONTACT",
            name,
            message,
            userEmail: email,
        });

        // Success response
        res.status(200).json({
            success: true,
            message: "Message Sent Successfully.",
        });
    } catch (error) {
        console.error("Error sending email:", error); // Log any error

        // Internal server error response
        res.status(500).json({
            success: false,
            message: "Internal Server Error.",
        });
    }
});

app.use(router);

app.listen(process.env.PORT, () => {
    console.log(`Server listening at port ${process.env.PORT}`); // Start server
});
