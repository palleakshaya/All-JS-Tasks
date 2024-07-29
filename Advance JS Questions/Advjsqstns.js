// TASK 1: CONSOLIDATING EVENT ATTENDEES

// Description: Given arrays of attendees for different events, create a single
// array of unique attendees (no duplicates) sorted alphabetically by name.
// Data:

const event1Attendees = ["Alice", "Bob", "Charlie"];
const event2Attendees = ["Bob", "Dave", "Eve"];
const event3Attendees = ["Charlie", "Eve", "Frank"];

const res = [...event1Attendees, ...event2Attendees, ...event3Attendees];
//const result = [...new Set(res)];
console.log([...new Set(res)]);
// Expected Output:
// ['Alice', 'Bob', 'Charlie', 'Dave', 'Eve', 'Frank']

//TASK 2
// TASK 2: ANALYZING SURVEY RESPONSES
// Description: You have an array of survey responses where each response
// includes a list of topics and a rating (1-5). Find the average rating of each
// topic.

//Data:
const surveyResponses = [
  { topics: ["Environment", "Economy"], rating: 4 },
  { topics: ["Economy", "Health"], rating: 3 },
  { topics: ["Environment", "Politics"], rating: 5 },
  // more responses...
];

const topicRatings = surveyResponses.reduce((acc, { topics, rating }) => {
  topics.forEach((topic) => {
    if (!acc[topic]) {
      acc[topic] = { total: 0, count: 0 };
    }
    acc[topic].total += rating;
    acc[topic].count += 1;
  });
  return acc;
}, {});

const avgRatings = Object.fromEntries(
  Object.entries(topicRatings).map(([topic, { total, count }]) => [
    topic,
    total / count,
  ])
);

console.log(avgRatings);

// Expected Output:
// { 'Environment': 4.5, 'Economy': 3.5, 'Health': 3, 'Politics': 5 }

//TASK 3: FILTERING AND MAPPING BOOK DATA
// Description: From an array of books, select books published after 2000 and
// create an array of their titles and authors in the format "Title by Author".
// Data:

const books = [
  {
    title: "Book A",
    author: "Author 1",
    year: 1999,
  },
  {
    title: "Book B",
    author: "Author 2",
    year: 2005,
  },
  {
    title: "Book C",
    author: "Author 3",
    year: 2001,
  },
  // more books...
];

function bookAfterYear(Year) {
  return books
    .filter((year1) => year1.year > Year)
    .map((book) => `${book.title} by ${book.author}`);

  //return `${years.title} by ${years.author}`;
}
console.log(bookAfterYear(2000));

//Expected Output: ['Book B by Author 2', 'Book C by Author 3']

//TASK 4: COMPLEX PRODUCT INVENTORY ANALYSIS
// Description: Given an array of products, each with a list of stores and their
// inventory, find products that are available in all stores. A product is available
// in a store if its inventory is more than 0.
//Data:
const products = [
  {
    name: "Product 1",
    stores: [
      { storeId: "S1", inventory: 10 },
      { storeId: "S2", inventory: 0 },
    ],
  },
  {
    name: "Product 2",
    stores: [
      { storeId: "S1", inventory: 5 },
      { storeId: "S2", inventory: 7 },
    ],
  },
  // more products...
];

function getProduct() {
  const filterProducts = products.filter((product) => {
    return product.stores.every((store) => store.inventory > 0);
  });
  return filterProducts.map((product) => product.name);
}

console.log(getProduct());

//Expected Output: ['Product 2']

//TASK 5: CREATING A NESTED COMMENT THREAD
// Description: Given an array of comments, each with a `commentId`, `text`,
// and an optional `replyTo` indicating the `commentId` they are replying to,
// structure these into a nested comment thread.
//Data:
const comments = [
  { commentId: "c1", text: "Comment 1" },
  { commentId: "c2", text: "Comment 2", replyTo: "c1" },
  { commentId: "c3", text: "Comment 3" },
  // more comments...
];
const commentMap = new Map();
const commentsInfo = [];

comments.forEach((comment) => {
  comment.replies = [];
  commentMap.set(comment.commentId, comment);
});

comments.forEach((comment) => {
  if (comment.replyTo) {
    const parent = commentMap.get(comment.replyTo);
    if (parent) {
      parent.replies.push(comment);
    }
  } else {
    commentsInfo.push(comment);
  }
});

console.log(commentsInfo);

// Expected Output:
// [
//  { commentId: 'c1', text: 'Comment 1', replies: [{ commentId: 'c2', text: 'Comment 2', replies: [] }] },
//  { commentId: 'c3', text: 'Comment 3', replies: [] }
// ]

//Currying-what is it,example,how it works
//partial application

//Currying is a functional programming technique in JavaScript where a function with multiple arguments is transformed into a sequence of nested functions, each taking a single argument. The curried function allows you to create a chain of more specialized functions from a general one by partially applying its arguments.
//How it works??
// 1. Currying is a technique used in functional programming.
// 2. function that takes multiple arguments is transformed into a sequence of functions, each taking a single argument.
// 3. The result of each function is a new function.
// 4. process continues untill all arguements are provided.
// 5. finally it returns the original function.
//Currying returns function inside function
// Normal function
function multiply(a, b, c) {
  return a * b * c;
}

console.log(multiply(2, 3, 4)); // Output: 24

// Curried function
function curriedMultiply(a) {
  return function (b) {
    return function (c) {
      return a * b * c;
    };
  };
}
//const curriedMultiply = (a) => (b) => (c) => a * b * c;
console.log(curriedMultiply(2)(3)(4)); // Output: 24

//Execution Flow: The chaining of function calls (curriedMultiply(2)(3)(4)) follows the nested structure of the curried functions:

// curriedMultiply(2) returns a function that expects b.
// curriedMultiply(2)(3) returns a function that expects c.
// curriedMultiply(2)(3)(4) finally computes 2 * 3 * 4, which results in 24.

// what is partial application ?

//Partial application is a functional programming technique where you create a new function by fixing a certain number of arguments of an existing function. This new function is then able to take the remaining arguments as its own parameters.

// Original function
function add(a, b) {
  return a + b;
}

// Partial application
function add2(b) {
  return add(2, b); // Fixing the first argument 'a' as 2
}

// Output
console.log(add2(3)); // Output: 5 (because add2 adds 2 to 3)
console.log(add2(10)); // Output: 12 (because add2 adds 2 to 10)

//  Fixing the arguements.

//  what is point free programming ?

//   1.functions don’t take arguments as we know them, they take other functions and these are the functions, in the end, that take the arguments

const numbers = [1, 2, 3, 4, 5, 6];

// Traditional approach
const evensTraditional = numbers.filter(function (num) {
  return num % 2 === 0;
});

// Point-free approach
const isEven = (num) => num % 2 === 0;
const evensPointFree = numbers.filter(isEven);

console.log(evensTraditional); // Outputs: [2, 4, 6]
console.log(evensPointFree); // Outputs: [2, 4, 6]
