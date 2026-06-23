const express = require('express');
const router = express.Router();
const {getContacts, createContact, getContactById, updateContactById, deleteContactById} = require('../controllers/contactcontroller');
const validateToken = require('../middleware/validatetokenhandler');


// Define routes for contacts
router.route('/').get(validateToken, getContacts);

router.route('/').post(validateToken, createContact);

router.route('/:id').get(validateToken, getContactById);

router.route('/:id').put(validateToken, updateContactById);

router.route('/:id').delete(validateToken,    deleteContactById);


module.exports = router; 