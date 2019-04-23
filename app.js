const express = require('express');
const app = express();

const morgan = require('morgan');
app.use(morgan('combined'));

const responseString = 'v0.3.1 APIs hosted successfully!';
app.get('/', (req, res) => res.send(responseString));

app.listen(3000, () => console.log('Server started on port 3000'));

module.exports = app;
