# For Using Space in HTML & Readme.md file-->>
 ![Space Manage](<Screenshot 2024-11-23 231449.png>)

# 1. Import Mongoose
```
const mongoose = require('mongoose');
```
➡️ Mongoose: A Node.js library that provides a schema-based solution for modeling MongoDB data. It simplifies interacting with the database by allowing you to define the structure of documents.

# 2. Define the Schema
```
const employeeSchema = new mongoose.Schema({
    name: String,
    salary: Number,
    language: String,
    city: String,
    isManager: Boolean
});
```
➡️ Schema: Defines the structure of documents in the MongoDB collection.  
➡️ employeeSchema: Specifies the fields (columns) and their data types:  
&emsp;&emsp;&emsp;✏️ name: A string representing the employee's name.  
&emsp;&emsp;&emsp;✏️ salary: A number representing the employee's salary.  
&emsp;&emsp;&emsp;✏️ language: A string representing the programming language associated with the employee.  
&emsp;&emsp;&emsp;✏️ city: A string representing the city where the employee resides.  
&emsp;&emsp;&emsp;✏️ isManager: A boolean indicating whether the employee is a manager (true or false).  

# 3. Create the Model
```
const Employee = mongoose.model('Employee', employeeSchema);
```
➡️ Model: A Mongoose model is a wrapper around the schema and provides an interface for interacting with the MongoDB collection.  
➡️ Employee:  
&emsp;&emsp;&emsp;✏️ Represents the "Employee" collection in MongoDB.  
&emsp;&emsp;&emsp;✏️ MongoDB automatically pluralizes the model name to create the collection name (employees).  

## The two Employee are not the same, but they are closely related.
### 📖 First Employee (the constant)
```
const Employee
```
✒️ This is a JavaScript variable defined using const.  
✒️ It stores the result of the mongoose.model() function call.  
✒️ This variable (Employee) represents the Mongoose model, which acts as an interface for interacting with the employees collection in the MongoDB database.

### 📖 FSecond 'Employee' (the argument)
```
mongoose.model('Employee', employeeSchema)
```
✒️ This is a string argument passed to mongoose.model().  
✒️ It specifies the name of the model.  
✒️ Mongoose uses this name to determine the collection name in the database. By default:  
```
    The name is converted to lowercase.  
    Pluralized (e.g., 'Employee' → employees).
```  

# 4. Export the Model
```
module.exports = Employee;
```
➡️ Exports the Employee model so it can be used in other files (e.g., the main application file).  
➡️ Other parts of the app can now use this model to:  
&emsp;&emsp;&emsp;🖋 Create new employee documents.  
&emsp;&emsp;&emsp;🖋 Query, update, or delete employee records.  

