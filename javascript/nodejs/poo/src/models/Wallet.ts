export class Wallet {
  private _amount: number;
  private _account: string;
  private _agency: string;

  constructor(agency: string, account: string) {
    this._amount = 0;
    this._agency = this._validateAgency(agency) ? agency : "0000-0";
    this._account = this._validateAccount(account) ? account : "00000-0";
  }

  get agency() {
    return this._agency;
  }

  get account() {
    return this._account;
  }

  getAmount(): number {
    return this._amount;
  }

  set agency(value: string) {
    const regex = /^\d{4}-\d{1}$/;
    if (this._validateAgency(value)) {
      this._agency = value;
    } else {
      console.log("Formato de agência invalida!");
    }
  }

  set account(value: string) {
    if (this._validateAccount(value)) {
      this._account = value;
    } else {
      console.log("Formato de conta invalida!");
    }
  }

  deposit(value: number): boolean {
    if (value > 0) {
      this._amount += value;
      return true;
    }

    return false;
  }

  withdraw(value: number): boolean {
    if (value > 0 && value <= this._amount) {
      this._amount -= value;
      return true;
    }

    return false;
  }

  private _validateAgency(agency: string): boolean {
    const regex = /^\d{4}-\d{1}$/;
    if (regex.test(agency)) {
      this._agency = agency;
      return true;
    }
    return false;
  }

  private _validateAccount(account: string): boolean {
    const regex = /^\d{5}-\d{1}$/;
    if (regex.test(account)) {
      this._account = account;
      return true;
    }
    return false;
  }
}
