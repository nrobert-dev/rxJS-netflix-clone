const express = require('express');
const cors = require('cors');
const app = express();

const videoRouter = require('./routes/video');
app.use(cors())

app.use('/video', videoRouter);
app.get('/login', (req,res) => {
   setTimeout(() => res.send('Logged In'), 3000);
});

const PORT = 6767;
app.listen(PORT, () => {
    console.log('Server started on PORT:', PORT);
});