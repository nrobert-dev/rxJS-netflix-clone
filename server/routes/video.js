const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const data = require('../database/dataGenerator');

router.get('/list', (req,res) => {
    const term = req.query.term;
    const select = req.query.select;
    const type = req.query.type;

    let selectedData = null;

    switch(type.toLowerCase()){
        case 'movies':
            selectedData = {...data.generatedMovies};
            break;
        case 'tvshows':
            selectedData = {...data.generatedShows};
            break;
        case 'new-popular':
            selectedData = {...data.generatedNew};
            break;
    }

    if(term){
        delete selectedData.main;
    }
    setTimeout(() => res.send(JSON.stringify(selectedData)), 2000);
});

router.get('/watch', (req, res) => {
    const videoPath = `assets/videoSource.mp4`;
    const videoStat = fs.statSync(videoPath);
    const fileSize = videoStat.size;
    const videoRange = req.headers.range;
    if (videoRange) {
        const parts = videoRange.replace(/bytes=/, "").split("-");
        const start = parseInt(parts[0], 10);
        const end = parts[1]
            ? parseInt(parts[1], 10)
            : fileSize-1;
        const chunksize = (end-start) + 1;
        const file = fs.createReadStream(videoPath, {start, end});
        const head = {
            'Content-Range': `bytes ${start}-${end}/${fileSize}`,
            'Accept-Ranges': 'bytes',
            'Content-Length': chunksize,
            'Content-Type': 'video/mp4',
        };
        res.writeHead(206, head);
        file.pipe(res);
    } else {
        const head = {
            'Content-Length': fileSize,
            'Content-Type': 'video/mp4',
        };
        res.writeHead(200, head);
        fs.createReadStream(videoPath).pipe(res);
    }
});

module.exports = router;