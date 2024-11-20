

// Select the database to use.
use('SigmaDatabase');

// Insert a few documents into the courses collection.
db.getCollection('courses').insertMany([
    {
      "name": "Java",
      "price": 20000,
      "instructor": "Harry"
    },
    {
      "name": "Python",
      "price": 15000,
      "instructor": "Alice"
    },
    {
      "name": "JavaScript",
      "price": 18000,
      "instructor": "Bob"
    },
    {
      "name": "C++",
      "price": 22000,
      "instructor": "Charlie"
    },
    {
      "name": "Ruby",
      "price": 17000,
      "instructor": "David"
    },
    {
      "name": "Go",
      "price": 21000,
      "instructor": "Eva"
    }
  ]
);

// Print a message to the output window.
console.log(`Done Inseriing Data`);
