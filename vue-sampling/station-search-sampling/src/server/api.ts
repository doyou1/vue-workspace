import express from "express";
import type { Request, Response } from "express";
const api = express.Router();

api.get("/", (_req, res) => res.send("api root route"));

api.get(
  "/station",
  (req: Request<{}, {}, { input: string }>, res: Response) => {
    res.status(200).json(JSON.stringify(req.query.input));
  },
);

export default api;

// api.get("/tasks", (_req: Request, res: Response) => {
//   res.status(200).json(JSON.stringify(tasks));
// });

// api.post("/tasks", (req: Request<{}, {}, RequestTask>, res: Response) => {
//   const data = req.body;
//   const newId = `${tasks.length}`;
//   tasks.push({
//     id: newId,
//     title: data.title,
//     complete: data.complete,
//   });
//   res.status(200).json(JSON.stringify(tasks));
// });
