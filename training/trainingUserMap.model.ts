import { getModelForClass, prop, Ref } from "@typegoose/typegoose";
import { User } from "../auth/User.model";
import { Training } from "./traning.model";

export class TrainingUserMap {
  @prop({ ref: () => User })
  user: Ref<User>;

  @prop({ ref: () => Training })
  trainingId: Ref<Training>;
}

export const TrainingUserMapModel = getModelForClass(TrainingUserMap, {
  schemaOptions: { timestamps: true },
});
