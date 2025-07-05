const express = require('express');

const app = express();
const port = 5000
const people = require('./courses/freecode_camp_expressjs/routes/people')

app.use(express.static('courses/freecode_camp_expressjs/methodsap'));
app.use(express.urlencoded({extended: false}));
app.use(express.json())
app.use('/api/people', people)

app.listen(port, () => console.log(`Server is listening on port ${port}...`));