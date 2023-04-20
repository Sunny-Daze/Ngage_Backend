import { getModelForClass, prop, Ref } from "@typegoose/typegoose";
import { Project } from "../projects/project.model";
import { User } from "../auth/User.model";

export class Service {
  @prop({ ref: () => Project })
  projectId: Ref<Project>;
  // Client Details

  @prop({})
  firstName: string;

  @prop({})
  lastName: string;

  @prop({})
  address: string;

  @prop({})
  phone: string;

  // Project Details

  @prop({})
  projectName: string;

  @prop({})
  projectDesc: string;

  @prop({})
  projectIntro: string;

  @prop({})
  projectbg: string;

  //   Extra Project Details

  @prop({})
  objective: string;

  @prop({})
  problem: string;

  @prop({})
  submission: Date;

  @prop({})
  budget: number;

  // Ref
  @prop({})
  reference: string[];

  // Res
  @prop({})
  resources: string[];

  @prop({ ref: () => User })
  createdBy: Ref<User>;

  @prop({ default: true })
  isActive: boolean;

  @prop({ default: false })
  isDeleted: boolean;
}

export const ServiceModel = getModelForClass(Service, {
  schemaOptions: { timestamps: true },
});
