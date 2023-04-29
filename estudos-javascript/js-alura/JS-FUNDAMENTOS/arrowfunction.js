const apresentarArrow = nome => `meu nome é ${nome}`
const soma = (num1,num2) => num1 + num2;

const somaNumerosPequenos = (num1, num2) => {
    if (num1 > 10 || num2 > 10){
        return "somente números de 1 a 9"
    } else {
        return num1 + num2;
    }
}

//const num = 10;

if (num !== null) {
 console.log(`o número é ${num}`);
}

if (num) {
    console.log(`o número é ${num}`);
   }

   function verificaNumero(numero) {
    if (numero > 10) {
         return 'número maior que 10';
    } else {
        return 'número não é maior que 10';
    }
}

console.log(verificaNumero(9)) //número não é maior que 10

const num = 15;

if (num >= 0 && num <= 10) {
  console.log('número entre zero e dez');
} else if (num > 10 && num <= 20) {
  console.log('número entre dez e vinte');
} else if (num > 20 && num <= 30) {
  console.log('número entre vinte e trinta');
} else {
  console.log('outro número');
}
