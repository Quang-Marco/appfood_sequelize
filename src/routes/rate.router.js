import { Router } from "express";
import {
  createRateRes,
  getRatesByResId,
  getRatesByUserId,
} from "../controllers/rate.controller.js";

const rateRoutes = Router();

rateRoutes.post("/rate-res", createRateRes);
rateRoutes.get("/get-rates-by-res-id/:resId", getRatesByResId);
rateRoutes.get("/get-rates-by-user-id/:userId", getRatesByUserId);

export default rateRoutes;
