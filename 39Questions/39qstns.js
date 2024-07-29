// Task 1: High-Value Transactions in 2023
// Description: Given an array of transactions, identify transactions
// that are above $5000, occurred in 2023, and belong to the
// 'Business' category. Transform this filtered
// array into an array of strings formatted as "Transaction [id]: $[amount] on [date]".
// Data:
const transactions = [
  { id: "T1", category: "Personal", amount: 3000, date: "2023-01-15" },
  { id: "T2", category: "Business", amount: 6500, date: "2023-02-20" },
  { id: "T3", category: "Business", amount: 4500, date: "2023-03-05" },
  // more transactions...
];
// Expected Output:
// ["Transaction T2: $6500 on 2023-02-20"]
console.log(
  transactions
    .filter(
      (x) =>
        x.category == "Business" &&
        x.amount > 5000 &&
        x.date.slice(0, 4) == "2023"
    )
    .map((y) => `Transaction ${y.id}: $${y.amount} on ${y.date}`)
);

// Task 2: Departmental Salary Expenditure
// Description: Calculate the total salary expenditure for each department
//  from an array of departments, each with an array of employees.
// Data:
const departments = [
  { name: "Engineering", employees: [{ salary: 80000 }, { salary: 90000 }] },
  { name: "Marketing", employees: [{ salary: 60000 }, { salary: 65000 }] },
  // more departments...
];
// Expected Output:
// [{ "Engineering": 170000 }, { "Marketing": 125000 }]

const result = departments.reduce((accumulator, department) => {
  const departmentName = department.name;
  const departmentSalary = department.employees.reduce(
    (acc, employee) => acc + employee.salary,
    0
  );
  accumulator[departmentName] = departmentSalary;
  return accumulator;
}, {});

console.log(result);

//   Task 3: Weather Data Sorting and Structuring
// Description: Sort an array of weather data objects in descending order of
// temperature and restructure the data into an object with dates as
// keys and temperatures as values.
// Data:
const weatherData = [
  { date: "2023-03-01", temperature: 16 },
  { date: "2023-03-02", temperature: 20 },
  { date: "2023-03-03", temperature: 18 },
  // more data...
];
// Expected Output:
// { "2023-03-02": 20, "2023-03-03": 18, "2023-03-01": 16 }

const weather = weatherData.reduce((acc, curr) => {
  acc[curr.date] = curr.temperature;

  return acc.temperature - curr.temperature < 0 ? curr : acc;
}, {});
const sortedWeather = Object.entries(weather)
  .sort(([, a], [, b]) => b - a)
  .reduce((acc, [date, temp]) => {
    acc[date] = temp;
    return acc;
  });
console.log(sortedWeather);

// Task 4: Analyzing Electronics Products
// Description: From an array of products, find products in the 'Electronics' category
// with more than 50 reviews and a rating of at least 4.0. Calculate the average price of
// these products.
// Data:
const products = [
  { category: "Electronics", price: 199.99, reviews: 120, rating: 4.5 },
  { category: "Electronics", price: 89.99, reviews: 80, rating: 3.9 },
  { category: "Home", price: 49.99, reviews: 30, rating: 4.2 },
  // more products...
];
// Expected Output:
// 199.99 // Assuming only one product meets the criteria

console.log(
  products.reduce((acc, curr) => {
    if (
      curr.category == "Electronics" &&
      curr.reviews > 50 &&
      curr.rating >= 4.0
    ) {
      acc += curr.price;
    }
    return acc;
  }, 0)
);

// Task 5: Merging User and Order Data
// Description: Merge two arrays of objects based on a common key ( userId )
// to create a new array of objects that includes each user's name and their corresponding
// order details.
// Data:
const users = [
  { userId: "U1", name: "Alice" },
  { userId: "U2", name: "Bob" },
  // more users...
];
const orders = [
  { userId: "U1", orderDetails: "Order 1 Details" },
  { userId: "U2", orderDetails: "Order 2 Details" },
  // more orders...
];
// Expected Output:
// [
// { name: 'Alice', orderDetails: 'Order 1 Details' },
// { name: 'Bob', orderDetails: 'Order 2 Details' }
// ]

