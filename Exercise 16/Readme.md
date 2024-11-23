# 1. Modules and Setup
```
const express = require('express')
const app = express()
const mongoose = require('mongoose');
const Employee = require("./models/Employee")
```
➞ Express: Used for creating the web server and handling HTTP requests.  
➞ Mongoose: A library for MongoDB, used here to define and interact with the "Employee" model.  
➞ Employee: The Mongoose model imported from another file, likely defining the schema for employee documents.  

### Initializing the Express App
```
const app = express()
```
➞ express(): A function provided by the Express library that creates an instance of an Express application.  
➞ This app object serves as the central object in an Express application.  
➞ It is used to define routes, middleware, and handle server configuration.  
➞ The app object provides methods like:  
&emsp;&emsp;✔️ app.get(path, handler): Define a route that listens for HTTP GET requests.  
&emsp;&emsp;✔️ app.post(path, handler): Define a route for HTTP POST requests.  
&emsp;&emsp;✔️ app.use(middleware): Add middleware to process incoming requests.  
&emsp;&emsp;✔️ app.listen(port, callback): Start the server and listen on a specific port.  

# 2. MongoDB Connection
```
conn = mongoose.connect('mongodb://127.0.0.1:27017/company');
```
✔️ Connects to a local MongoDB instance on the company database. If the company database doesn't exist, MongoDB creates it when data is first written.

# 3. Express Application Settings
```
app.set('view engine', 'ejs');
```
✔️ Sets the view engine to EJS (Embedded JavaScript), allowing dynamic rendering of HTML templates.

# 4. Helper Function
```
const getRandom = (arr) => {
    let rno = Math.floor(Math.random() * (arr.length - 1))
    return arr[rno]
}
```
✅ getRandom(arr):  
&emsp;&emsp;✔️ Accepts an array as input.   
&emsp;&emsp;✔️ Returns a random element from the array.  
✅ Math.random() generates a random number between 0 and 1.  
✅ Multiplying by (arr.length - 1) ensures the index stays within bounds.  
✅ Math.floor() ensures the result is an integer.  

# 5. Root Route
```
app.get('/', (req, res) => {
    res.render('index', { foo: 'FOO' });
})
```
✅ Handles GET / requests.  
✅ Renders the index.ejs template, passing { foo: 'FOO' } as data.

# 6. Generate Route
```app.get('/generate', async (req, res) => {
    // Clear the collection Employee
    await Employee.deleteMany({})

    let randomNames = ['Rohan', "Sohan", "Mohan", "Sobhan"]
    let randomLang = ["Python", "js", "C++", "Java"]
    let randomCities = ["Bilaspur", "Moradabad", "Mysore", "Kolkata"]

    for (let index = 0; index < 10; index++) {

        let e = await Employee.create({

            name: getRandom(randomNames),
            salary: Math.floor(Math.random() * 22000),
            language: getRandom(randomLang),
            city: getRandom(randomCities),
            isManager: (Math.random() > 0.5) ? true : false
        })

        console.log(e)
    }
```
✅ app.get('/generate', ...): Defines a route that listens for GET requests at the /generate endpoint.  
✅ async (req, res): The handler function is asynchronous because it uses await for database operations.  
### Clear the Database
```
await Employee.deleteMany({});
```
✅ Employee.deleteMany({}):  
&emsp;&emsp;✔️ Deletes all documents in the Employee collection in MongoDB.  
&emsp;&emsp;✔️ Ensures the database starts fresh for each /generate call.  

### Data Arrays for Random Selection
```
let randomNames = ['Rohan', "Sohan", "Mohan", "Sobhan"];
let randomLang = ["Python", "js", "C++", "Java"];
let randomCities = ["Bilaspur", "Moradabad", "Mysore", "Kolkata"];
```
✅ Arrays define random options for:  
&emsp;&emsp;✔️ randomNames: Names of employees.  
&emsp;&emsp;✔️ randomLang: Programming languages associated with employees.  
&emsp;&emsp;✔️ randomCities: Cities where employees reside.  

### Generate and Save Employee Records
```
for (let index = 0; index < 10; index++) {
    let e = await Employee.create({
        name: getRandom(randomNames),
        salary: Math.floor(Math.random() * 22000),
        language: getRandom(randomLang),
        city: getRandom(randomCities),
        isManager: (Math.random() > 0.5) ? true : false
    });
    console.log(e);
}
```
✅ Loop: Runs 10 iterations to generate 10 employee records.  
✅ await Employee.create({...}): Creates and saves a new employee document in the MongoDB collection with the following fields:  
&emsp;&emsp;✔️ name: Randomly selected from randomNames using getRandom().  
&emsp;&emsp;✔️ salary: A random number between 0 and 21,999 using Math.random() and Math.floor().  
&emsp;&emsp;✔️ language: Randomly selected from randomLang using getRandom().  
&emsp;&emsp;✔️ city: Randomly selected from randomCities using getRandom().  
&emsp;&emsp;✔️ isManager: Boolean value; true if a random number is greater than 0.5, otherwise false.  
✅ console.log(e): Logs the newly created employee document to the console for debugging.