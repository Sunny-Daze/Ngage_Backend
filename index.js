import express, { urlencoded } from 'express';
import cors from 'cors';
import dotenv from 'dotenv'

import ConnectDB from './database/db.js';
import Routes from './routes/route.js';

const app = express();
const PORT = '9000';
dotenv.config();

app.use(express.json());
app.use(cors());
app.use(urlencoded());

const USER_NAME = process.env.USER_NAME;
const USER_PASSWORD = process.env.USER_PASSWORD;
ConnectDB(USER_NAME, USER_PASSWORD);

app.use('/', Routes);

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
})