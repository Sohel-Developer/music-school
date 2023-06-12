const express = require('express');
const app = express()
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send("Music School Server Running")
})

app.listen(port, () => {
    console.log(`music server app listening port ${port}`);
})