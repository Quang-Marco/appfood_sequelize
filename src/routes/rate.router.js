import { Router } from "express";
import {
  getRatesByResId,
  getRatesByUserId,
} from "../controllers/rate.controller.js";

const rateRoutes = Router();

rateRoutes.get("/get-rates-by-res-id/:resId", getRatesByResId);
rateRoutes.get("/get-rates-by-user-id/:userId", getRatesByUserId);

export default rateRoutes;
