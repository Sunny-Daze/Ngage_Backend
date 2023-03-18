import { getModelForClass, prop, Ref } from "@typegoose/typegoose";

export class Shop {
  @prop({ trim: true })
  name: string;

  @prop()
  desc: string;

 


  @prop({ default: true })
  isActive: boolean;

  @prop({ default: false })
  isDeleted: boolean;
}

export const ShopModel = getModelForClass(Shop, {
  schemaOptions: { timestamps: true },
});
