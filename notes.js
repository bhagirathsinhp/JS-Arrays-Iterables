// ARRAYS & ITERABLES:



// 1. What are "Iterables" & "Array-Like Objects"...

/*
Iterables:

Technical Definition-
Objects that implement the "iterable" protocol and have an @@iterator method (i.e Symbol.iterator)

Symbols are special type of values in JS, we will dive into them later.

Human Definition-
Objects where we can use the for-of loop.

Imp-
Not every iterable in JS is an array! Other iterables are (for eg) : NodeList, String, Map, Set...

*/


// Iterables and Array-like are both official terms in JS...


/*
Array-like Objects:

Technical Definition-
Objects that have a length property and use indexes to access items.

Human Definition-
Same techinical definition..

Imp-
Not every array-like object is an array! Other array-likes are (for eg): NodeList, String..
Real arrays have bunch of things / methods that do not exist within the array-like objects.

*/


------------------------------------------------------------------------------------------------------


// 2. Creating ARRAYS...

// If we wanna create an array, we use [] - but there are various different ways to create an array.

// These different methods creates arrays based on the data that we pass.

// We have an empty HTML page.

// We can create an array of numbers-
const numbers = [1,2,3];
console.log(numbers);
// Within the console, we can see the numbers and it's length - Array(3) [ 1, 2, 3 ]

// Other method of creating an array...

const moreNumbers = new Array();
console.log(moreNumbers)
// THis uses a constructor function.
// [] - this is what it means when we type new Array().
// We pass in some parameters within it..

const moreNumbers = new Array("hi",'welcome');
console.log(moreNumbers);
// We can pass as many as parameters we like inside it.
// We can see the parameters as array in the console...

// With this new array, problem starts when we pass numbers...
// If we pass 2 numbers as parameters, it won't be any problem here but if we pass just a single number in this new Array(), for eg..

const oneNumber = new Array(4);
console.log(oneNumber);
// Array(4) [ <4 empty slots> ] - This is shown in the console.

// Here when we pass a single number in this type of array, it will be interpreted as the length of to-be created array and an empty array of that length will be created instead of an array with the inserted number.

// This is essentially an empty array with a fixed size - a fixed length...

// We won't need this kind of array often.

// Here we can omit the new word from the Array..

const twoNumber = Array(4,5)
// This will work as same as the new Array, even the single number - length interpretation works the same with this..

// SQUARE BRACKETS ARE BETTER REGARDING PERFORMANCE PERSPECTIVE...

// Another way of creating array : Array.of()
// This is slower on performance than the [].
// This works same as []..
// We learn it cause we might encounter in other code snippets...
const newNumbers = Array.of(4, 5);
console.log(newNumbers);


// More helpful methods on creating arrays:::

// Using Special method - Array.from()
// Here if we pass - Array.from(1,3) - This would bring error.

// Instead this function works and allows us to take an Iterable or an Array-like Object and convert it into an actual Array...
// Let's pass a string.

const actArray = Array.from('Hii!');
console.log(actArray);

// This would show - Array(4) [ "H", "i", "i", "!" ]
// This can be useful when we have some string we want to split..

// Let's do an example of this -
// We create 3 list items in the HTML.
// Then with DOM we select those li.

const listItems = document.querySelectorAll('li');
console.log(listItems);
// This will show a NodeList within the console.
// NodeList is an Array-like object.
// To convert this into real array -

const realListItems = Array.from(listItems);
console.log(realListItems);
// Through this we can use these objects with real array functions..


-------------------------------------------------------------------------------------------------


// 3. Which Data can we store in Array?

// We can store numbers - [1,2,3,5];
// We can store strings - ['hi', 'Max'];
// We can store objects - [{moredetails: []}] - We can store an array within the object.

// Arrays can be stored with same type:
const hobbies = ['Cooking', 'sports'];

// Arrays can be of mixed-types:
const mixedArray = [30, 'Max', {moreDetails: []}];

// Arrays can be multi-dimensional or nested:
const analyticData = [[1,2.3], [3.4,-4.2]];

// We could loop over such array.
for (const data of analyticData){
    // Main loop covers the outer array.
    // We can have nested loop...
    // This nested loop covers the number within the inner array.
    for (const dataPoint of data){
        console.log(dataPoint)
    }
}

