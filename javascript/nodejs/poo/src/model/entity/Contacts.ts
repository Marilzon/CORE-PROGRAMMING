export class Contact {
  private _name: string;
  private _phone: string;
  private _email: string;
  private _birth: Date;

  constructor(name: string, phone: string, email: string, birth: Date) {
    this.name = name;
    this.phone = phone;
    this.email = email;
    this.birth = birth;
  }

  get name(): string {
    return this._name;
  }

  set name(name: string) {
    if (name && name.length > 0) {
      this._name = name;
    } else {
      console.log("Invalid name!");
    }
  }

  get phone(): string {
    return this._phone;
  }

  set phone(phone: string) {
    const regex = /^\+?\d{0,2}\s?\(?\d{2}\)?\s?\d{4,5}[-\.\s]?\d{4}$/;
    const validator = new RegExp(regex);
    if (phone && validator.test(phone)) {
      this._phone = phone;
    } else {
      console.log("Invalid phone!");
    }
  }

  get email(): string {
    return this._email;
  }

  set email(email: string) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const validator = new RegExp(regex);

    if (email && validator.test(email)) {
      this._email = email;
    } else {
      console.log("Invalid E-Mail!");
    }
  }

  get birth(): Date {
    return this._birth;
  }

  set birth(birth: Date) {
    if (birth && birth < new Date()) {
      this._birth = birth;
    } else {
      console.log("Invalid birth date!");
    }
  }
}
