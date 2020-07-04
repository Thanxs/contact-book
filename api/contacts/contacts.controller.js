const response = require("../response");
const ContactsModel = require("./contacts.model");

exports.getContacts = async (req, res, next) => {
  try {
    const user_id = req.user._id;
    const contacts = await ContactsModel.find({ user: user_id }).lean().exec();
    response(res, contacts);
  } catch (e) {
    next(e);
  }
};

exports.addContact = async (req, res, next) => {
  try {
    const user_id = req.user._id;
    const contact = await ContactsModel.create({ ...req.body, user: user_id });
    response(res, contact);
  } catch (e) {
    next(e);
  }
};

exports.deleteContact = async(req, res, next) => {
  try {
    const contact_id = req.params.id;
    const contact = await ContactsModel.findByIdAndDelete(contact_id, function (err, docs) { 
      if (err) { 
          console.log(err) 
      } 
      else { 
          console.log(`Deleted: ${docs}`); 
      }
  }).exec(); 

  response(res, contact);
  } catch (e) {
    next(e);
  }
}