import { getModelForClass, prop, Ref } from "@typegoose/typegoose";
import { User } from "../../auth/User.model";
import { Recreation } from "../recreation.model";

export class RecreationMilestoneUserMap {
  @prop({ ref: () => Recreation })
  recreationMileStoneId: Ref<Recreation>;

  @prop({ ref: () => User })
  user: Ref<User>;

}

export const RecreationMilestoneUserMapModel = getModelForClass(
  RecreationMilestoneUserMap,
  {
    schemaOptions: { timestamps: true },
  }
);
