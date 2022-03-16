const accounts = []

class Account{
    constructor(name, rut, balance) {
      this.name = name;
      this.rut = rut; 
      this.balance = balance;
      this.active = true; 
      this.accountNumber = rut;
    }

    deposit(amount) {
        this.balance += amount;
    }

    retiro(amount) {
        if(this.balance < amount ) {
            console.log("Saldo Insuficiente")
        }
        else {
        this.balance -= amount;
        }
    }
}

export default Account;