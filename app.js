const numbers = [1, 2, 3];
console.log(numbers);

const moreNumbers = new Array();
console.log(moreNumbers);

const moreArray = new Array("hi", "welcome");
console.log(moreArray);

const oneNumber = new Array(4);
console.log(oneNumber);

const newNumbers = Array.of(4, 5);
console.log(newNumbers);

const actArray = Array.from("Hii!");
console.log(actArray);

const listItems = document.querySelectorAll("li");
console.log(listItems);

const realListItems = Array.from(listItems);
console.log(realListItems);

const analyticData = [
  [1, 2.3],
  [3.4, -4.2],
];
for (const data of analyticData) {
  for (const dataPoint of data) {
    console.log(dataPoint);
  }
}

const hobbies1 = ["Sports", "Cooking"];
hobbies1.push("Reading");
hobbies1.unshift("Coding");
hobbies1.pop();
hobbies1.shift();
console.log(hobbies1);

hobbies1[1] = "Coding";
// hobbies1[6] = "Reading";
console.log(hobbies1);

hobbies1.splice(1, 0, "Running");
console.log(hobbies1);

hobbies1.splice(0, 1, "Good Food");
console.log(hobbies1);

hobbies1.splice(1, 3, "Games");
console.log(hobbies1);

hobbies1.splice(-1, 0, "Camping");
console.log(hobbies1);

hobbies1.splice(-1, 1, "Running");
console.log(hobbies1);

const testResults = [1, 2.3, 66.2, 12.7, -25, 10];
// const storedResults = testResults;
// const storedResults = testResults.slice(0, 2);
// const storedResults = testResults.slice(-4, -1);
const storedResults = testResults.slice(2);

testResults.push(5.7);
console.log(storedResults, testResults);

const moreTests = [2, -3, 1.25, 77, 3.69];
const moreStored = moreTests.concat([2.5, 99.5]);
console.log(moreTests, moreStored);

const indexArray = [5, 3, 9, 7, 3, 2];
console.log(indexArray.indexOf(3));
console.log(indexArray.lastIndexOf(3));

const personData = [{ name: "Bob" }, { name: "Max" }, { name: "Lycan" }];
const lycan = personData.find((person, idx, fullPerson) => {
  return person.name === "Lycan";
});
lycan.name = "Marnus";
console.log(personData);
console.log(lycan);

const maxIndex = personData.findIndex((person, idx, fullPerson) => {
  return person.name === "Max";
});
console.log(maxIndex);

const includedNumbers = [2, 9, 3.5, 14, 72];
console.log(includedNumbers.includes(2));
console.log(includedNumbers.includes(8));
console.log(includedNumbers.indexOf(5) !== -1);

const prices = [10.5, 25.1, 30.25, 7];
const tax = 2.5;
const taxAdjustedPrice = [];

// for (const price of prices) {
//   taxAdjustedPrice.push(price * (1 + tax));
// }

prices.forEach((price, idx, prices) => {
  const priceObj = { index: idx, taxAdjPrice: price * (1 + tax) };
  taxAdjustedPrice.push(priceObj);
});
console.log(taxAdjustedPrice);

const newPrices = [1, 5, 4, 8.25, 7.95];
const newTax = 1.25;

const newTaxAdj = newPrices.map((newPrice, newIdx, allNewPrices) => {
  const priceObj = { index: newIdx, newTaxAdjprices: newPrice * (1 + newTax) };
  return priceObj;
});
console.log(newPrices, newTaxAdj);

const sortPrice = [10.25, 3.95, 6.3, 5.26];
const priceSorted = sortPrice.sort();
console.log(priceSorted);

const sortPrices = [10.25, 3.95, 6.3, 5.26];
const pricesSorted = sortPrice.sort((a, b) => {
  if (a > b) {
    return 1;
  } else if (a === b) {
    return 0;
  } else {
    return -1;
  }
});
console.log(pricesSorted);
console.log(pricesSorted.reverse());

// const filteredArray = sortPrice.filter((price, index, prices) => {
//   return price > 6;
// });
const filteredArray = sortPrice.filter((price) => price > 6);
console.log(filteredArray);

const amountPrice = [10.25, 3.95, 6.13, 8, 5.1];
// let sum = 0;
// amountPrice.forEach((price) => {
//   sum += price;
// });
// console.log(sum);
const sum = amountPrice.reduce((prevValue, curValue) => prevValue + curValue);
console.log(sum);

const data = "new york;10.25;latitude-200.95";
const transformedData = data.split(";");
console.log(transformedData);

const nameFragments = ["Shiv", "Mehra", "Decoy"];
const nameData = nameFragments.join(" ");
console.log(nameData);

const copiedNameFragments = [...nameFragments];
nameFragments.push("Mr.");
console.log(copiedNameFragments);
console.log(nameFragments);

const minNum = [1, 2, 3, 4, 5];
const spreadMin = Math.min(...minNum);
console.log(spreadMin);

const person = [
  { name: "Max", age: 32 },
  { name: "Manuel", age: 25 },
];
// const copiedPerson = [...person];
const copiedPerson = [
  ...person.map((persons) => ({ name: persons.name, age: persons.age })),
];
person.push({ name: "Anna", age: 21 });
person[0].age = 28;
console.log(person, copiedPerson);

const desName = ["Max", "Ben", "Chalie"];
const [firName, secName, triName] = desName;
console.log(firName, secName, triName);

const desName2 = ["Max", "Ben", "Chalie", "Anna", "Mr.", 30];
const [firName2, secName2, ...otherInfo] = desName2;
console.log(firName2, secName2, otherInfo);
