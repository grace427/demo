const express = require('express');

const app = express();


app.get("/", (req, res) => {
    res.send('video test');
});

app.get("/video", (req, res) => {
    res.sendFile(__dirname+'/views/video.html');
});

app.listen(3000, () => {
    console.log("start! express server on port 3000")
})


//http://52.79.237.24:3000/