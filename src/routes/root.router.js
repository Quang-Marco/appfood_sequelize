import { Router } from "express";
import userRoutes from "./user.router.js";
import likeRoutes from "./like.router.js";
import rateRoutes from "./rate.router.js";
import orderRoutes from "./order.router.js";

const rootRoutes = Router();

rootRoutes.use("/api-users", userRoutes);
rootRoutes.use("/api-likes", likeRoutes);
rootRoutes.use("/api-rates", rateRoutes);
rootRoutes.use("/api-orders", orderRoutes);

export default rootRoutes;
