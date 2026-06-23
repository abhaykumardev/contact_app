const asyncHandler = require('express-async-handler');
const contact = require("../models/contactmodel");
//@desc get all contacts
//@route GET /api/contacts
//@access private
const getContacts = asyncHandler(async (req, res) => {
  const contacts = await contact.find({ user_id: req.user.id });
  res.json(contacts );
});

//@desc create a new contact
//@route POST /api/contacts
//@access private
const createContact = asyncHandler(async (req, res) => {
  console.log(req.body); 
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    return res.status(400).json({ message: 'Please provide name, email, and phone' });
  }
  const newContact = await contact.create({ name, email, phone, user_id: req.user.id });
  res.status(201).json(newContact);
});

//@desc get a contact by ID
//@route GET /api/contacts/:id
//@access private
const getContactById = asyncHandler(async (req, res) => {
  const foundContact = await contact.findById(req.params.id);
  if (!foundContact) {
    return res.status(404).json({ message: 'Contact not found' });
  }
  res.json(foundContact);
});

//@desc update a contact by ID
//@route PUT /api/contacts/:id
//@access private
const updateContactById = asyncHandler(async (req, res) => {
  const foundContact = await contact.findById(req.params.id);
  if (!foundContact) {
    return res.status(404).json({ message: 'Contact not found' });
  }
  const updatedContact = await contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updatedContact);
});

//@desc delete a contact by ID
//@route DELETE /api/contacts/:id
//@access private
const deleteContactById = asyncHandler(async (req, res) => {
  const foundContact = await contact.findById(req.params.id);
  if (!foundContact) {
    return res.status(404).json({ message: 'Contact not found' });
  }
  await contact.findByIdAndDelete(req.params.id);
  res.json({ message: 'Contact deleted successfully' });
});

module.exports = {
  getContacts,
  createContact,
  getContactById,
  updateContactById,
  deleteContactById
};  