console.log(
  users.reduce((acc, user) => {
    const order = orders.find((order) => user.id === order.id);
    if (order) {
      acc.push({
        name: user.name,
        orderDetails: order.orderDetails,
      });
    }
    return acc;
  }, [])
);

console.log("\n\nUsing Reduce as Map And Filter\n");
console.log(
  [1, 7, 3, 10, 5].reduce((acc, curr) => acc.concat(`${curr} -> `), "")
); // converted to string

console.log(
  [1, 7, 3, 10, 5, 4].reduce(
    (acc, curr) => (curr % 2 == 0 ? acc.concat(curr) : acc),
    []
  )
); // Filtering even numbers

console.log("\n\nNew TASKS");
// Q1. Implement getUserAge function
const userData = {
  user: {
    profile: {
      name: "Alice",
      age: null,
    },
  },
};

function getUserAge(userData) {
  return userData?.user?.profile?.age ?? "Age not provided";
}

console.log(getUserAge(userData)); // Should print: Age not provided
console.log(getUserAge({ user: { profile: { age: 25 } } })); // Should print: 25
console.log(getUserAge({ user: {} })); // Should print: Age not provided

// Q2. Write a function that returns a new array with an
// additional skill for each employee

const employees = [
  {
    id: 1,
    name: "Alice",
    position: "Developer",
    skills: ["JavaScript", "React"],
  },
  {
    id: 2,
    name: "Bob",
    position: "Manager",
    skills: ["Leadership", "Communication"],
  },
  { id: 3, name: "Charlie", position: "CEO", skills: ["Strategy", "Vision"] },
];

function addSkill(employees, newSkill) {
  const result = employees.reduce(
    (acc, curr) => acc.concat(...employees, curr.skills.push(newSkill)),
    []
  );
  return result;
}

console.log(addSkill(employees, "Problem Solving"));
console.log(employees);
// Should print:
// [
//   { id: 1, name: "Alice", position: "Developer", skills: ["JavaScript", "React", "Problem Solving"] },
//   { id: 2, name: "Bob", position: "Manager", skills: ["Leadership", "Communication", "Problem Solving"] },
//   { id: 3, name: "Charlie", position: "CEO", skills: ["Strategy", "Vision", "Problem Solving"] }
// ]

// Q3. Find the total price of all products using arrow functions and array methods
// - Implement getTotalPrice
const productss = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Phone", price: 500 },
  { id: 3, name: "Tablet", price: 700 },
];

const getTotalPrice = (products) => {
  return products.reduce((acc, product) => (acc += product.price), 0);
};

console.log(getTotalPrice(productss)); // Should print: 2200

// Q4: Write a function that extracts the user's name and theme, providing
// default values if they are missing
const userProfile = {
  id: 1,
  name: "Eve",
  settings: {
    theme: "dark",
  },
};

const getUserSettings = (userProfile) => {
  return `${userProfile.name} prefers the ${
    userProfile?.settings?.theme ?? "light theme"
  }`;
};

console.log(getUserSettings(userProfile)); // Should print: Eve prefers the dark theme
console.log(getUserSettings({ id: 2, name: "Adam" })); // Should print: Adam prefers the light theme

// Q5: Write a function that takes a user object and returns a message indicating
// if the user is active or not
const user1 = { name: "Jane", active: true };
const user2 = { name: "John", active: false };

const getUserStatus = (user) =>
  `${user.name} is currently ${user.active ? "active" : "inactive"}`;

console.log(getUserStatus(user1)); // Should print: Jane is currently active
console.log(getUserStatus(user2)); // Should print: John is currently inactive

// Q6: Write a function that returns the user's age if available, or a default message
// if not, using nullish coalescing and optional chaining
const userWithFullProfile = {
  id: 1,
  name: "Alice",
  profile: {
    age: 25,
    address: {
      city: "Wonderland",
      zip: "12345",
    },
  },
};

