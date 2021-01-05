const express = require('express');
const ContactDataModel = require('../models/ContactDataModel');
const contactDataRouter = express.Router();

contactDataRouter.post('/', (req, res) => {
    const contactData = new ContactData({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.email,
    });
})

export default contactDataRouter;
