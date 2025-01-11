import { Router } from "express";
import { fetchAllUsers } from "../controllers.ts/user/fetchAllUsers.js";
import { createUser } from "../controllers.ts/user/createUser.js";
import { deleteUser } from "../controllers.ts/user/deleteUser.js";
import { updateUser } from "../controllers.ts/user/updateUserDetails.js";




export const userRouter = Router()

userRouter.get("/users", fetchAllUsers)
userRouter.post("/users", createUser)
userRouter.delete("/users", deleteUser)
userRouter.put("/users", updateUser )