// We can also have an array in an array in an array.
// We can also have these mixture of array in an array and still have an object within that array...
const analyticData = [[1,2.3], [3.4,-4.2], {moreData:'nope'}];
// But here the object is not iterable object, so the for-of loop will break.
// But if not using this kinda loop, we can use any combination of data within this array...

// Arrays are Index Based...


------------------------------------------------------------------------------------------------------------


// 4. push(), pop(), unshift(), shift() - Adding & Removing Elements

// We learned about push() - 
const hobbies1 = ['Sports', 'Cooking'];
hobbies1.push('Reading');
console.log(hobbies1);
// We can see Reading added to the hobbies1 array.
// push() addes the element to the end of the array.

// If we want to add an element in the beginning of the array -
hobbies1.unshift('Coding');
// Coding will be added as the first element here..

// Sometimes we want to remove elements - first or the last one...

hobbies1.pop();
// This will remove our last element - Reading will be removed..

// pop() returns the element it removed, here a string - which means we can store pop() in some variable or constant..
// unshift() & push() returnes a number, the new length of array.

hobbies1.shift();
// This removes the first element - Coding will be removed.

// shift() moves the elements to the left - so that the first elements moves out. 
// unshift() moves the elements to the right - so that the first element placed in it moves in. 
// All the index numbers are reassigned to the present elements...

// As shift() & unshift() moves all the elements inside of the array - they perform slower than the other two...


// Now what if we want to add and manipulate different areas of array - we use the INDEX numbers...

hobbies1[1] = 'Coding';
// This will change Reading to Coding...

// We will learn about splice() with which we can insert element in between 2 elements.

// But what if we want to add new element to a special place - 
hobbies1[6] = 'Reading';
// This will add element to the array.
// But the space left between 2 to 5 will be filled by empty slots...
// If we console.log these empty slots by using their index -
console.log(hobbies1[4]);
// We will see undefined there....


-------------------------------------------------------------------------------------------------------


// 5. The splice() Method...

// splice() - used to insert element in-between elements.
// Also used in deleting single or multiple elements within the array..

// This method is ONLY available on the Arrays and NOT on the iterables or array-like objects.
// That is why when we want to use this method on iterables and array-likes = we can convert them into Arrays with - Array.from();

// splice() - works with the amounts inserted inside it's ().

/* 

Simple Explanation:
For Eg-

hobbies1.splice(0, 0, 'Good Food') ===

Here the first 0 - is the number/index where we start from.
The second 0 - is the amount we want to delete (here it is 0 elements..)
The third - 'Good Food' is the element we want to insert at index 0 

*/
 
hobbies1.splice(1, 0, 'Running');
console.log(hobbies1);
// Running will be added between the Sports and Coding elements...

hobbies1.splice(0,1, 'Good Food')
console.log(hobbies1)
// This will delete the item at 0 index which is "Sports".
// And replace it as the first number start with 0 index...

// We can also delete multiple items...

hobbies1.splice(1, 3, "Games");
console.log(hobbies1);
// This will delete 3 elements after the index 1 - after "Good Food" - Then it will add "Games" to the array at 1...

// If we type - 
hobbies1.splice(0);
// This will clear all the elements from the array.
// Therefore we need to specify the delete count.
// But if we want to clear an array - we use this method.

// splice returns the deleted elements - so we can store them inside a variable or const...

// We can use negative index with it..
hobbies1.splice(-1, 0, "Camping");
console.log(hobbies1);
// This will add "Camping" before "Games".

// So - (negative) index works from the right to left / from LAST ELEMENT..
// If we try -2 = we will start from the 2nd last element... And so on...
// Let's try to remove something..

hobbies1.splice(-1, 1, 'Running');
console.log(hobbies1);
// This will remove "Games" & replace it with "Running"..
// Here too we cannot imply only single unit inside the ()


------------------------------------------------------------------------------------------------------


// 6. Selecting Ranges & Creating Copies with slice().....

// slice() is used to create brand new copies of an array..

const testResults = [1,2.3,66.2,12.7, -25, 10];
// We store this array into another variable...
const storedResults = testResults;

