import { getModelForClass, prop, Ref } from "@typegoose/typegoose";
import { User } from "../../auth/User.model";
import { ProjectTask, ProjectTaskModel } from "./projectTasks.model";

export class ProjectTaskUserMap {
  @prop({ ref: () => ProjectTask })
  projectTaskId: Ref<ProjectTask>;

  @prop({ ref: () => User })
  user: Ref<User>;
}

export const ProjectTaskUserMapModel = getModelForClass(ProjectTaskUserMap, {
  schemaOptions: { timestamps: true },
});
