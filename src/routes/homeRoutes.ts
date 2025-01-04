import { Router } from "express";
import fetchUser from "../controllers/apiController.js";




const router = Router()



router.get("/api", fetchUser )


export default router