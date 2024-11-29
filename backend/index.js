var express = require('express');
var cors = require('cors');
var app = express();
const bodyParser = require('body-parser');
var Opreation_Router = require('./UserGetingPosting');


app.use(cors());
app.use(bodyParser.json()); // or express.json()
app.get('/', (req, res) => {
    res.send(`
      <h1>Welcome to The Backend Code</h1>
      <h1>Check out the <a href="/api/userData" target="_blank">User Get API</a></h1>
    `);
  });

  app.use('/api', Opreation_Router)

  const port = 4100;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
