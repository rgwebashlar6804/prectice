const _ = require("lodash");

// chunk is used to a split array 
let chunkarray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log("chunk ", _.chunk(chunkarray, 3));
console.log("chunk ", _.chunk(chunkarray, 4 / 2));

// compact is used to falsy value (removed 0,null,boolean value)
let compactArray = [0, 1, false, 2, '', 3];
console.log("compact ", _.compact(compactArray));

//return new array merge array and value add  concatination operation perform
let concatArray = [1];
let other = _.concat(concatArray, 2, [[5]]);

console.log(other);

//difference method is used to a check value in our array does have exist or not 

console.log(_.difference([2, 5, 8, 70], [1, 3, 2]));

// differenceBy it is used to filtered array return unique value return

console.log(_.differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor));
console.log(_.differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x'));

//differenceWith is used to is qual or not and unique value return but akha array mathi compare karse 

let Object = [{ 'a': 3, 'y': 1 }, { 'a': 2, 'y': 1 }];
console.log(_.differenceWith(Object, [{ 'a': 2, 'y': 1 }], _.isEqual));


//drop is used to create a slice of array with n element 
//remove element from the starting index
console.log(_.drop([1, 2, 3]));

//first 5 element remove
console.log(_.drop([1, 2, 3, 5, 7, 8, 9], 5));
//first 2 element remove
console.log(_.drop([1, 2, 3, 5, 7, 8, 9], 2));


//dropright is used to create a slice of array with n element 
//remove element from the ending index

console.log(_.dropRight([1, 2, 3]));
//last 5 element remove
console.log(_.dropRight([1, 2, 3, 5, 7, 8, 9], 5));



//dropRightWhile

var users = [
    { 'user': 'barney', 'active': true },
    { 'user': 'fred', 'active': false },
    { 'user': 'pebbles', 'active': false }
];

console.log(_.dropRightWhile(users, function (o) { return !o.active; }));

//active false hase ee remove karse only true active return
console.log(_.dropRightWhile(users, { 'user': 'pebbles', 'active': false }));

console.log(_.dropRightWhile(users, ['active', false]));


console.log(_.dropRightWhile(users, 'active'));

console.log("+++++++++++++++++++++ dropWhile ++++++++++++++++++")


var users2 = [
    { 'user': 'barney', 'active': false },
    { 'user': 'fred', 'active': false },
    { 'user': 'pebbles', 'active': true }
];

console.log(_.dropWhile(users2, function (o) { return !o.active; }));
// => objects for ['pebbles']

// The `_.matches` iteratee shorthand.
console.log(_.dropWhile(users2, { 'user': 'barney', 'active': false }));
// => objects for ['fred', 'pebbles']

// The `_.matchesProperty` iteratee shorthand.
console.log(_.dropWhile(users2, ['active', false]));
// => objects for ['pebbles']

// The `_.property` iteratee shorthand.
console.log(_.dropWhile(users2, 'active'));


// fill the array starting to ending number 

let fillArray = [1, 2, 3];

console.log(_.fill(fillArray, 'a'));


//create array and enter value
console.log(_.fill(Array(6), 40));


console.log(_.fill([4, 6, 8, 10], '*', 1, 3));


// indexfind karva mate use thai 
let user3 = [
    { 'user': 'barney', 'active': true },
    { 'user': 'fred', 'active': false },
    { 'user': 'pebbles', 'active': true }
];
console.log(_.findIndex(user3, function (o) { return o.user == 'fred'; }));
console.log(_.findIndex(user3, { 'user': 'barney', 'active': false }));
console.log(_.findIndex(user3, ['active', false]));
console.log(_.findIndex(user3, 'active'));



//last index find
var users4 = [
    { 'user': 'barney', 'active': true },
    { 'user': 'fred', 'active': false },
    { 'user': 'pebbles', 'active': false }
];

console.log(_.findLastIndex(users4, function (o) { return o.user == 'pebbles'; }));
// => 2

// The `_.matches` iteratee shorthand.
console.log(_.findLastIndex(users4, { 'user': 'barney', 'active': true }));
// => 0

// The `_.matchesProperty` iteratee shorthand.
console.log(_.findLastIndex(users4, ['active', false]));
// => 2

// The `_.property` iteratee shorthand.
console.log(_.findLastIndex(users4, 'active'));

//flatten array single level deep
console.log(_.flatten([1, [2, [3, [4]], 5]]));