const userWithPartialProfile = {
  id: 2,
  name: "Bob",
  profile: {
    age: null,
  },
};

const getUserAgee = (user) => `${user?.profile?.age ?? "Age not provided"}`;

console.log(getUserAgee(userWithFullProfile)); // Should print: 25
console.log(getUserAgee(userWithPartialProfile)); // Should print: Age not provided
console.log(getUserAgee({ id: 3, name: "Charlie" })); // Should print: Age not provided

// Q7: Write a function that generates a summary string for the top scorer
// using template literals and array methods
const scores = [
  { name: "Alice", score: 90 },
  { name: "Bob", score: 85 },
  { name: "Charlie", score: 92 },
];

const getTopScorer = (scores) => {
  const top = scores.reduce((acc, curr) => {
    acc = acc.score > curr.score ? acc : curr;
    return acc;
  }, 0);
  return `${top.name} is the top scorer with a score of ${top.score}`;
};

console.log(getTopScorer(scores)); // Should print: Charlie is the top scorer with a score of 92.

// Q8: Create a function that returns a greeting message based on the time of day
// Ex26 - Create a function that returns a greeting message based on the time of day
function greet(name) {
  const hour = new Date().getHours();
  return `Good ${
    hour < 12 ? "morning" : hour < 18 ? "afternoon" : "evening"
  }, ${name}!`;
}

console.log(greet("Pandu")); // Good morning, Alice! (If the time 10am)
// console.log(greet("Pandu")); // Good afternoon, Alice! (If the time 1pm)
// console.log(greet("Pandu")); // Good evening, Alice! (If the time 7pm)

// Q9: Write a function that returns the name of a user's first friend
// using nested destructuring
const userss1 = [
  { id: 1, name: "Alice", friends: [{ name: "Bob" }, { name: "Charlie" }] },
  { id: 2, name: "David", friends: [{ name: "Eve" }, { name: "Frank" }] },
  { id: 4, name: "Deepak", friends: [] },
];

function getFirstFriendName(num) {
  const [user] = userss1.filter((u) => u.id === num);
  if (!user) {
    return "User not found";
  }

  if (user.friends.length === 0) {
    return `${user.name} has no friends 🥲`;
  }

  return user.friends[0].name;
}

console.log(getFirstFriendName(1)); // Should print: Bob
console.log(getFirstFriendName(2)); // Should print: Eve
console.log(getFirstFriendName(3)); // Should print: User not found
console.log(getFirstFriendName(4)); // Should print: Deepak has no friends 🥲

const movies = [
  {
    id: 1,
    title: "Baahubali",
    director: "S. S. Rajamouli",
    year: 2015,
    ratings: [8, 9, 10],
    genre: "Action",
  },
  {
    id: 2,
    title: "Arjun Reddy",
    director: "Sandeep Reddy Vanga",
    year: 2017,
    ratings: [9, 8, 9],
    genre: "Drama",
  },
  {
    id: 3,
    title: "Mahanati",
    director: "Nag Ashwin",
    year: 2018,
    ratings: [10, 9, 8],
    genre: "Biography",
  },
  {
    id: 4,
    title: "Eega",
    director: "S. S. Rajamouli",
    year: 2012,
    ratings: [7, 8, 9],
    genre: "Fantasy",
  },
  {
    id: 5,
    title: "Jersey",
    director: "Gowtam Tinnanuri",
    year: 2019,
    ratings: [9, 9, 8],
    genre: "Sports",
  },
];

// Q10. Write a function that finds a movie by id and returns its title and
// genre in a formatted string
function getMovieDetails(num) {
  const movie = movies.find((u) => u.id === num);
  return movie ? `${movie.title} is a ${movie.genre} movie` : "Movie not found";
}

console.log(getMovieDetails(1)); // Should print: Baahubali is an Action movie
console.log(getMovieDetails(5)); // Should print: Jersey is a Sports movie
console.log(getMovieDetails(6)); // Should print: Movie not found

// Q11. Write a function that filters out movies released before a certain year
// and calculates the average rating of the remaining movies (Rating must be rounded)

