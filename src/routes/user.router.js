import { Router } from "express";
import { getUsers } from "../controllers/user.controller.js";

const userRoutes = Router();

userRoutes.get("/get-users", getUsers);

export default userRoutes;
