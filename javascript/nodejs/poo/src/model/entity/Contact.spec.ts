import { Contact } from "./Contacts";

describe("Testing a Contact model", () => {
  test("Should be a create new contact Object", () => {
    const contact = new Contact(
      "Marilzon",
      "+55 (14) 995566556",
      "maxmaril@hotmail.com",
      new Date("1992-05-13")
    );

    expect(contact.name).toBe("Marilzon");
    expect(contact.phone).toBe("+55 (14) 995566556");
    expect(contact.email).toBe("maxmaril@hotmail.com");
    expect(contact.birth).toStrictEqual(new Date("1992-05-13"));
  });
});
