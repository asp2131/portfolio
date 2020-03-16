const express = require('express');
const app = express()
const port = 8080;
const server = app.listen(port);

app.use(express.static(`${__dirname}/../build/`));

server.on('listening', () =>
    console.log("listening on port 8080")
);