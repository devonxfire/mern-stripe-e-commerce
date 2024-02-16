import { Router } from "express";
import {
  getAllMenuItems,
  addMenuItem,
} from "../controllers/menu.controller.js";

const router = Router();

router.get("/all", getAllMenuItems);
router.post("/add-menu-item", addMenuItem);

export default router;
