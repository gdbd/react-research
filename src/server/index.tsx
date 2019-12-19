import * as express from 'express';
import fs  from 'fs';
import path from 'path';
import {Application} from "express";
import * as React from 'react'
import {renderToString } from 'react-dom/server';
import {DefaultPage} from './pages/default';

const app: Application = express();

app.use('/mount.js', (req, res) => {
    console.log(req.originalUrl);
    const pat = path.join(__dirname, 'mount.js');
    console.log(pat);

    fs.readFile(pat, (err, data) => {
        if(err){
            console.log('not found');
        }
        else {
            console.log('found');
            res.send(data);
        }
    });
});


app.use('/', (req, res) => {
    const str = renderToString(<DefaultPage />)
    res.send(str);
});

console.log('dev server listening at: http://localhost:3000');
app.listen(3000);
