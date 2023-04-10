import { getModelForClass, prop, Ref } from "@typegoose/typegoose";
import { User } from "../auth/User.model";
import { ProjectTask } from "./projectTasks/projectTasks.model";

export class Project {
  @prop({ trim: true })
  title: string;

  @prop()
  desc: string;

  @prop({ ref: () => User })
  createdBy: Ref<User>;
  
  @prop({default : 0})
  cost: number;
  
  @prop()
  tasks: Array<ProjectTask>;

  @prop({ default: true })
  isActive: boolean;

  @prop({ default: false })
  isDeleted: boolean;

  
 

}

export const ProjectModel = getModelForClass(Project, {
  schemaOptions: { timestamps: true },
});
