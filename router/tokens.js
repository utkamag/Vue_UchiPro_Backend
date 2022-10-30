import Router from "express"
import Service from "../service/Service.js";

Router.get("/tokens", async (req, res) => {
    try{
        const posts = await Service.getAll()
        return res.json(posts)

    } catch (e) {
        res.status(500).json(e)
    }
    })

export default Router