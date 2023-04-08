import * as fs from "fs";
import { join } from "path";
import Chance from "chance";

const chance = new Chance();

interface Contact {
  name: string;
  phone: string;
  email: string;
  birth: Date;
}

const contacts: Contact[] = [];
let rowsCSV = "";
const numContacts = 100;

for (let i = 0; i < numContacts; i++) {
  const contact: Contact = {
    name: chance.name(),
    phone: chance.phone(),
    email: chance.email(),
    birth: chance.birthday(),
  };
  contacts.push(contact);

  const row = `${contact.name}, ${contact.phone}, ${contact.email}`;
  rowsCSV += row + "\n";
}

const dataDir = join(__dirname, "data");
const csvPath = join(dataDir, "contacts.csv");
fs.writeFileSync(csvPath, rowsCSV);

const contactsJson = JSON.stringify(contacts);
const contactsFilePath = join(dataDir, "contacts.json");
fs.writeFileSync(contactsFilePath, contactsJson);

console.log("files created");