// Now the thing is that arrays are objects so they are reference values.. 
// Thus it will copy the pointer address..

// So if we push a new value inside testResults - it will reflect inside / point towards storedResults also...

testResults.push(5.7);
console.log(storedResults, testResults);
// This will display the same values...

// Here slice() can help us...
// We want it to return brand new array based on the old array.

const storedResults = testResults.slice();
// Here we called slice() so that we can store a copy of storedResults within testResults...

// So if we push something into testResults, it won't point back to the old array as testResults is a brand new array...


// slice() is also used for selecting ranges of an array...

// We can select single element by stating it's index.
// But what if we wanna select 2 elements at the same time... What if we wanna select the part of an array.

// We can use just slice() - it will give us the full array..
// We can also specify the start and end indexes of the part of array we wanna select.

// There are 3 types of selection with slice() -

// 1. testResults.slice(0, 2); -  This will create an array based on the storedResults with index 0 to 1 elements. Element of index 2 won't be there...
const storedResults = testResults.slice(0,2)
// We get Array [ 1, 2.3 ]

// 2. testResults.slice(-3, -1); - This will select the last-third element and go through to the last element. We must use both negatives... If we use one positive and other negative number we will get an empty array...
const storedResults = testResults.slice(-4, -1);
// We get Array(3) [ 66.2, 12.7, -25 ]
// Here too the last index number won't be selected..

// 3. testResults.slice(2); - This will select the elements after the index 2...
const storedResults = testResults.slice(2);
// This will return = Array(4) [ 66.2, 12.7, -25, 10 ]


--------------------------------------------------------------------------------------------


// 7. Adding Arrays to Arrays with concat()...

// concat() -
// Useful method for adding elements in array and returning a brand new array...
// concat() allows us to add elements at the end - same as push but there is a major difference.
// This creates a copy of the array.
// With concat() - it takes one or more arrays [] within ().
// This doesn't create nested arrays - push([]) creates nested arrays..
// concat([]) = will pull out all the elements of array within () and add them to the existing array while creating a brand new copy of it...
// Really useful when we have array data to be combined with existing array and creating something new..

const moreTests = [2,-3,1.25,77,3.69];
const moreStored = moreTests.concat([2.5,99.5]);
console.log(moreTests, moreStored)


-----------------------------------------------------------------------------------------------------


// 8. Retrieving Indexes with indexOf() /& lastIndexOf()....

// Works as the name suggest here = used in retriving INDEXES of the given array...

// We want to find out the index of an item within the array...
const indexArray = [5,3,9,7,3,2];
console.log(indexArray.indexOf(3));
// Here we can use two arguments - the second would be from where to start seaching the index as in if we passed (3,2) - this will start searching the element 3 from index no. 2.
// We can see the answer in console = 1

// But here we have two 3, index.of stops at finding the first element with the value it takes...

// To find the second 3 - We search from the right..
console.log(indexArray.lastIndexOf(3))
// It returns 4 within console..

// IMP - This methods only finds and returns PRIMITIVE VALUES and not reference value.
// So it cannot find an object within the array.

// If it doesn't find the value it takes - we see -1 returned in console. 
// It means it failed to find..

// We have other method to find the index of objects...


-------------------------------------------------------------------------------------------------


// 9. Finding Stuff: find() and findIndex()....

// Method to find reference values in arrays...

const personData = [{name: "Bob"}, {name: 'Max'}, {name: "Lycan"}];
// We want to find the object within the array...
// Let's take we want to find the name "Lycan".
// We use find() - It takes function as argument.
// We can also define a function elsewhere and call it inside find().
// JS will execute the function on every element of the array.
// We can use find() with every type of arrays - including numbers or strings. 

// The function takes 3 arguments: 
// First - It will always be single object of that array.
// Second - Will always be index of that single element.
// Third - It will be the full array..

// We expect this function to return true if it finds the given object element.
// We use return.
// We compare the value of what we wanna find.
// Here the data we want to access is = name: property.
// Multiple objects with the same value won't be accessible as the function will stop after the first hit...
// We don't use the other 2 arguments here - we won't need them in most cases.

const lycan = personData.find((person, idx, fullPerson) => {
    return person.name === 'Lycan'
});
console.log(lycan);

