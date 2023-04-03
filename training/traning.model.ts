import { getModelForClass, prop, Ref } from "@typegoose/typegoose";
import { User } from "../auth/User.model";

export class Training {
  @prop({ trim: true })
  title: string;

  @prop()
  desc: string;

  @prop({ ref: () => User })
  createdBy: Ref<User>;

  @prop()
  tasks: Array<any>;

  @prop({ default: true })
  isActive: boolean;

  @prop({ default: false })
  isDeleted: boolean;

  @prop()
  participated: boolean;
}

export const TrainingModel = getModelForClass(Training, {
  schemaOptions: { timestamps: true },
});
