import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';

import Resume from './resume';

const server = express();
server.get('/resume', (req, res) => res.send(renderToString(<Resume />)));
server.use(express.static('static', { fallthrough: true }));
server.get('/', (req, res) => res.send('hello world !'));
server.listen(3000);
console.log('listening on port 3000');