const getAverageRatingAfterYear = (samvathsaram) => {
  const afterYear = movies.filter((x) => x.year > samvathsaram);

  if (afterYear.length === 0) {
    return "No movies after the specified year";
  }
  const totalRating = afterYear.reduce(
    (acc, curr) => acc + curr.ratings.reduce((a, b) => a + b, 0),
    0
  );
  const averageRating = Math.round(
    totalRating / afterYear.reduce((acc, curr) => acc + curr.ratings.length, 0)
  );
  return `The average rating of movies after ${samvathsaram} is ${averageRating}`;
};

console.log(getAverageRatingAfterYear(2016)); // Should print: 8.83 (average rating of Arjun Reddy, Mahanati, and Jersey)
console.log(getAverageRatingAfterYear(2020)); // Should print: No movies after the specified year

// Q12: Write a function that checks if all movies of a certain genre have
// ratings above a certain value

const allRatingsAboveForGenre = (ratings, genere) => {
  const genreMovies = movies.filter((x) => x.genre === genere);
  const allAboveRatings = genreMovies.every((movie) =>
    movie.ratings.every((rating) => rating > ratings)
  );
  return allAboveRatings
    ? `Yes, all ${genere} movies are above ${ratings} ratings`
    : `No, not all ${genere} movies are above ${ratings} ratings`;
};

console.log(allRatingsAboveForGenre(7, "Action")); // Should print: Yes, all Action movies are above 7 ratings
console.log(allRatingsAboveForGenre(8, "Biography")); // Should print: No, not all Biography movies are above 8 ratings

// Q13: Write a function that returns a string with each movie's title and
// its ratings joined by commas
function getTitlesAndRatings() {
  console.log(
    movies.reduce(
      (acc, curr) => console.log(`${curr.title}: ${curr.ratings} |`),
      0
    )
  );
}
console.log(getTitlesAndRatings());
// Should print: Baahubali: 8, 9, 10 | Arjun Reddy: 9, 8, 9 | Mahanati: 10, 9, 8 |
//  Eega: 7, 8, 9 | Jersey: 9, 9, 8

// Q14: Write a function that returns a single array containing all ratings of all movies

function getAllRatings() {
  return movies.reduce((acc, curr) => acc.concat(curr.ratings), []);
}
console.log(getAllRatings());
// Should print: [8, 9, 10, 9, 8, 9, 10, 9, 8, 7, 8, 9, 9, 9, 8]

// Q15: Write a function that returns an array of titles of movies that have
// ratings above a certain threshold in any rating
const getTitlesWithHighRatings = (rating) => {
  return movies
    .filter((x) => x.ratings.some((rat) => rat >= rating))
    .map((x) => x.title);
};
console.log(getTitlesWithHighRatings(9)); // Should print: ["Baahubali", "Arjun Reddy", "Mahanati", "Jersey"]
console.log(getTitlesWithHighRatings(10)); // Should print: ["Mahanati"]

// Q16: Write a function that returns an array of movie titles sorted by their
// average ratings in descending order
const getTitlesSortedByAverageRating = () => {
  return movies
    .map((movie) => ({
      title: movie.title,
      avgRating:
        movie.ratings.reduce((acc, curr) => acc + curr, 0) /
        movie.ratings.length,
    }))
    .sort((x, y) => y.avgRating - x.avgRating)
    .map((x) => x.title);
};
console.log(getTitlesSortedByAverageRating()); // Should print: ["Baahubali", "Arjun Reddy", "Jersey", "Mahanati", "Eega"]

// Q17: Write a function that finds the movie with the highest average rating and
// returns its title

const getMovieWithHighestAverageRating = () => {
  return movies
    .map((movie) => ({
      title: movie.title,
      avgRating:
        movie.ratings.reduce((acc, curr) => acc + curr, 0) /
        movie.ratings.length,
    }))
    .sort((x, y) => y.avgRating - x.avgRating)
    .map((x) => x.title)[0];
};

