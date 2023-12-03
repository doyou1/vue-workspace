import express from "express";
import type { Request, Response } from "express";
import { Station, Pref } from "@/shared";
import station from "@/assets/station.json" assert { type: "json" };
import pref from "@/assets/pref.json" assert { type: "json" };

const api = express.Router();
const stationData = station as Station[];
const prefData = pref as Pref[];

api.get("/", (_req, res) => res.send("api root route"));

api.get("/pref", (_req: Request, res: Response) => {
  res.status(200).json(prefData);
});

api.get(
  "/station",
  (req: Request<{}, {}, { input: string }>, res: Response) => {
    if (((req.query?.input as string) ?? "").length === 0)
      res.status(200).json([]);
    else {
      const filtered = stationData.filter((v) =>
        v.station_name.includes(req.query.input as string),
      );
      res.status(200).json(filtered);
    }
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
