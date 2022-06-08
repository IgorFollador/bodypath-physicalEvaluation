const express = require('express');
const db = require('./config/dbConnect');
const routes = require('./routes/index');

db.on("error", console.log.bind(console, 'Error to connect'));
db.once("open", () => {
    console.log('Database connection was successful!')
});

const app = express();
const port = process.env.PORT || 3002;

routes(app);

app.listen(port, () => console.log(`Sevidor está rodando na porta ${port}`));

module.exports = app;