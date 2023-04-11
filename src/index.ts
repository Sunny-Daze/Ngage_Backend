import express from "express";
import dotenv from "dotenv";
import { mongoose } from "@typegoose/typegoose";
import cors from "cors";
import { BookRoutes } from "./books/routes/books.routes";


dotenv.config();
const app = express();
const port = process.env.PORT;

app.use(cors({
  origin: '*'
}));

app.use(express.json({ limit: "5000mb" }));

// ############### === DB CONNECTION === ########################
mongoose.set("strictQuery", true);

mongoose
  .connect(process.env.DATABASEURL ?? "")
  .then(() => {
    console.log("Connected to database!");
  })
  .catch((error) => {
    console.log("Connection failed!", error);
  });

// ############### === DB CONNECTION END === ########################

app.use("/books", BookRoutes);

// Status Check
app.get("/", (req, res) => {
  res.send("Serving on port" + port);
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
