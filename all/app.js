

const express = require('express');
const connectDB = './database/databases'
const app = express();
require('dotenv').config();

app.get('/', (req, res) => {
    res.send("Hello World RIght Now.");
})

const port = process.env.PORT

connectDB()
    app.listen(port, () => {
        console.log(`app listening on port ${port}`);
    })
