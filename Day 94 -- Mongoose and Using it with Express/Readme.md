✅ import mongoose from "mongoose"; -->> The code snippet imports mongoose using ES modules.

✅ To use import/export, set "type": "module" in your package.json

✅ The code snippet await mongoose.connect("mongodb://localhost:27017/") is valid for connecting to a MongoDB instance.

1. Importing Required Modules:  
```
    ✍️ import mongoose from "mongoose";  
    ✍️ import express from "express";
```
    ➡️ mongoose: A popular ODM (Object Data Modeling) library for MongoDB, used for schema-based interaction with the database.

    ➡️ express: A minimalist web framework for Node.js, used to handle routes and HTTP requests.

2. Connecting to MongoDB:  
```
    ✍️ await mongoose.connect("mongodb://localhost:27017/");
```
    ✅ mongoose.connect:  
    ➡️ Establishes a connection to the MongoDB instance running at localhost on port 27017.
    
    ➡️ No database name is specified, so MongoDB will use the default database (test).

3. Creating an Express Application: 
``` 
    ✍️ const app = express();  
    ✍️ const port = 3000;
```
    ➡️ app: An instance of an Express application that will be used to define routes and middleware.

    ➡️ port: The port number on which the server will listen for incoming requests.

4. Defining a Route: 
``` 
    ✍️ app.get('/', (req, res) => {  
        res.send('Hello World!');  
        });  
```
    ➡️ app.get: Defines a route handler for the HTTP GET request method at the root path (/).  
    ➡️ req: Represents the request object containing information about the HTTP request.  
    ➡️ res: Represents the response object used to send a response back to the client.  
    ➡️ res.send: Sends the string "Hello World!" as the response to the client when they access the root URL.  

5. Starting the Server:  
```
    ✍️ app.listen(port, () => {  
        console.log(`Example app listening on port ${port}`);  
    });
```
    ➡️ app.listen: Starts the Express server and listens for incoming requests on the specified port (3000 in this case).  
    ➡️ Callback Function: Logs a message to the console indicating that the server is running and listening.  



✅ Imports:--
```
➡️ import { Todo } from "./models/Todo.js";  

✏️ Todo: An imported model from ./models/Todo.js, representing a "Todo" collection in the MongoDB database.
```
✅ Database Connection:--  
```
➡️ let conn = await mongoose.connect("mongodb://localhost:27017/todo")

✏️ Connects to a MongoDB database running locally on port 27017, using a database named todo.

✏️ The await keyword ensures the connection is established before proceeding.
```

✅ Default Route (/):--  
```
➡️ app.get('/', (req, res) => { 
        const todo = new Todo({ title: "Hey first todo", desc: "Description of this todo", isDone: false })
        todo.save() 
        res.send('Hello World!')
    })

✏️ Route: Handles GET requests to the root URL (/).

✏️ Creating a Todo:
    ➞ A new document is created using the Todo model with the following fields:
        ➞ title: "Hey first todo"
        ➞ desc: "Description of this todo"
        ➞ isDone: false
    ➞ This document is saved to the database using the .save() method.

✏️ Response: Sends a plain-text response, "Hello World!", back to the client.
```


✅ Route /a:--  
```
➡️ app.get('/a', async (req, res) => { 
        let todo = await Todo.findOne({})
        console.log(todo)
        res.json({title: todo.title, desc: todo.desc})
    })

✏️ Route: Handles GET requests to /a.

✏️ Querying the Database:
    ➞ Uses Todo.findOne({}) to fetch the first document in the "Todo" collection.

✏️ Console Logging:
    ➞ Logs the fetched todo object to the console.

✏️ Response: Sends a JSON response to the client containing the title and desc fields of the fetched todo.
```