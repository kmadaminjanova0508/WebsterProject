const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const authRouter = require("./routes/auth/auth-routes");


//Database connection
 mongoose.connect('mongodb+srv://madaminjanovakhalima0508:hakatoncodealphateam2024@cluster0.opdxe.mongodb.net/')
 .then(()=> console.log('MongoDB connected')).catch(error=> console.log);
 


const app = express();

const PORT = process.env.PORT || 5001; 

app.use(
    cors({
        origin: ["http://localhost:5173", 'http://127.0.0.1:5173' ],
        methods : ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: [
            "Content-Type",
            "Authorization",
            "Cache-Control",
            "Expires",
            "Pragma",
          ],
          credentials: true,
    })
);

app.use(cookieParser());
app.use(express.json());
app.use( "/api/auth" , authRouter)

app.listen(PORT, () => console.log(`Server is now running on port ${PORT}`));