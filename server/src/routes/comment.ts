import { getCommentsHandler } from "../handlers/Comment/getComment.handler";
import { postCommentsHandler } from "../handlers/Comment/postComment.handler";
import { deleteCommentsHandler } from "../handlers/Comment/deleteComment.handler";
import express from "express";

const commentRouter = express.Router();

commentRouter.get('/', getCommentsHandler);
commentRouter.post('/', postCommentsHandler);
commentRouter.delete('/', deleteCommentsHandler);

export default commentRouter;
