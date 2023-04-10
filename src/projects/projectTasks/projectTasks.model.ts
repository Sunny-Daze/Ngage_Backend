import { getModelForClass, prop, Ref } from "@typegoose/typegoose";
import { User } from "../../auth/User.model";
import { Project } from "../project.model";




export class ProjectTask {
  @prop({ ref: () => Project })
  projectId: Ref<Project>;

  @prop({ required: true })
  title: string;

  @prop({ required: true })
  desc: string;

  @prop({ default: 0 })
  cost: number;

  @prop({ default: 'LOW'})
  priority: string;

  @prop({ default: 0 })
  status: number;

  @prop({ default: 0 })
  notes: number;

  @prop({ })
  deadline: Date;

  @prop({ ref: () => User })
  assignTo: Ref<User>[];

  @prop({ ref: () => User })
  assignBy: Ref<User>;

  @prop({ default: true })
  isActive: boolean;

  @prop({ default: false })
  isDeleted: boolean;
}

export const ProjectTaskModel = getModelForClass(ProjectTask, {
  schemaOptions: { timestamps: true },
});
