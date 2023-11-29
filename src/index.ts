import express, { Request, Response } from 'express';
import bodyParser from "body-parser";
import logger from 'morgan';
import indexRouter from './routes/index';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('./public'));
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'pug');
app.set('views', './views');
app.use(bodyParser.urlencoded({ extended: false }))

app.use(indexRouter);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});