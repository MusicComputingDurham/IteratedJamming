# Run your own GUN server locally

Assuming you have `npm` installed, install the required packages

```shell
npm install gun
npm install express
```

and run the `server.js` script

```shell
node server.js
```

Here is the script
```js
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
```