class Account {
  static accounts = {}

  constructor(firstName, lastName, accountNumber, phoneNumber) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.accountNumber = accountNumber;
      this.phoneNumber = phoneNumber;
      this.balance = 0;
      this.transactions = [];
      Account.accounts[accountNumber] = this;
  }
  
  getBalance(accountNumber) {
    let account = Account.accounts[accountNumber.toString()];
    return account.balance;
  }
  
  getAccountDetails(accountNumber) {
    let account = Account.accounts[accountNumber.toString()];
    return {firstName: account.firstName, lastName: account.lastName, phoneNumber: account.phoneNumber}
  }
  
  changePhoneNumber(accountNumber, phoneNumber) {
    accountNumber = accountNumber.toString();
    let account = Account.accounts[accountNumber.toString()];
    account.phoneNumber = phoneNumber;
    Account.accounts[accountNumber] = account;
  }
  
  debit(accountNumber, amount) {
    accountNumber = accountNumber.toString();
    let account = Account.accounts[accountNumber.toString()];
    account.balance += amount;
    account.transactions.push({type: "debit", amount});
    Account.accounts[accountNumber] = account;
  }
  
  credit(accountNumber, amount) {
    accountNumber = accountNumber.toString();
    let account = Account.accounts[accountNumber.toString()];
    account.balance -= amount;
    account.transactions.push({type: "credit", amount});
    Account.accounts[accountNumber] = account;
  }
}

accountCsv = `First Name,Last Name,Account Number,Phone Number
Onome,Ehigiator,6152,08148975238
Adegoke,Akeem-omosanya,6972,07015181324
Bukola,Ehigiator,8467,07029300358
Olufunmi,Aremu,3976,08010170877
Ifeanyichukwu,Ekwueme,8965,07021118253
Isioma,Mustapha,8555,09164393835
Ayebatari,Joshua,8657,09050143877
Nnamdi,Olawale,3587,07021899665
Lola,Abosede,6807,07062943330
Emeka,Oyelude,6701,08190576207`

accountsLines = accountCsv.trim().split("\n");

for (let i = 1; i < accountsLines.length; i++) {
  const fields = accountsLines[i].split(",");
  new Account(fields[0], fields[1], fields[2], fields[3]);
}

transactionCsv = `SN,Account Number,Amount,Credit/Debit
1,6152,2008,Credit
2,6152,1173,Credit
3,6152,2994,Credit
4,6152,2147,Debit
5,6152,4989,Debit
6,6972,4344,Credit
7,6972,4545,Credit
8,6972,4021,Credit
9,6972,4991,Debit
10,6972,2038,Credit
11,8467,2243,Credit
12,8467,3216,Credit
13,8467,2417,Debit
14,8467,2106,Credit
15,8467,4533,Debit
16,3976,4616,Credit
17,3976,4941,Credit
18,3976,1439,Debit
19,3976,4082,Credit
20,3976,2022,Debit
21,8965,3248,Credit
22,8965,3921,Credit
23,8965,3309,Debit
24,8965,1880,Credit
25,8965,3936,Debit
26,8555,4511,Credit
27,8555,1902,Credit
28,8555,1097,Debit
29,8555,2007,Credit
30,8555,3289,Credit
31,8657,3530,Debit
32,8657,4565,Debit
33,8657,1669,Credit
34,8657,1054,Credit
35,8657,4723,Debit
36,3587,4673,Debit
37,3587,2722,Credit
38,3587,3554,Credit
39,3587,2891,Debit
40,3587,3590,Credit
41,6807,1711,Credit
42,6807,4020,Credit
43,6807,1594,Debit
44,6807,4692,Debit
45,6807,1774,Credit
46,6701,4629,Credit
47,6701,3602,Debit
48,6701,1010,Credit
49,6701,3596,Credit
50,6701,1632,Debit`


transactionsLines = transactionCsv.trim().split("\n");
for (let i = 1; i < transactionsLines.length; i++) {
  const fields = transactionsLines[i].split(",");
  if (fields[3] == "Debit") {
    Account.debit(fields[1], fields[2]);
  } else {
    Account.credit(fields[1], fields[2]);
  }
}



let account = Account.getAccountDetails(6807);

console.log(`The account details for account number ${accountNumber} is : ['First Name: ${account.firstName}', 'Last Name: ${account.lastName}', 'Phone Number: ${account.phoneNumber}']`)
