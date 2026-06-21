const express = require('express');
const router = express.Router();
const {getContacts, createContact, getContactById, updateContactById, deleteContactById} = require('../controllers/contactcontroller');

// Define routes for contacts
router.route('/').get(getContacts);

router.route('/').post(createContact);

router.route('/:id').get(getContactById);

router.route('/:id').put(updateContactById);

router.route('/:id').delete(deleteContactById);


module.exports = router; 