import express from "express";

import { deleteUserHandler } from "../handlers/User/deleteUser";
import { getUserByIdHandler } from "../handlers/User/getUserById";
import { getUserByNameHandler } from "../handlers/User/getUserByName";
import { postUserHandler } from "../handlers/User/postUser";
import { updateUserHandler } from "../handlers/User/updateUser";
import { getAllUserHandler } from "../handlers/User/getAllUser";

const userRouter = express.Router();

userRouter.get("/name",getUserByNameHandler);
userRouter.get("/:id",getUserByIdHandler);
userRouter.get("/",getAllUserHandler);
userRouter.post("/",postUserHandler);
userRouter.delete("/:id",deleteUserHandler);
userRouter.put("/:id",updateUserHandler);


export default userRouter;

// import router from "./index";

// import { postUserHandler } from "../handlers/user/postUser";
// import { getUserById } from "@/controllers/user/getUserById";

// router.post("/user", postUserHandler);
// router.get('/user/:id',getUserById )