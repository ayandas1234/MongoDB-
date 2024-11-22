✅ Custom scripts in package.json are user-defined commands that can be executed using the npm run command. They are used to automate tasks such as building your project, running tests, starting servers, linting code, or any other repetitive process.

## ✍️ Where Are Scripts Defined?  
✏️ Custom scripts are added under the "scripts" field in the package.json file.

### ✨ Example:
```
{
  "name": "my-app",
  "version": "1.0.0",
  "scripts": {
    "start": "node index.js",
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack",
    "dev": "nodemon index.js",
    "lint": "eslint ."
  },
  "dependencies": {}
}
```
### ➡️ Purpose of Custom Scripts
Custom scripts allow you to:  
🖋 Run predefined commands with simple aliases.  
🖋 Avoid typing long terminal commands repeatedly.  
🖋 Simplify project workflows for all contributors.  

## ✍️ How to Use Custom Scripts
✏️ Run a script using:
```
npm run <script-name>
```
### ✨ Example:
```
npm run dev
```
✅ If the script is named start, you can run it with just npm start (no run keyword is required).


# ✍️ Examples of Custom Scripts
### 1️⃣ Starting a Server:
```
{
  "scripts": {
    "start": "node server.js"
  }
}
```
✏️ Command: npm start  
✏️ Starts the server defined in server.js.  

### 2️⃣ Running in Development Mode:
```
{
  "scripts": {
    "dev": "nodemon server.js"
  }
}
```
✏️ Command: npm run dev  
✏️ Uses nodemon to restart the server automatically whenever code changes. 

### 3️⃣ Linting Code:
```
{
  "scripts": {
    "lint": "eslint ."
  }
}
```
✏️ Command: npm run lint  
✏️ Runs ESLint to check for code quality and style issues. 

### 4️⃣ Building a Project:
```
{
  "scripts": {
    "build": "webpack --mode production"
  }
}
```
✏️ Command: npm run build  
✏️ Bundles the project using Webpack in production mode. 

### 5️⃣ Running Tests:
```
{
  "scripts": {
    "test": "mocha"
  }
}
```
✏️ Command: npm test  
✏️ Runs tests using the Mocha framework. 
