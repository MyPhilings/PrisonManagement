//Creating a local server with a port number 4000

const express = require('express');

const app = express();

const port_number = 4000;

app.use(express.json());

//Database setup (mongodb or dbeaver, 4/8/2024 or 4/15/2024)

const prisonerRoute = require('./routes/prisonerRoute')
app.use('/prisoner', prisonerRoute)

const guardRoute = require('./routes/guardRoute')
app.use('/guard', guardRoute)

app.listen(port_number, () => {
    console.log(`server is running on http://localhost:${port_number}`)
});

//To run backend server use 'node index.js' x