import { getModelForClass, prop, Ref } from "@typegoose/typegoose";
import { User } from "../../auth/User.model";
import { Training } from "../traning.model";
import { TrainingTask } from "../trainingTask/trainingTask.model";

export class TrainingUserMap {
  @prop({ ref: () => User })
  user: Ref<User>;

  @prop({ ref: () => Training })
  TrainingId: Ref<Training>;

  @prop({ ref: () => TrainingTask })
  milestone: Ref<TrainingTask>;

  @prop({ default: false })
  status: boolean;

  @prop({ default: true })
  isActive: boolean;

  @prop({ default: false })
  isDeleted: boolean;
}

export const TrainingUserMapModel = getModelForClass(TrainingUserMap, {
  schemaOptions: { timestamps: true },
});
