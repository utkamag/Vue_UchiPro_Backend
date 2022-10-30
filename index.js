import express from 'express';
import mongoose from "mongoose";
import router from "./router/Router.js";
import Router from "./router/Router.js";
const PORT = 3000;
const DB_URL = `mongodb+srv://utkamag:Hesoyam1973@cluster0.gfxjvcx.mongodb.net/?retryWrites=true&w=majority`

const app = express()

app.use(express.json())
app.use("/", router)
app.use("/tokens", Router)

async function startApp () {
    try {
        await mongoose.connect(DB_URL)
        app.listen(PORT, () => console.log("Sever worked on port" + PORT))
    } catch (e) {
        console.log(e)
    }
}

startApp()