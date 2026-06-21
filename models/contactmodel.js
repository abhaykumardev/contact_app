const mongoose = require('mongoose');

const conatctschema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name']
    },
    email: {
        type: String,
        required: [true, 'Please add an email']
    },
    phone: {
        type: String,
        required: [true, 'Please add a phone number']
    }
},
{
  timestamps: true,
}
);

const Contact = mongoose.model('Contact', conatctschema);

module.exports = Contact; 