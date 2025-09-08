import { useState } from "react";
const numbers = [1, 5, 10, 15, 20];
const arrNum = numbers.map((n) => n * 10);
console.log(arrNum);

const names = ["Alice", "Bob", "Charlie", "Diana"];
const arrObjNames = names.map((name) => {
  return { name, length: name.length };
});
console.log(arrObjNames);

const products = [
  { name: "Laptop", price: 1000 },
  { name: "Mouse", price: 50 },
  { name: "Keyboard", price: 80 },
];

const productsWithFinalPrice = products.map((product) => {
  const salePrice = product.price * 0.85;
  return {
    ...product,
    finalPrice: salePrice,
  };
});
console.log(productsWithFinalPrice);

const employees = [
  { name: "Alice", salary: 50000, experience: 3 },
  { name: "Bob", salary: 60000, experience: 5 },
  { name: "Charlie", salary: 45000, experience: 2 },
];

const employeesWithTotal = employees.map((employee) => {
  const { salary, experience } = employee;
  const bonus = salary * 0.05;
  const total = salary + experience * bonus;
  return {
    ...employee,
    totalSalary: total,
  };
});

console.log(employeesWithTotal);

function App() {
  return <></>;
}

export default App;
