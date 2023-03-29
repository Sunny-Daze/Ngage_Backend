import { getModelForClass, prop, Ref } from "@typegoose/typegoose";
import { User } from "../../auth/User.model";
import { RecreationMilestone } from "./recreationMileStone.model";

export class RecreationMilestoneUserMap {
  @prop({ ref: () => RecreationMilestone })
  recreationMileStoneId: Ref<RecreationMilestone>;

  @prop({ ref: () => User })
  user: Ref<User>;
}

export const RecreationMilestoneUserMapModel = getModelForClass(
  RecreationMilestoneUserMap,
  {
    schemaOptions: { timestamps: true },
  }
);
