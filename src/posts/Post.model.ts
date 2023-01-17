import { getModelForClass, prop, Ref } from "@typegoose/typegoose";
import { User } from "src/auth/User.model";

export class Post {
  @prop({ trim: true })
  title: string;

  @prop()
  category: string;

  @prop({})
  content: string;

  @prop({ ref: () => User })
  user: Ref<User>;

  @prop({ default: true })
  isActive: boolean;

  @prop({ default: false })
  isDeleted: boolean;
}

export const PostModel = getModelForClass(Post, {
  schemaOptions: { timestamps: true },
});