console.log(getMovieWithHighestAverageRating()); // Should print: Baahubali

// Q18: Write a function that returns an array of movie titles released after a
// certain year
const getTitlesAfterYear = (samvathsaram) => {
  return movies.filter((x) => x.year > samvathsaram).map((x) => x.title);
};

console.log(getTitlesAfterYear(2015)); // Should print: ["Arjun Reddy", "Mahanati", "Jersey"]
console.log(getTitlesAfterYear(2018)); // Should print: ["Jersey"]

// Q19: Write a function that finds a movie by its title and returns a formatted string
// with its director and year

const getMovieInfoByTitle = (title) => {
  const [movie] = movies.filter((u) => u.title === title);
  return movie
    ? `${movie.title} directed by ${movie.director}`
    : "Movie not found";
};

console.log(getMovieInfoByTitle("Baahubali")); // Should print: Baahubali directed by S. S. Rajamouli was released in 2015
console.log(getMovieInfoByTitle("Jersey")); // Should print: Jersey directed by Gowtam Tinnanuri was released in 2019
console.log(getMovieInfoByTitle("Avatar")); // Should print: Movie not found

// Q20: Write a function that returns an array of titles of movies that have at least
// one rating below a certain threshold

const getTitlesWithLowRatings = (rating) => {
  return movies
    .filter((x) => x.ratings.some((rat) => rat < rating))
    .map((x) => x.title);
};

console.log(getTitlesWithLowRatings(8)); // Should print: ["Eega"]
console.log(getTitlesWithLowRatings(9)); // Should print: ["Baahubali", "Mahanati", "Eega", "Jersey"]

// Q21: Write a function that calculates the total number of ratings for movies
// of a specific genre

const getTotalRatingsByGenre = (genre) => {
  return movies
    .filter((x) => x.genre == genre)
    .reduce((acc, curr) => acc + curr.ratings.length, 0);
};

console.log(getTotalRatingsByGenre("Action")); // Should print: 3
console.log(getTotalRatingsByGenre("Drama")); // Should print: 3

// -----------------------------------------------------------------------------------------------

movies = [
  {
    id: 1,
    title: "Baahubali",
    director: "S. S. Rajamouli",
    year: 2015,
    ratings: [8, 9, 10],
    genre: "Action",
  },
  {
    id: 2,
    title: "Arjun Reddy",
    director: "Sandeep Reddy Vanga",
    year: 2017,
    ratings: [9, 8, 9],
    genre: "Drama",
  },
  {
    id: 3,
    title: "Mahanati",
    director: "Nag Ashwin",
    year: 2018,
    ratings: [10, 9, 8],
    genre: "Biography",
  },
  {
    id: 4,
    title: "Eega",
    director: "S. S. Rajamouli",
    year: 2012,
    ratings: [7, 8, 9],
    genre: "Fantasy",
  },
  {
    id: 5,
    title: "Jersey",
    director: "Gowtam Tinnanuri",
    year: 2019,
    ratings: [9, 9, 8],
    genre: "Sports",
  },
];
// Q22: Write a function that returns an array of movies where the average rating is above a certain
// value, including the average rating in the result

function getMoviesWithHighAverageRating(hRating) {
  return movies
    .map((movie) => ({
      title: movie.title,
      avgRating:
        movie.ratings.reduce((acc, curr) => acc + curr, 0) /
        movie.ratings.length,
    }))
    .reduce((acc, curr) => {
      curr.avgRating > hRating
        ? acc.concat(`${curr.title} has an average rating of ${curr.avgRating}`)
        : curr;
      return acc;
    }, []);
  //   .filter((x) => x.avgRating > hRating)
  //   .map((x) => `${x.title} has an average rating of ${x.avgRating}`)
}

function getMoviesWithHighAverageRating(hRating) {
  return movies
    .map((movie) => ({
      title: movie.title,
      avgRating:
        movie.ratings.reduce((acc, curr) => acc + curr, 0) /
        movie.ratings.length,
    }))
    .reduce((acc, curr) => {
      return curr.avgRating > hRating
        ? acc.concat(`${curr.title} has an average rating of ${curr.avgRating}`)
        : acc;
    }, []);
  //   .filter((x) => x.avgRating > hRating)
  //   .map((x) => `${x.title} has an average rating of ${x.avgRating}`)
}

