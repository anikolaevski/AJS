function showBalance (balance) {
  const valTen = balance % 10;
  const valTeen = balance % 100;
  let textVal = 'баллов';
  if(!(valTeen >= 11 && valTeen <= 19)) {
    switch(valTen) {
      case 1: 
        textVal = 'балл';
        break;
      case 2: 
        textVal = 'балла';
        break;
      case 3: 
        textVal = 'балла';
        break;
      case 4: 
        textVal = 'балла';
        break;
    }
  }
  return `Ваш баланс: ${balance} ${textVal}`;
}

console.log('Task#2');
for (let val of [523, 6000, 5001, 5013, 9999]) {
  console.log(`${showBalance(val)}`);
};

