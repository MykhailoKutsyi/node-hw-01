console.log("bob");
const contacts = require("./contacts");
// console.log(contacts);

contacts.listContacts();
// console.log(typeof contacts.bar);
console.log("bob");
// contacts.addContact({ name: "Bob", email: "1@1.com", phone: "" });

async function list() {
  return console.log(await contacts.listContacts());
}
async function get(id) {
  return console.log(await contacts.getContactById(id));
}
async function remove(id) {
  return contacts.removeContact(id);
}
async function addContact(data) {
  return contacts.addContact(data);
}
// list();
// get(7);
// remove(8);
// addContact({
//   name: "Mango11",
//   email: "1mango@gmail.com1",
//   phone: "3122 - 22 - 22",
// });
