const { Router } = require("express");
const router = Router();

const { validate } = require("../middlewares");
const { getContacts, addContact, deleteContact } = require("./contacts.controller");
const { addContactValidation } = require("./contacts.validation");

router.get("/", getContacts);

router.post("/", validate(addContactValidation), addContact);

router.delete("/:id", deleteContact);

module.exports = router;