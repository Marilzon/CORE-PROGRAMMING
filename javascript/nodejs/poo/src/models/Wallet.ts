export class Wallet {
  private _amount: number;
  private _account: string;
  private _agency: string;

  constructor() {
    this._amount = 0;
    this._account = "00000-0";
    this._agency = "0000-0";
  }

  get account() {
    return this._account;
  }

  set account(value: string) {
    const regex = /^\d{5}-\d{1}$/;
    if (regex.test(value)) {
      this._account = value;
    } else {
      console.log("Formato de conta invalida!");
    }
  }

  get agency() {
    return this._agency;
  }

  set agency(value: string) {
    const regex = /^\d{4}-\d{1}$/;
    if (regex.test(value)) {
      this._agency = value;
    } else {
      console.log("Formato de agência invalida!");
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

  getAmount(): number {
    return this._amount;
  }
}
