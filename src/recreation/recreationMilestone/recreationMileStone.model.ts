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
  userPoints: number;

  @prop()
  status: boolean;
}

export const RecreationMilestoneModel = getModelForClass(RecreationMilestone, {
  schemaOptions: { timestamps: true },
});
