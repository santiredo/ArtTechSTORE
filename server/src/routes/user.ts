import express from "express";

import { deleteUserHandler } from "@/handlers/user/deleteUser";
import { getUserByIdHandler } from "@/handlers/user/getUserById";
import { getUserByNameHandler } from "@/handlers/user/getUserByName";
import { postUserHandler } from "@/handlers/user/postUser";
import { updateUserHandler } from "@/handlers/user/updateUser";

const userRouter = express.Router();

userRouter.get("/:id",getUserByIdHandler);
userRouter.get("/",getUserByNameHandler);
userRouter.post("/",postUserHandler);
userRouter.delete("/:id",deleteUserHandler);
userRouter.put("/:id",updateUserHandler);


export default userRouter;
