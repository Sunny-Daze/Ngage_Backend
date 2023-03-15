import { getModelForClass, prop, Ref } from "@typegoose/typegoose";
import { Post } from "../posts/Post.model";
import { User } from "../auth/User.model";

export class Course {

  @prop()
  name:string

  @prop()
  body:string

  @prop({ ref: () => User })
  user: Ref<User>;
}

export const CourseModel = getModelForClass(Course, {
  schemaOptions: { timestamps: true },
});
