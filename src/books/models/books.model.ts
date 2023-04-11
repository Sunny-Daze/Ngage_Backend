import { getModelForClass, prop, Ref } from "@typegoose/typegoose";

export class Books {
  @prop({ trim: true })
  title: string;

  @prop()
  author: string;

  @prop({})
  publisher: string;


  @prop({})
  published_date: Date;


  @prop({ })
  description: string;

  @prop({ })
  page_count: number;
}

export const BooksModel = getModelForClass(Books, {
  schemaOptions: { timestamps: true },
});