// IMP - This method copies the object and doesn't create new... So if we change the data within the array, that change will be reflected in the main array...

lycan.name = 'Marnus';
// We will see the name marnus within the personData.

// Now if we want to access the index -
// It takes the same function as the find() - only changes are the property name - findIndex() and the comparison value for Max...

const maxIndex = personData.findIndex((person, idx, fullPerson) => {
    return person.name === 'Max'
});
console.log(maxIndex);
// We see - 1 in console...


-----------------------------------------------------------------------------------------------------


// 10. .includes()

// This method is used on primitive values..
// It shows if the item inside the array is there - meaning the value passed inside () is there in the array or not.
// Then it will return true or false in console.
// indexOf() returns -1 as false value...

const includedNumbers = [2,9,3.5,14,72];
console.log(includedNumbers.includes(2));
console.log(includedNumbers.includes(8));

// This method is also same as we do with indexOf = 

console.log(includedNumbers.indexOf(5) !== -1);
// This will also return false...


------------------------------------------------------------------------------------------


// 11. Alternative to for Loops: The forEach() Method....

// Let's look at an example...

const prices = [10.50, 25.10, 30.25, 7];
const tax = 2.5;
const taxAdjustedPrice = [];

// We try our regular for/of loop
for (const price of prices) {
    taxAdjustedPrice.push(price * (1 + tax))
    // Here even if taxAdjustedPrice is a const we can push values within the empty array. We cannot change the array to a string later but we can push inside the array...
}
console.log(taxAdjustedPrice);

// Now if we want to get the index of the arrays we have, we cannot do that with for/of...

// We use forEach()

// Just like find(), this takes function as argument and that function takes upto 3 arguments...
// We can create a constant with access to index here...

prices.forEach((price, idx, prices) => {
    // Here prices as an argument won't coincide with the main const due to shadowing.

    const priceObj = {index: idx, taxAdjPrice: price * (1 + tax)}
    taxAdjustedPrice.push(priceObj)
})
console.log(taxAdjustedPrice);
// So we get the index of all the elements in the array along with the calculation of the tax..


--------------------------------------------------------------------------------------------


// 12. Transforming Data with map()...

// We transformed the data of the array on the above lecture.
// We turned it into an array of objects with taxes from an array of prices...
// With forEach() method we need to manage our new array where we pushed the data - the taxAdjustedPrices = [] array.

// Here's an shorter alternative.

const newPrices = [1,5,4,8.25,7.95];
const newTax = 1.25;

const newTaxAdj = newPrices.map((newPrice, newIdx, allNewPrices) => {
  const priceObj = { index: newIdx, newTaxAdjprices: newPrice * (1 + newTax) };
  return priceObj;
});

console.log(newPrices, newTaxAdj);

// In forEach we don't return anything. But here we have to return something..
// Here we return priceObj. 
// This will replicate all the elements in the existing array on which we called map() with the adjusted elements..
// It will return a brand new array...


------------------------------------------------------------------------------------------------------------


// 13. sort()ing and revert()ing....

// These are 2 other ways of transforming an array...

// sort():
// This helps us sort our array in a better way.
// Sort by default, convert an array to string first and then sorts it with the logic of strings... For eg..
const sortPrice = [10.25,3.95,6.3,5.26];
const priceSorted = sortPrice.sort();
console.log(priceSorted);
// Here we can see the price is sorted = [ 10.25, 3.95, 5.26, 6.3 ];
// As this is just default sorting and done by first converting to strings - In strings logic, only the first character is compared by default hence 1<3 in comparison to 10.25 and 3.95

// We can pass function within sort().
// This function takes 2 parameters.
// The function compared the pair of elements within the array. We have to return the value regarding the pair of elements it is comparing...

const sortPrice = [10.25,3.95,6.3,5.26];
const priceSorted = sortPrice.sort((a,b) => {
    if(a > b){
        return 1;
    }
    else if (a === b){
        return 0;
    }
    else{
        return -1;
    }
});
// With this, we can see the price is sorted = [ 3.95, 5.26, 6.3, 10.25 ]


// The other method is reverse()...
// We can't pass any arguments in it, it simply reverses the order of the array.


----------------------------------------------------------------------------------------


