import express from 'express';

const app = express();

app.get("/", (req, res) => {
    res.send("lg ces");
});

app.listen(3000, () => {
    console.log("start! express server on port 3000")
})