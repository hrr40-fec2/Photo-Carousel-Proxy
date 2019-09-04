const express = require('express');
const app = express();
const port = 3000;

app.use('./public');

app.listen(port, () => {
  console.log(`now listening on port ${port}`);
});