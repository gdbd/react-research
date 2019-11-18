import * as express from 'express';
import {Application} from "express";


const app: Application = express();


app.use('/', (req, res) => res.send('asd'));

app.listen(3000);