// console.log(getMoviesWithHighAverageRating(8.5));
// Should print: ["Baahubali has an average rating of 9.00","Arjun Reddy
//  has an average rating of 8.67", "Jersey has an average rating of 8.67"]

// Q23: Write a function that returns an array of movie titles directed
// by a specific director, sorted by year in ascending order

function getTitlesByDirectorSortedByYear(director) {
  return movies
    .filter((movie) => movie.director === director)
    .map((x) => x.title)
    .sort((a, b) => a.title - b.title);
}

// console.log(getTitlesByDirectorSortedByYear("S. S. Rajamouli")); // Should print: ["Eega", "Baahubali"]
// console.log(getTitlesByDirectorSortedByYear("Nag Ashwin")); // Should print: ["Mahanati"]

// Q24: Write a function that returns the average rating of movies released in a specific year

function getAverageRatingByYear(year) {
  const movie = movies.find((x) => x.year === year);
  if (!movie) return "No movies released in the specified year";
  return (
    movie.ratings.reduce((acc, curr) => acc + curr, 0) / movie.ratings.length
  );
}

// console.log(getAverageRatingByYear(2018)); // Should print: 9.00
// console.log(getAverageRatingByYear(2014)); // Should print: "No movies released in the specified year"

// Q25: Write a function that returns an array of objects with movie titles and their highest ratings

function getMoviesWithHighestRatings() {
  return movies.map((movie) => ({
    title: movie.title,
    highestRating: Math.max(...movie.ratings),
  }));
}

// console.log(getMoviesWithHighestRatings());
// Should print: [{ title: "Baahubali", highestRating: 10 }, { title: "Arjun Reddy", highestRating: 9 },
// { title: "Mahanati", highestRating: 10 }, { title: "Eega", highestRating: 9 }, { title: "Jersey", highestRating: 9 }]

// Q26: Write a function that returns the director with the most movies directed

function getDirectorWithMostMovies() {
  const directorCount = movies
    .map((movie) => {
      title: movie.title;
      director: movie.director;
      count: movies.reduce((acc, curr) => {
        var count = 0;
        acc.director === curr.director ? (count += 1) : count;
        return count;
      });
    })
    .map((x) => x.director);
}

// console.log(getDirectorWithMostMovies()); // Should print the director with the most movies

// Q27: Write a function that merges two arrays of movies into one using the spread operator

const moreMovies = [
  {
    id: 6,
    title: "Jathiratnalu",
    director: "k.v anudeep",
    year: 2023,
    ratings: [7, 8, 9],
    genre: "comedy",
  },
  {
    id: 7,
    title: "Jersey",
    director: "Gowtam Tinnanuri",
    year: 2019,
    ratings: [9, 9, 8],
    genre: "Sports",
  },
];

const mergeMovies = (movies, moreMovies) => {
  return [...movies, ...moreMovies];
};
// console.log(mergeMovies(movies, moreMovies));
// Should print: array with all 7 movies

// Q28: Write a function that accepts any number of movie objects and returns an array of
// their titles using the rest operator

const getTitles = (...movieObjects) => {
  return movieObjects.map((movie) => movie.title);
};

// console.log(getTitles(...movies)); // Should print titles of all movies in the array
// console.log(getTitles(movies[0], movies[1])); // Should print: ["Baahubali", "Arjun Reddy"]

// Q29: Write a function that merges two arrays of movies into one using the spread operator
// and provides a default value for the second array
const moreMoviess = [
  {
    id: 6,
    title: "RRR",
    director: "S. S. Rajamouli",
    year: 2022,
    ratings: [10, 10, 9],
    genre: "Action",
  },
  {
    id: 7,
    title: "Pushpa",
    director: "Sukumar",
    year: 2021,
    ratings: [8, 9, 8],
    genre: "Action",
  },
];

