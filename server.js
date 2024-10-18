import express from "express";
import routes from "./routes/routes.js";

const app = express();
const PORT = 5000;

app.use("/api", routes);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
