//q1:

const greetPeople = (people) => {
  let lines = [];
  for (const person of people) {
    lines.push(`Hello, ${person}!`);
  }
  return lines;
};
console.log("Ex1:", greetPeople(["Danuja", "Gia", "Nirja"]).join(" | "));

//q2:
const capitalize = (str = "") => {
  if (typeof str !== "string") str = String(str ?? "");
  const [first = "", ...rest] = str;
  return first ? `${first.toUpperCase()}${rest.join("")}` : "";
};

console.log("Ex2:", capitalize("hello world"));

//q3:
const colors = ["red", "green", "blue", "teal", "magenta"];
const capitalizedColors = colors.map(capitalize);

console.log("Ex3:", capitalizedColors);

//q4:
const filterTwentyOrMore = (arr = []) => arr.filter((n) => Number(n) >= 20);

console.log("Ex4:", filterTwentyOrMore([3, 12, 20, 21, 7, 50, 19]));

//q5:
const sum = (arr = []) => arr.reduce((acc, n) => acc + Number(n), 0);
const product = (arr = []) => arr.reduce((acc, n) => acc * Number(n), 1);

const nums = [1, 2, 3, 4];
console.log("Ex5 sum:", sum(nums));
console.log("Ex5 product:", product(nums));

//q6:
class Car {
  constructor(model, year) {
    this.model = model;
    this.year = year;
  }
  info() {
    return `${this.model} (${this.year})`;
  }
}

class Sedan extends Car {
  constructor(model, year, balance = 0) {
    super(model, year);
    this.balance = Number(balance) || 0;
  }
  addPayment(amount) {
    this.balance += Number(amount) || 0;
  }
  getBalance() {
    return this.balance;
  }
  info() {
    return `${super.info()} — Balance: $${this.balance.toFixed(2)}`;
  }
}

const mySedan = new Sedan("Civic", 2022, 1500);
mySedan.addPayment(250);
console.log("Ex6:", mySedan.info());