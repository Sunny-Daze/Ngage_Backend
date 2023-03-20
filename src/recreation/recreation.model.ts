import { getModelForClass, prop, Ref } from "@typegoose/typegoose";
import { User } from "../auth/User.model";

export class Recreation {
  @prop({ trim: true })
  title: string;

  @prop()
  desc: string;

  @prop({ ref: () => User })
  createdBy: Ref<User>;

  @prop()
  milestones: Array<any>;

  @prop({ default: true })
  isActive: boolean;

  @prop({ default: false })
  isDeleted: boolean;
}

export const RecreationModel = getModelForClass(Recreation, {
  schemaOptions: { timestamps: true },
});
