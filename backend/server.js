const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const contactDataRouter = require('./routes/ContactDataRoute.js');

dotenv.config();

const server = express();
server.use(express.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

mongoose.connect(process.env.MONGODB_URL, () => {
   console.log('Connected to Mongo DB Successfully!!');
})

server.use('/contactdata', contactDataRouter);

router.post('/contactform', (req, res) => {
    const contactData = new ContactData({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.email,
    });
});

server.listen(3000, () => {
   console.log('Server listening on 3000');
})


module.exports = router;