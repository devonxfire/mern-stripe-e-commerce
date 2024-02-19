import { Router } from "express";
import {
  getAllMenuItems,
  addMenuItem,
  getOneMenuItem,
} from "../controllers/menu.controller.js";

const router = Router();

router.get("/all", getAllMenuItems);
router.get("/:id", getOneMenuItem);
router.post("/add-menu-item", addMenuItem);

export default router;
