/*
const users = [
  { nome: 'Everton', techs: ["HTML", "CSS"] },
  { nome: 'Luan', techs: ["Javascript", "CSS"] },
  { nome: 'Carlos', techs: ["HTML", "Node.JS"] }
]

users.forEach(({ nome, techs }) => {
  console.log(techs.includes('CSS') ? `O ${nome} trabalha com ${techs.join(', ')}` : `O ${nome} não trabalha com CSS`);
});

*/

function getHigherTransactionByType(){
  const transactions =  user.transactions.reduce( (accumulator, transaction, index, array) => {
    
 
    switch(transaction.type)
    {
      case "debit":
        accumulator.outcome += transaction.value;
        break;
      case "credit":
        accumulator.income += transaction.value;
        break;
    }
    return accumulator;
  },
  {
    income: 0,
    outcome: 0, 
    balance: 0, 
  }
  );

  transactions.balance = transactions.income - transactions.outcome;
  return transactions;

}

const user = {
  name: 'Maria',
  transactions: []
}


user.transactions.push({
  type: 'credit',
  value: 20.5
});

user.transactions.push({
  type: 'debit',
  value: 10.5
});

response = getHigherTransactionByType()
console.log(response)