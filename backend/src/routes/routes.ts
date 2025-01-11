import { Router } from "express";
import { fetchAllUsers } from "../controllers.ts/user/fetchAllUsers.js";
import { createUser } from "../controllers.ts/user/createUser.js";
import { deleteUser } from "../controllers.ts/user/deleteUser.js";
import { updateUser } from "../controllers.ts/user/updateUserDetails.js";




export const router = Router()

router.get("/users", fetchAllUsers)
router.post("/users", createUser)
router.delete("/users", deleteUser)
router.put("/users", updateUser )