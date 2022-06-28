function toReadable(number) {
  let result = "";
  const digits = ["one","two","three","four","five","six","seven","eight","nine"];
  const dozens = ["ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"];
  const t = ["twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];
  let num = number.toString();
  switch(num.length) {
    case 1:
      if(number === 0) result = "zero";
      else {
        result = digits[number - 1];
        console.log(result);
      }
      break;
    case 2:
      if(number >= 20 & number <= 99) {
        const firstDigit = parseInt(num[0]);
        const secondDigit = parseInt(num[1]);
        secondDigit === 0 ? result = t[firstDigit - 2] : result = t[firstDigit - 2] + ' ' + digits[secondDigit - 1];
      }
      if(number > 9 & number < 20) {
        const d = parseInt(num[1]);
        result = dozens[d];
      }
      break;
    case 3:
      let newResult = "";
      let word = 'hundred';
      const hundreds = Math.floor(number / 100);
      let secondDigit = num[1];
      let thirdDigit = num[2];
      const newNumber = parseInt(secondDigit + thirdDigit);
      secondDigit = parseInt(secondDigit);
      thirdDigit = parseInt(thirdDigit);
      if(newNumber >= 20 & newNumber <= 99) {
        thirdDigit === 0 ? newResult = t[secondDigit - 2] : newResult = t[secondDigit - 2] + ' ' + digits[thirdDigit - 1];
      }
      if(newNumber > 9 & newNumber < 20) {
        newResult = dozens[thirdDigit];
      }
      if(newNumber < 10 & newNumber > 0){
        newResult = digits[thirdDigit - 1];
      }
      newResult === "" ? result = digits[hundreds - 1] + ' ' + word : result = digits[hundreds - 1] + ' ' + word + ' ' + newResult;
      break;
  }

  return result;
}

toReadable(100);
