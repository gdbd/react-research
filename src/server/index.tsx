import * as express from 'express';
import {Application} from "express";
import * as React from 'react'
import {renderToString } from 'react-dom/server';
import {DefaultPage} from './default';

const app: Application = express();


app.use('/', (req, res) => {
    const str = renderToString(<DefaultPage />)
    res.send(str);
});


console.log('dev server listening at: http://localhost:3000');
app.listen(3000);
