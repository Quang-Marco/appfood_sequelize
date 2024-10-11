import { Router } from "express";
import { createOrder } from "../controllers/order.controller.js";

const orderRoutes = Router();

orderRoutes.post("/order", createOrder);

export default orderRoutes;
