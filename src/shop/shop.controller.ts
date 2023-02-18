import { Request, Response } from "express";
import { file } from "tmp";
import { uploadFile } from "../utils/Helpers/fileUpload";
import { OrderModel } from "./orders.model";
import { ShopModel } from "./shop.model";

export const createNewShopProduct = async (req: any, res: Response) => {
  let productImage;
  let { productName, productDesc, userPoints } = req.body;
  try {
    for (const file of Object.values(req.files)) {
      productImage = await uploadFile(file);
    }
    let shopItem = await ShopModel.create({
      productDesc,
      productImage,
      productName,
      userPoints,
    });
    if (shopItem) {
      res.status(201).json({
        success: true,
        message: "Shop Product Added Successfully",
        result: shopItem,
      });
    } else {
      res.status(201).json({
        success: false,
        message: "Failed to add shop Project",
        result: shopItem,
      });
    }
  } catch (error) {
    res.status(401).json({
      success: false,
      message: "Failed to add shop Project",
      error,
    });
  }
};

export const fetchShopProducts = async (req: any, res: Response) => {
  let products = await ShopModel.find({
    isActive: true,
    isDeleted: false,
  });

  if (products) {
    res.status(201).json({
      success: true,
      message: "fetched Products",
      result: products,
    });
  } else {
    res.status(401).json({
      success: false,
      message: "unable to fetch products",
    });
  }
};

export const purchaseShopProduct = async (req: any, res: Response) => {
  let { user, productId } = req.body;

  let order = OrderModel.create({
    user,
    product: productId,
  });
  if (order) {
    res.status(201).json({
      success: true,
      message: "fetched Order",
      result: order,
    });
  } else {
    res.status(401).json({
      success: false,
      message: "unable to fetch Order",
    });
  }
};
