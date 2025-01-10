require("dotenv").config();
const app = require(".");
const { connectDB } = require("./config/db");

const PORT = process.env.PORT || 5000;
app.listen(PORT, async()=>{
    await connectDB();
    // console.log("Ecommerce Backend-API Working On PORT", PORT);
});