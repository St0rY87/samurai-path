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

function App() {
  return <></>;
}

export default App;
