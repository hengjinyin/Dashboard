const express = require("express");
const app = express();

const port = process.env.port || 3001;

app.use('/', (req, res, next) => {
    res.json({message: "Hi thereasdf"});
})

app.listen(port, () => {
    console.log(`API is ready on http://localhost:${port}`);
})