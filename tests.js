console.log("Hello world");

let variable = "hello world";
function foo() {
  let variable_2 = "hello world from foo";
  console.log(variable);
}

// foo();

const num1 = 230;
const num2 = 40;
const num3 = 50;

function test(a, b, c) {
  let mayor;
  if (a > b) {
    mayor = a;
  } else {
    mayor = b;
  }

  if (c > mayor) {
    mayor = c;
  }
  console.log(mayor);
}

// test(num1, num2, num3);

function max(data) {
  let mayor = data[0];
  for (let i = 1; i < data.length; i++) {
    if (data[i] > mayor) {
      mayor = data[i];
    }
  }
  return mayor;
}

const numbersList = [14, 20, 3, 4, 50, 16, 27, 78, 9, 10];

// console.log(max(numbersList));
