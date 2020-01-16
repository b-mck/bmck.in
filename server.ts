import express from 'express';

const server = express();
server.use(express.static('static', { fallthrough: true }));
server.get('/', (req, res) => res.send('hello world !'));
server.listen(3000);
console.log('listening on port 3000');
