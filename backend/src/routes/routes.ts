import { Router } from "express";
import fetchUser from "../controllers/fetchUserController";






const router = Router()



router.get("/fetch", fetchUser )


export default router