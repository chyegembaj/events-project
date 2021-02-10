import express from "express";
import {
  getPosts,
  createPost,
  updatePost,
  deletePost,
  likeCount,
} from "../controller/posts.js";

const router = express.Router();

router.get("/", getPosts);
router.post("/", createPost);
router.patch("/:id", updatePost);
router.delete("/:id", deletePost);
router.patch("/:id/likeCount", likeCount);

export default router;
