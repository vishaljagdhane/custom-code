var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
const ApiRouter = require('./ApiOperations');  // Assuming this is the file where your API logic resides

var app = express();

app.use(cors());
app.use(bodyParser.json());

// Welcome route
app.get('/', (req, res) => {
    res.send(`
        <h1>Welcome to My First Express Server</h1>
        <h1>Check out the <a href="/api/basicApiCheck" target="_blank">User Get API</a></h1>
    `);
});

// API Router
app.use('/api', ApiRouter);

const port = 4101;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
