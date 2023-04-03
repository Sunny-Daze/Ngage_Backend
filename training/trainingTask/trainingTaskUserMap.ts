import { getModelForClass, prop, Ref } from "@typegoose/typegoose";
import { User } from "../../auth/User.model";
import { TrainingTask } from "../trainingTask/trainingTask.model";

export class TrainingTaskUserMap {
  @prop({ ref: () => TrainingTask })
  trainingTaskId: Ref<TrainingTask>;

  @prop({ ref: () => User })
  user: Ref<User>;
}

export const TrainingTaskUserMapModel = getModelForClass(TrainingTaskUserMap, {
  schemaOptions: { timestamps: true },
});