function mergeMoviess(movies, moreMoviess = []) {
  return [...movies, ...moreMoviess];
}

// console.log(mergeMoviess(movies, moreMoviess)); // Should print the merged array of movies
// console.log(mergeMoviess(movies)); // Should print the original array of movies

// Q30: Write a function that returns the last N movie titles, using slice and spread operator with a default value for N

const getLastNMovieTitles = (n = 3) =>
  [...movies.slice(-n)].map((movie) => movie.title);

// console.log(getLastNMovieTitles()); // Should print the last 3 movie titles
// console.log(getLastNMovieTitles(2)); // Should print the last 2 movie titles

// Q31: Write a function that accepts multiple movie IDs, fetches the titles, and returns a formatted string
// using the rest operator, nullish coalescing, and template literals Interesting

const getMovieTitlesByIds = (...movieIds) => {
  const titles = movieIds.flatMap(
    (id) => movies.find((movie) => movie.id === id)?.title ?? "Unknown Title"
  );
  return titles.length > 0
    ? `Selected Movies: ${titles.join(", ")}`
    : "No movies found with the given IDs";
};
// console.log(getMovieTitlesByIds(1, 3, 5));
// Should print: Selected Movies: Baahubali, Mahanati, Jersey
// console.log(getMovieTitlesByIds(1, 6));
// Should print: Selected Movies: Baahubali, Unknown Title
// console.log(getMovieTitlesByIds(5, 1));
// Should print: Selected Movies: Jersey, Baahubali,

// Q32: Write a function that accepts any number of movies and returns a formatted string listing their
// titles and genres using the rest operator, nullish coalescing, and template literals Interesting

const listMovies = (...allMovies) => {
  return [allMovies]
    .flat()
    .map(
      (x) => `${x?.title ?? "Unknown Title"} (${x?.genre ?? "Unknown Genre"})`
    )
    .join(" , ");
};

// console.log(listMovies(...movies));
// Should print: Baahubali (Action), Arjun Reddy (Drama), Mahanati (Biography), Eega (Fantasy), Jersey (Sports)
// console.log(listMovies(movies[0], movies[1], movies[111]));
// Should print: Baahubali (Action), Arjun Reddy (Drama), Unknown Title (Unknown Genre)

// Q33: Write a function that calculates the total number of ratings for each director Challenging
// Ex81 -
const getTotalRatingsForDirectors = () => {
  return movies.reduce((acc, movie) => {
    acc[movie.director] = (acc[movie.director] || 0) + movie.ratings.length;
    return acc;
  }, {});
};

// console.log(getTotalRatingsForDirectors());
// Should print: { "S. S. Rajamouli": 6, "Sandeep Reddy Vanga": 3, "Nag Ashwin": 3, "Gowtam Tinnanuri": 3 }

// Q34: Write a function that returns an array of genres sorted by the total number of ratings
// received by movies in that genre Challenging

const getGenresSortedByTotalRatings = () => {
  const genreRatings = movies.reduce((acc, movie) => {
    if (acc[movie.genre]) {
      acc[movie.genre] += movie.ratings.length;
    } else {
      acc[movie.genre] = movie.ratings.length;
    }
    return acc;
  }, {});

  return Object.entries(genreRatings)
    .sort(([, a], [, b]) => b - a)
    .map(([genre]) => genre);
};

// console.log(getGenresSortedByTotalRatings()); // Should print genres sorted by total ratings

// Q35: Write a function that returns an array of movie titles directed by directors who have directed
// more than one movie Challenging

function getTitlesByDirectorsWithMultipleMovies() {
  const directors = movies.reduce((acc, movie) => {
    if (acc[movie.director]) {
      acc[movie.director]++;
    } else {
      acc[movie.director] = 1;
    }
    return acc;
  }, {});
  const multiDirectors = Object.keys(directors).filter(
    (director) => directors[director] > 1
  );

  return movies
    .filter((movie) => multiDirectors.includes(movie.director))
    .map((movie) => movie.title);
}

