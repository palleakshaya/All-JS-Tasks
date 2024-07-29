const transactions = [
  { id: "T1", category: "Personal", amount: 3000, date: "2023-01-15" },
  { id: "T2", category: "Business", amount: 6500, date: "2023-02-20" },
  { id: "T3", category: "Business", amount: 4500, date: "2023-03-05" },
  // more transactions...
];
//Expected Output:
//["Transaction T2: $6500 on 2023-02-20"]
const transaction = transactions
  .filter(
    (trans) =>
      trans.amount > 5000 &&
      trans.category === "Business" &&
      trans.date.includes("2023")
  )
  .map(
    (transs) => `Transaction ${transs.id} : $${transs.amount} on ${transs.date}`
  );
console.log(transaction);

// Task 2: Departmental Salary Expenditure
// Description: Calculate the total salary expenditure for each department from an array of departments, each with an array of employees.
// Data:
const departments = [
  { name: "Engineering", employees: [{ salary: 80000 }, { salary: 90000 }] },
  { name: "Marketing", employees: [{ salary: 60000 }, { salary: 65000 }] },
  // more departments...
];

const dept = departments.map((department) => ({
  [department.name]: department.employees.reduce(
    (total, employee) => total + employee.salary,
    0
  ),
}));
console.log(dept);
// Expected Output: [{ "Engineering": 170000 }, { "Marketing": 125000 }]

// Task 3: Weather Data Sorting and Structuring
// Description: Sort an array of weather data objects in descending order of temperature and restructure the data into an object with dates as keys and temperatures as
// values.
// Data:
const weatherData = [
  { date: "2023-03-01", temperature: 16 },
  { date: "2023-03-02", temperature: 20 },
  { date: "2023-03-03", temperature: 18 },
  // more data...
];
// const desc = weatherData
//   .sort((a, b) => b.temperature - a.temperature)
//   .map((data) => ({ [data.date]: data.temperature }));
// console.log(desc);

const desc = weatherData
  .sort((a, b) => b.temperature - a.temperature)
  .reduce((acc, data) => {
    acc[`"${data.date}"`] = data.temperature;
    return acc;
  }, {});

console.log(desc);

//Expected Output:{ "2023-03-02": 20, "2023-03-03": 18, "2023-03-01": 16 }

// Task 4: Analyzing Electronics Products
// Description: From an array of products, find products in the 'Electronics' category with more than 50 reviews and a rating of at least 4.0. Calculate the average price of
// these products.
// Data:
const products = [
  { category: "Electronics", price: 199.99, reviews: 120, rating: 4.5 },
  { category: "Electronics", price: 89.99, reviews: 80, rating: 3.9 },
  { category: "Home", price: 49.99, reviews: 30, rating: 4.2 },
  // more products...
];

const productss = products
  .filter(
    (product) =>
      (product.category =
        "Electronics" && product.reviews > 50 && product.rating >= 4.0)
  )
  .map((product) => product.price);
console.log(productss);
// Expected Output:199.99 // Assuming only one product meets the criteri

// Task 5: Merging User and Order Data
// Description: Merge two arrays of objects based on a common key ( userId ) to create a new array of objects that includes each user's name and their corresponding
// order details.
// Data:
const users1 = [
  { userId: "U1", name: "Alice" },
  { userId: "U2", name: "Bob" },
  // more users...
];
const orders = [
  { userId: "U1", orderDetails: "Order 1 Details" },
  { userId: "U2", orderDetails: "Order 2 Details" },
  // more orders...
];
const mergedData = users1.map((user) => ({
  name: user.name,
  orderDetails: orders.find((order) => order.userId === user.userId)
    .orderDetails,
}));
console.log(mergedData);
// Expected Output:
// [
// { name: 'Alice', orderDetails: 'Order 1 Details' },
// { name: 'Bob', orderDetails: 'Order 2 Details' }
// ]

// create map and filter with reduce --assignment