// 14. Filtering Arrays with filter()....

// It allows to filter the elements in the array..
// If we want to reduce the amount of elements inside arrays based on some filter, we use this function...
// Let's look at the example which shows to filter numbers which are greater than a certain number...

const filteredArray = sortPrice.filter((price, index, prices) => {
    return price > 6;
});
// With this function, items greater than 6 will be kept others would be dropped.
// filter() creates a new array.

console.log(filteredArray);


----------------------------------------------------------------------------------------------


// 15. Where Arrow Functions Shine!....

// With above example of filter and the arrow function basics we learned few sections ago, we can do this...

const filteredArray = sortPrice.filter(price => price > 6);
// Here - we need only price argument so we took others out.
// We know about arrow functions and the single argument structure of the function.
// Here by removing return, we still get the work of return done, as arrow function won't need this in these kinds of syntax...


------------------------------------------------------------------------------------


// 16. The reduce() Method - IMPORTANT....

// This method is really useful when combining whole array into a single value...

// reduce() method can reduce an array of numbers into a sum of numbers..
// We can reduce any array into any value we need..

// We can use forEach or for-of to combine arrays but this is a more efficient method...
const amountPrice = [10.25,3.95,6.13,8,5.10];
let sum = 0;
amountPrice.forEach((price) => {
    sum += price;
});
console.log(sum);
// We get the answer. Let's try the reduce() method....

// There are some steps to understand this method..
// The reduce() function take some arguments -
// previous value, current value, current Index(if we want to access), original array - prices for example.

// IMPORTANT = As we know that the methods we learn which takes functions, those functions are just parameters to those methods - so here we have another parameter.
// The second value we pass here is the initial value with which we wanna start. 
// Here as we want to get the sum of all - we start with 0...

const sum = amountPrice.reduce((prevValue, curValue, curIndex, prices) => {
    return prevValue + curValue
}, 0);

// Here the previous value starts from initial 0 and then adds up to 1 value, which then becomes initial (previous) value - which adds to next (current) value.
// This goes on until the elements in the array are finished..

// We can also write this function as this cause we don't need the index and original array - prices...
const sum = amountPrice.reduce((prevValue, curValue) => prevValue + curValue);
console.log(sum);

// This returns the answer of sumation of all the numbers within the array.
// IMP = For MULTIPLICATION we need to start from 1 in the second argument to reduce(). Starting with 0 gives 0 as answer..


----------------------------------------------------------------------------------------------


// 17. Arrays & Strings - split() and join()

// This special methods are related to Strings..
// We can get non-readable data or names as forms of Strings - these methods are use to make them readable...

// split():
// This methods takes various stringed data and turns it into an array.
// This takes single value data and separates them...

const data = 'new york;10.25;latitude-200.95'
// We want to separate this data to make it workable..
const transformedData = data.split(';');
// IMP = As the argument within split - we specify a separator, here the separator is ; as it separates the data.. 
// We can also specify the second argument to limit the number of elements which are created...
// We can select the separator according to our data. 
console.log(transformedData);
// Here we only separate the data, to transform the numbers we need to use other methods we learned about.

// join():
// This method allows us to merge an array of strings into a String..

const nameFragments = ['Shiv', 'Mehra', 'Decoy'];
const nameData = nameFragments.join(' ');
console.log(nameData);

// This method also takes a separator. 
// If we don't specify the separator, it will use , as default.
// Here our separator is a whiteSpace.


-----------------------------------------------------------------------------------------


// 18. The Spread Operator (...)

// The spread operator is an operator that pulls out all the elements of an array and gives them to us as a standalone lists of elements...
// We can't use it like -
// ...nameFragments or const name = ...nameFragments
// These methods are not supported.

// We can use it to copy an array.

const copiedNameFragments = [...nameFragments];
nameFragments.push("Mr.");
console.log(copiedNameFragments);
console.log(nameFragments);
// This will pull out all the elements of nameFragments and copy it inside the empty array with the spread operator..

// We cannot put the const nameFragments within the copied one cause that will just pick the whole array and paste it within it, creating a single element as an array inside copied - []....
// That is why we use spread operator...

// Now if we push something within nameFragments after this const, that won't be updated within the copied array.

