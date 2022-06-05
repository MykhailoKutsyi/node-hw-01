const fs = require('fs').promises;
const path = require('path');
const crypto = require('crypto');
const contactsPath = './db/contacts.json';

// TODO: задокументировать каждую функцию
module.exports = {
  listContacts: async function () {
    const contacts = JSON.parse(await fs.readFile(contactsPath));
    return contacts;
  },

  getContactById: async function (contactId) {
    const contacts = await this.listContacts();
    const contact = contacts.find(({ id }) => id === contactId.toString());
    if (!contact) return `Don't find contact with contactId = ${contactId} `;
    return contact;
  },

  removeContact: async function (contactId) {
    const contacts = await this.listContacts();
    // console.log(contacts);
    const updatedContacts = contacts.filter(
      ({ id }) => id !== contactId.toString()
    );
    // console.log(updatedContacts);
    await fs.writeFile(contactsPath, JSON.stringify(updatedContacts));
  },

  addContact: async function ({ name, email, phone }) {
    const contacts = await this.listContacts();
    // console.log(contacts);
    // const id = await fs.readFile("uuid");
    const id = crypto.randomUUID();
    console.log(id);
    const updatedContacts = [...contacts, { id, name, email, phone }];
    console.log(updatedContacts);
    await fs.writeFile(contactsPath, JSON.stringify(updatedContacts));
    return null;
  },
};
