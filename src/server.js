const express = require('express');
const routes = require('./routes');

const app = express();
const port = process.env.PORT_CUSTOMER || 3002;

routes(app);

app.listen(port, () => console.log(`Server is running on port ${port}`));

module.exports = app;
