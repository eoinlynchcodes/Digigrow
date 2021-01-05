const mongoose = require('mongoose');

const contactDataSchema = new mongoose.Schema({
     name: { type: String, required: false },
     phone: { type: String,required: false },
     email: { type: String, required: false },
});

const ContactData = mongoose.model('ContactData', contactDataSchema);
export default ContactData;

