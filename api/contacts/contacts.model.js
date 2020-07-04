const { Schema, model } = require("mongoose");
const UsersModel = model("UsersModel");

const ContactsSchema = new Schema(
  {
    first_name: { type: String, trim: true },
    middle_name: { type: String, trim: true },
    last_name: { type: String, trim: true },
    email: { type: String, trim: true },
    phone: { type: Number, required: true },
    position: { type: String, trim: true },
    additional: { type: String, trim: true },
    telegram: { type: String, trim: true },
    instagram: { type: String, trim: true },
    user: { type: Schema.Types.ObjectId, ref: "UsersModel", required: true },
    userRole: { type: String },
  },
  {
    collection: "contacts",
    timestamps: true,
  }
);

ContactsSchema.post("validate", async function (doc, next) {
  const { role } = await UsersModel.findOne({ _id: doc.user })
    .select("role")
    .lean()
    .exec();
  this.userRole = role;

  next();
});

module.exports = model("ContactModel", ContactsSchema);
