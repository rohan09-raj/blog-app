import Express from "express";

import {
  getPosts,
  getPostsBySearch,
  createPost,
  updatePost,
  deletePost,
  likePost,
  getPost,
  commentPost,
} from "../controllers/posts.js";
import auth from "../middlewares/auth.js";

const router = Express.Router();

router.get("/", getPosts);
router.get("/:id", getPost);
router.get("/search", getPostsBySearch);
router.post("/", auth, createPost);
router.patch("/:id", auth, updatePost);
router.delete("/:id", auth, deletePost);
router.patch("/:id/likePost", auth, likePost);
router.post("/:id/commentPost", auth, commentPost);

export default router;
