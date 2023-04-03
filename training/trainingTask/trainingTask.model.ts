import { getModelForClass, prop, Ref } from "@typegoose/typegoose";
import { Training } from "../traning.model";

export class TrainingTask {
  @prop({ ref: () => Training })
  trainingId: Ref<Training>;

  @prop({ required: true })
  title: string;

  @prop({ required: true })
  desc: string;

  @prop({ default: 0 })
  userPoints: number;

  @prop({ default: true })
  isActive: boolean;

  @prop()
  status:boolean

  @prop({ default: false })
  isDeleted: boolean;
}

export const TrainingTaskModel = getModelForClass(TrainingTask, {
  schemaOptions: { timestamps: true },
});
