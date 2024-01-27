//@desc Get all contacts
//@route GET /api/contacts
//@access public
const getContacts = (req, res) => {
  res.status(200).json({ msg: "Get Contacts" });
};
//@desc Post create contacts
//@route Post /api/contacts
//@access public
const createContact = (req, res) => {
  console.log("The body param is:", req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields are mandatory !");
  }
  res.status(201).json({ msg: "Create Contact" });
};
//@desc Get get contact
//@route GET /api/contacts/1
//@access public
const getContact = (req, res) => {
  res.status(200).json({ msg: `get contact ${req.params.id}` });
};

//@desc PUT update contact
//@route PUT /api/contacts/1
//@access public
const updateContact = (req, res) => {
  res.status(200).json({ msg: `update contact ${req.params.id}` });
};

//@desc DELETE delete contact
//@route DELETE /api/contacts/1
//@access public
const deleteContact = (req, res) => {
  res.status(200).json({ msg: `delete contact ${req.params.id}` });
};

module.exports = {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
};
