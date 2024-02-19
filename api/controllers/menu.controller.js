import { MenuItem } from "../models/menu.model.js";
import { errorHandler } from "../utils/errorHandler.js";

export const getAllMenuItems = async (req, res, next) => {
  const menuItems = await MenuItem.find();

  try {
    if (!menuItems) {
      return next(errorHandler(404, "No menu items found"));
    }

    if (menuItems.length === 0) {
      return next(errorHandler(404, "No menu items found"));
    }
    res.status(200).json(menuItems);
  } catch (error) {
    next(error);
  }
};

export const getOneMenuItem = async (req, res, next) => {
  const { id } = req.params;
  const menuItem = await MenuItem.findById(id);
  try {
    if (!menuItem) {
      return next(errorHandler(404, "No menu item found"));
    }
    res.status(200).json(menuItem);
  } catch (error) {
    next(error);
  }
};

export const addMenuItem = async (req, res, next) => {
  const { name, description, price, onSpecial, imageUrl } = req.body;
  const newItem = await MenuItem.create(req.body);
  res.status(201).json(newItem);
};