// But we don't just use the Spread Operator for copying..

// We can use it whenever a function need a list of Standalone Values from the array, Spread Operator helps us get these values out of that array.
// Let's look at an example...

Math.min();
// This is a numbers function we will learn in Numbers section. It finds the minimum valued element it takes in ().
// But it doens't take an array.
// We use Spread Operator here..

const minNum = [1,2,3,4,5];
const spreadMin = Math.min(...minNum);
console.log(spreadMin);

// But when using this to copy Objects - and we know Objects are reference values = So when copying them, we copy the address values (they are still the old objects in the end.)

const person = [{name: "Max", age: 32}, {name: "Manuel", age: 25}]
const copiedPerson = [...person];

person.push({name: "Anna", age: 21});
person[0].age = 28

console.log(person, copiedPerson);

// We push a new object inside the person and it won't effect with the copied data.
// But we change the object value - it will effect that same copied value within the copiedPerson.
// We change Max's age for person, but it also got changed inside the copiedPerson...

// This happens cause we copied the Address of the place in Memory and added that object (28 age) in place of the memory...

// We can use map() method to transform these into brand new array with new memory places...
// We need to make a new fuction where we map all the objects from original array into new objects...
// Here in the function - ({}) -  this regards to the objects and not the function curly braces...

const copiedPerson = [...person.map(persons => ({name: persons.name, age: persons.age}))]
console.log(copiedPerson);
// Here we can see - nothing new added when data changed with original array...
// Side Note - Refer to this lecture video regarding Nested Reference copying...


----------------------------------------------------------------------------------------------


// 19. Understanding Array Destructuring...

// We have some data in the array, we want to use these data individually as variables. 
// Array destructuring works with this...

// Yes, we can do it by storing those data with the help of index - but that proves hectic and we know it...

const desName = ['Max', "Ben", 'Chalie'];
const name1 = desName[0] // We can do this and so on.. But we have destructuring to do it fluently without cumbersome effort... 

// Steps:
// We create a const of [].
// Inside we give variable names that we would named to those individual elements for eg - firstName = 'Max'.

const desName = ['Max', "Ben", 'Chalie'];
const [firName, secName, triName] = desName;
// Destructuring syntax is read and assigned from LEFT to RIGHT basis... 
console.log(firName, secName, triName);

// This is very poweful syntax for splitting an array into variables with which we wanna work..

// IMP = if there is more data to collect, we can do it with the REST Operator....
// Rest operator will collect all remaining elements which are not assigned to variable and store them in brand new variable.. 
// Those will be assigned in different array...

const desName2 = ['Max', "Ben", 'Chalie', 'Anna', 'Mr.', 30]
const [firName2, secName2, ...otherInfo] = desName2;
console.log(firName2, secName2, otherInfo);


---------------------------------------------------------------------------------------------


// 20. Maps & Sets - Overview...

/* 

ARRAYS:

These are the most imp ones...
Store (nested) data of any kind and length.
Iterables, also many special array methods available.
Order of elements is guaranteed.
Duplicates are allowed.
A zero based index to access elements.

*/

/* 

SETS:

Stored (nested) data of any kind and length.
Iterable, also some special set methods available.
No array methods supported. But as we learned, we can convert any iterable into an array by - Array.from().
Order is NOT guaranteed.
Duplicates are NOT allowed.
No index based access.

*/

/* 

MAPS:

Stores key-value data of any kind and length. 
Any key values are allowed.
Bit like objects where we also have key-value data.
Difference between Maps & Objects - in objects we have numbers or strings as keys or symbols. Here we can have anything as a key = array or objects, anything..
Iterable, also some special Map methods availablle.
Order of elements is guaranteed. (Order is NOT guaranteed for Objects.)
Duplicate Keys are NOT allowed.
Key-based access allowed.

*/


--------------------------------------------------------------------------------------------

// Working with SETS - Notes inside 20. SETS & MAPS - For better readability...
// I will transfer this notes as main notes in there too....

-----------------------------------------------------------------------------------

// REFER TO ALL THE IMAGES AND PDFS AND IF NECESSARY ALL THE VIDEOS TO SOLVE DOUBTS REGARDING THIS SECTION...


