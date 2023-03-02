import { getModelForClass, prop, Ref } from "@typegoose/typegoose";
import { Post } from "src/posts/Post.model";
import { User } from "../auth/User.model";

export class Like {

  @prop({ref: () => Post})
  post: Ref<Post>;

  @prop({ ref: () => User })
  user: Ref<User>;

  @prop({ default: false })
  isDeleted: boolean;
}

export const LikeModel = getModelForClass(Like, {
  schemaOptions: { timestamps: true },
});
