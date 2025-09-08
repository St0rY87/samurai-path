import { useState } from "react";
const numbers = [1, 5, 10, 15, 20];
const arrNum = numbers.map((n) => n * 10);
console.log(arrNum);

const names = ["Alice", "Bob", "Charlie", "Diana"];
const arrObjNames = names.map((name) => {
  return { name, length: name.length };
});
console.log(arrObjNames);

function App() {
  return <></>;
}

export default App;
