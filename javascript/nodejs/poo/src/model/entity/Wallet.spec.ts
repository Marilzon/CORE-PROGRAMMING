import { Wallet } from "./Wallet";
describe("Testing functions of Wallet", () => {
  test("Should be create a Wallet with a default value", () => {
    const account = new Wallet("0000-0", "00000-0");
    expect(account.agency).toBe("0000-0");
    expect(account.account).toBe("00000-0");
  });

  test("Should be create a Wallet with a custom agency and account value", () => {
    const account = new Wallet("1234-5", "12345-6");
    expect(account.agency).toBe("1234-5");
    expect(account.account).toBe("12345-6");
  });

  test("Testing amount of new Wallet", () => {
    const wallet = new Wallet("1234-5", "12345-6");
    expect(wallet.getAmount()).toBe(0);
  });

  test("Testing deposit method", () => {
    const wallet = new Wallet("1234-5", "12345-6");
    wallet.deposit(50);
    wallet.deposit(100);
    wallet.deposit(200);
    expect(wallet.getAmount()).toBe(350);
  });

  test("Testing withdraw method", () => {
    const wallet = new Wallet("1234-5", "12345-6");
    wallet.deposit(50);
    wallet.deposit(100.25);
    wallet.deposit(200);
    wallet.withdraw(200);
    expect(wallet.getAmount().toFixed(2)).toBe('150.25');
  });
});
