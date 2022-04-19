const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const PORT = 4003;
const app = express();
app.use(bodyParser.json());


app.use('/events', async (req, res)=>{
    const { type, data } = req.body;

    if ( type === 'CommentCreated') {
        console.log()
        const status = data.content.includes('orange') ?  'rejected' : 'approved' ;

        await axios.post('http://localhost:4005/events', {
            type: 'CommentModerated',
            data: {
                id: data.id,
                postId: data.postId,
                conent: data.conent,
                status
            }
        })
    }

    res.send({});
});




app.listen(PORT, () => { console.log(`Listening on port: ${PORT}`)});