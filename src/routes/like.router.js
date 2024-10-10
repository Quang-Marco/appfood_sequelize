import { Router } from "express";
import {
  getLikesByResId,
  getLikesByUserId,
} from "../controllers/like.controller.js";

const likeRoutes = Router();

likeRoutes.get("/get-likes-by-res-id/:resId", getLikesByResId);
likeRoutes.get("/get-likes-by-user-id/:userId", getLikesByUserId);

export default likeRoutes;
