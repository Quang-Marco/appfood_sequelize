import { Router } from "express";
import userRoutes from "./user.router.js";
import likeRoutes from "./like.router.js";
import rateRoutes from "./rate.router.js";

const rootRoutes = Router();

rootRoutes.use("/users", userRoutes);
rootRoutes.use("/likes", likeRoutes);
rootRoutes.use("/rates", rateRoutes);

export default rootRoutes;
