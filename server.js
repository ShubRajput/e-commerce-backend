import express from 'express';
import axios from 'axios';
import Connection from './DB/db.js';
import router from './Routes/routes.js';
import bodyParser from "body-parser";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});

Connection();

app.use('/', router);