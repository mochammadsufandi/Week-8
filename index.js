const express = require('express');
const dotenv = require('dotenv');
const app = express();
const routes= require('./routes/index');
const errorHandler = require('./middleware/errorHandler');

dotenv.config();

const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({extended : true}));


app.use(routes);
app.use(errorHandler);


app.listen(PORT, 'localhost', () => {
    console.log(`server is listening on PORT ${PORT}`);
})

