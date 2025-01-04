import { Router } from "express";
import fetchUsers from "../controllers/apiController.js";



const router = Router()


router.get("/", fetchUsers )