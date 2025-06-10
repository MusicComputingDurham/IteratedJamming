// server.js
const Gun = require("gun");
const express = require("express");

const app = express();
const port = 8765;

app.use(Gun.serve);
const server = app.listen(port, () => {
  console.log(`GUN server running at http://localhost:${port}/gun`);
});

Gun({ web: server });
