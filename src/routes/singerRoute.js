import express from "express";

const router = express.Router();
import {
  getAllSingers,
  updateSinger,
  getSingerById,
  postSinger,
  deleteSinger,
} from "../controllers/singerControllers.js";

router.get("/", getAllSingers);

router.get(`/:id`, getSingerById);

router.post("/", postSinger);

router.put(`/:id`, updateSinger);

router.delete(`/:id`, deleteSinger);

export default router;
