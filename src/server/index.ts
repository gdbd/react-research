import * as express from 'express';
import {Application} from "express";


const app: Application = express();


app.use('/', (req, res) => res.send('asd'));


console.log('dev server listening at: http://localhost:3000');
app.listen(3000);