// console.log(getTitlesByDirectorsWithMultipleMovies()); // Should print: ["Baahubali", "Eega"]

// Q36: Write a function that calculates the total number of ratings for each genre and returns the
// genre with the highest total ratings Challenging

const getGenreWithHighestTotalRatings = () => {
  const genreRatings = movies.reduce((acc, movie) => {
    if (acc[movie.genre]) {
      acc[movie.genre] += movie.ratings.length;
    } else {
      acc[movie.genre] = movie.ratings.length;
    }
    return acc;
  }, {});

  const highestRatingsGenre = Object.entries(genreRatings).reduce(
    ([genreA, ratingA], [genreB, ratingB]) =>
      ratingA > ratingB ? [genreA, ratingA] : [genreB, ratingB]
  );

  return highestRatingsGenre[0];
};

// console.log(getGenreWithHighestTotalRatings()); // Should print the genre with the highest total ratings

// Q37: Write a function that returns an array of directors who have directed movies with an
// average rating above a certain value Challenging

function getDirectorsWithHighAverageRatings(threshold) {
  const directorsTotalRatings = movies.reduce((acc, movie) => {
    acc[movie.director] =
      (acc[movie.director] || 0) + movie.ratings.reduce((a, b) => a + b);
    return acc;
  }, {});

  const directorMovieCounts = movies.reduce((acc, movie) => {
    acc[movie.director] = (acc[movie.director] || 0) + 1;
    return acc;
  }, {});

  return Object.keys(directorsTotalRatings).filter((director) => {
    const totalRatings = directorsTotalRatings[director];
    const movieCount = directorMovieCounts[director];
    return totalRatings / movieCount >= threshold;
  });
}
// console.log(getDirectorsWithHighAverageRatings(8.5)); // Should print directors with high average ratings

// Q38: Write a function that updates a movie's genre and ratings by ID, using object destructuring,
// spread operator, and default values Challenging

function updateMovieDetails(movie) {
  const { id } = movie;
  return movies.map((movie) =>
    movie.id === id
      ? {
          ...movie,
          genre: newGenre,
          ratings: newRatings.length > 0 ? newRatings : movie.ratings,
        }
      : movie
  );
}

// console.log(updateMovieDetails(2, { genre: "Romance", ratings: [10, 9, 8] }));
// Should print updated Arjun Reddy
// console.log(updateMovieDetails(6, { genre: "Thriller" }));
// Should print: Movie not found

// Q39: Update or add a movie based on the id Challenging

function updateOrAddMovie(newMovie) {
  const { id, title, director, year, ratings, genre } = newMovie;
  const movieIndex = movies.findIndex((movie) => movie.id === id);

  if (movieIndex === -1) {
    // Add a new movie
    return [...movies, newMovie];
  } else {
    // Update an existing movie
    return movies.map((movie) =>
      movie.id === id
        ? {
            ...movie,
            title,
            director,
            year,
            ratings,
            genre,
          }
        : movie
    );
  }
}

// console.log(
//   updateOrAddMovie({
//     id: 6,
//     title: "Pushpa",
//     director: "Sukumar",
//     year: 2021,
//     ratings: [8, 9, 8],
//     genre: "Action",
//   })
// );
// // Should add Pushpa to the list
// console.log(
//   updateOrAddMovie({
//     id: 5,
//     title: "Jersey",
//     director: "Gowtam Tinnanuri",
//     year: 2019,
//     ratings: [10, 10, 9],
//     genre: "Sports",
//   })
// );
// Should update Jersey's ratings in the list

// const curriedMultiply = (a) => (b) => a * b;
// const double = curriedMultiply(2);
// console.log(double(5)); // Output: 10

const CArea = (l) => (b) => (h) => l * b * h;
// console.log(CArea(1)(2)(3));

function fullname() {
  return `${this.firstname} ${this.lastname}`;
}

const stud1 = {
  firstname: "Nithin",
  lastname: "Madduri",
  fullname,
};
// console.log(fullname.apply(stud1));
