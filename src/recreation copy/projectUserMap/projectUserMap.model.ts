import { getModelForClass, prop, Ref } from "@typegoose/typegoose";
import { User } from "../../auth/User.model";
import { Recreation } from "../project.model";
import { RecreationMilestone } from "../recreationMilestone/recreationMileStone.model";

export class RecreationUserMap {
  @prop({ ref: () => User })
  user: Ref<User>;

  @prop({ ref: () => Recreation })
  recreationId: Ref<Recreation>;

  @prop({ ref: () => RecreationMilestone })
  milestone: Ref<RecreationMilestone>;

  @prop({ default: false })
  status: boolean;

  @prop({ default: true })
  isActive: boolean;

  @prop({ default: false })
  isDeleted: boolean;
}

export const RecreationUserMapModel = getModelForClass(RecreationUserMap, {
  schemaOptions: { timestamps: true },
});
