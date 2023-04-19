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

  @prop({ default: "LOW" })
  priority: string;

  @prop({})
  status: string;

  @prop({})
  note: string;

  @prop({})
  deadline: Date;

  @prop({ ref: () => User })
  createdBy: Ref<User>;

  @prop({ ref: () => User })
  assignedTo: Ref<User>[];

  @prop({ default: true })
  isActive: boolean;

  @prop({ default: false })
  isDeleted: boolean;
}

export const ProjectTaskModel = getModelForClass(ProjectTask, {
  schemaOptions: { timestamps: true },
});
