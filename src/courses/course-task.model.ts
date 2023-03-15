import { getModelForClass, Ref } from "@typegoose/typegoose";
import { prop } from "@typegoose/typegoose/lib/prop";
import { User } from "../auth/User.model";

export class CourseTask {
  @prop()
  title: string;

  @prop()
  priority: string;

  @prop()
  body: string;

  @prop()
  internalNote: string;

  @prop({ default: 0 })
  cost: number;

  @prop({ ref: () => User })
  user: Ref<User>;
}

export const CourseTaskModel = getModelForClass(CourseTask, {
  schemaOptions: { timestamps: true },
});
