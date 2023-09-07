import express from "express";

import { deleteUserHandler } from "../handlers/user/deleteUser";
import { getUserByIdHandler } from "../handlers/user/getUserById";
import { getUserByNameHandler } from "../handlers/user/getUserByName";
import { postUserHandler } from "../handlers/user/postUser";
import { updateUserHandler } from "../handlers/user/updateUser";

const userRouter = express.Router();

userRouter.get("/name",getUserByNameHandler);
userRouter.get("/:id",getUserByIdHandler);
userRouter.post("/",postUserHandler);
userRouter.delete("/:id",deleteUserHandler);
userRouter.put("/:id",updateUserHandler);


export default userRouter;

// import router from "./index";

// import { postUserHandler } from "../handlers/user/postUser";
// import { getUserById } from "@/controllers/user/getUserById";

// router.post("/user", postUserHandler);
// router.get('/user/:id',getUserById )