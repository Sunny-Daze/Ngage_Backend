import { getModelForClass, prop, Ref } from "@typegoose/typegoose";

export class Shop {
  @prop({ trim: true })
  productName: string;

  @prop()
  productImage: string;

  @prop({})
  productDesc: string;


  @prop({})
  userPoints: number;


  @prop({ default: true })
  isActive: boolean;

  @prop({ default: false })
  isDeleted: boolean;
}

export const ShopModel = getModelForClass(Shop, {
  schemaOptions: { timestamps: true },
});
