import express from "express";
import rootRoutes from "./src/routes/root.router.js";

const app = express();

app.use(express.json());

app.use(rootRoutes);

app.listen(8080, () => {
  console.log("Server listening on port 8080");
});
