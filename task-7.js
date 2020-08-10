/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
  //   ID: 0,
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 0,
  id: 0,

  // История транзакций
  transactions: [],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {
    return {
      id: (this.id += 1),
      amount,
      type,
    };
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    this.balance += amount;
    this.transactions.push(this.createTransaction(amount, Transaction.DEPOSIT));
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    if (this.balance < amount) {
      alert("на вашем счету нет бабла");
    } else {
      this.balance -= amount;
      this.transactions.push(
        this.createTransaction(amount, Transaction.WITHDRAW)
      );
    }
  },
  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {},

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    for (let el of this.transactions) {
      if (el.id === id) return el;
    }
    alert("Такой транзакции нет");
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    let total = 0;
    for (let el of this.transactions) {
      if (el.type === type) {
        total += el.amount;
      }
    }
    return total;
  },
};

// console.log(account.getBalance);
// console.log(account.createTransaction(700, Transaction.WITHDRAW));
// console.log(account.transaction);
account.deposit(3850);
console.log(account.getBalance());
console.log(account.transactions);
account.deposit(4200);
console.log(account.transactions);
console.log(account.getBalance());
account.withdraw(800);
console.log(account.transactions);
console.log(account.getBalance());
console.log(account.transactions);
console.log(account.getTransactionDetails(3));
console.log(account.getTransactionDetails(2));
console.log(account.getTransactionDetails(1));
console.log(account.getTransactionTotal("deposit"));
console.log(account.getTransactionTotal("withdraw"));
