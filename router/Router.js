import Router from "express"
import PostController from "../controller/PostController.js";

const router = new Router()

router.post("/tokens", PostController.create)
router.get("/tokens", PostController.getAll)
router.get("/tokens/:id", PostController.getOne)
router.put("/tokens", PostController.update)
router.delete("/tokens/:id", PostController.delete)

export default router