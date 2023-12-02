import express, { json } from "express";
import type { Express } from "express";
import api from "./api";

const app: Express = express();

app.use(json());
app.use("/api", api);
app.listen(3000, () => console.log("server start at port 3000"));

export default app;
