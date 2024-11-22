☑️ Separating Mongoose schemas into a models folder in a Node.js project is a widely adopted convention for organizing code. Here's why this practice is beneficial:  
    1️⃣ Separation of Concerns  
    2️⃣ Improved Code Readability  
    3️⃣ Easier Maintenance  
    4️⃣ Better Scalability  
    5️⃣ Reusability  
    6️⃣ Consistency  
    7️⃣ Centralized Structure  

✅ This code defines a Mongoose schema and model for a "Todo" entity, which can be used to interact with a MongoDB database in a Node.js application. Here's a detailed explanation:  

 1️⃣ Importing Mongoose:  

    📝 import mongoose from "mongoose"; 

    ✏️ This imports the Mongoose library, which is used to interact with MongoDB in a structured and object-oriented way.  

    ✏️ Mongoose provides tools to define schemas, models, and methods for managing data in MongoDB.  
 2️⃣ Defining the Schema:  

    📝 const TodoSchema = new mongoose.Schema({
        title: String,
        desc: String,
        isDone: Boolean,
        days: Number
    });

    ✏️ TodoSchema: A schema is a blueprint that defines the structure of a document in a MongoDB collection.  

    The schema specifies the fields that documents in the "Todo" collection will have, along with their types:
    ✏️ title: String
        A string representing the title of the todo item.
    
    ✏️ desc: String
        A string containing a description or details about the task.

    ✏️ isDone: Boolean
        A boolean value indicating whether the task is completed (true) or not (false).

    ✏️ days: Number
        A numeric field for tracking the number of days associated with the task (e.g., deadline or duration).


 3️⃣ Creating the Model:

    📝 export const Todo = mongoose.model('Todo', TodoSchema);

    ✏️ A model is created using the mongoose.model method.

    ✏️ The first argument, 'Todo', is the name of the model.
    
    ✏️ Mongoose will automatically create a collection named todos in the database (lowercase, pluralized by default).

    ✏️ The second argument, TodoSchema, specifies the schema that defines the structure of the documents in this collection.

    ✏️ export makes the model available for use in other parts of the application.

✅ Fields and Constraints:

    ✏️ title  
     ✒️ type: String: Specifies that the title field mustbe a string.  

     ✒️ required: true: Makes the field mandatory; itmust be provided when creating or updating adocument.  

     ✒️ default: "Hey": If no title is provided, thisdefault value will be used.

    🔥 Example:  
    🖋 const TodoSchema = new mongoose.Schema({
        title: {type: String, required: true, default: "Hey"},
        desc: String,
        isDone: Boolean,
        days: Number
    });


