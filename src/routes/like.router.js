import { Router } from "express";
import {
  createLikeRes,
  deleteLikeRes,
  getLikesByResId,
  getLikesByUserId,
} from "../controllers/like.controller.js";

const likeRoutes = Router();

likeRoutes.post("/like-res/:userId/:resId", createLikeRes);
likeRoutes.delete("/unlike-res/:userId/:resId", deleteLikeRes);
likeRoutes.get("/get-likes-by-res-id/:resId", getLikesByResId);
likeRoutes.get("/get-likes-by-user-id/:userId", getLikesByUserId);

export default likeRoutes;
