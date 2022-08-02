import express from "express";
// import { getTasks } from "../controller/tasks";

const router = express.Router();

router.get("/", "getTasks");

export default router;
