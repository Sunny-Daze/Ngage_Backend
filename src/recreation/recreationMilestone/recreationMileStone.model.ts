import { getModelForClass, prop, Ref } from "@typegoose/typegoose";
import { Recreation } from "../recreation.model";

export class RecreationMilestone {
  @prop({ ref: () => Recreation })
  recreationId: Ref<Recreation>;

  @prop({ required: true })
  title: string;

  @prop({ required: true })
  desc: string;

  @prop({ default: 0 })
  userPoints: string;

  @prop({ default: true })
  isActive: boolean;

  @prop({ default: false })
  isDeleted: boolean;
}

export const RecreationMilestoneModel = getModelForClass(RecreationMilestone, {
  schemaOptions: { timestamps: true },
});
