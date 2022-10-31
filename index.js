import express from "express"
import cors from "cors"
import mongoose from "mongoose";
import router from "./Router.js";
const PORT = process.env.PORT || 3000;
const DB_URL = `mongodb+srv://utkamag:Hesoyam1973@cluster0.gfxjvcx.mongodb.net/?retryWrites=true&w=majority`

const options = {
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
};

const app = express()
app.use(cors(options))
app.use(express.json())
app.use("/", router)


async function startApp () {
    try {
        await mongoose.connect(DB_URL)
        app.listen(PORT, () => console.log("Sever worked on port" + PORT))
    } catch (e) {
        console.log(e)
    }
}

startApp()