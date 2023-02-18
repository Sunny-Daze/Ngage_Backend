import { getModelForClass, prop, Ref } from "@typegoose/typegoose";
import { User } from "../auth/User.model";
import { Shop } from "./shop.model";

export class Order {
  @prop({ ref: () => Shop })
  product: Shop;

  @prop({ ref: () => User })
  user: Ref<User>;
}

export const OrderModel = getModelForClass(Order, {
  schemaOptions: { timestamps: true },
});
