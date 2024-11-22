📒 In MongoDB, the "use" command is a shell command used to switch between databases or create a new database.

✍️ Example -->>  
```
✅ use CrudDb  
✅ db.users.insert({ name: "John Doe", age: 30 })
```
✨ In this example:  
✏️ use CrudDb switches to the CrudDb database.  
✏️ db.users.insert() creates a new collection named users and inserts a document into it, creating the CrudDb database if it didn’t already exist.

📒 In MongoDB, the db.createCollection() method is used to explicitly create a collection in the current database.
```
✅ db.createCollection("courses")  
✏️ This creates a collection named courses in the current database.
```
✍️ Syntax:--  
```
✅ db.createCollection(name, options)  
```
✏️ name: (string) The name of the collection to create.  
✏️ options: (optional object) Configuration settings for the collection.

⭐ Example: With Options  
➡️ You can include various options like capped, size, and max:
```
✔️ db.createCollection("courses", {  
    capped: true,  
    size: 100000,   // Maximum size in bytes  
    max: 100        // Maximum number of documents   
})

🖋️ capped: If true, creates a capped collection—a fixed-size collection that overwrites its oldest     entries when it reaches its size limit.  
🖋️ size: Specifies the maximum size (in bytes) for the capped collection.  
🖋️ max: Specifies the maximum number of documents in the capped collection
```

✍️ Insert Command :-->>  
```
➡️ db.courses.insertOne({}) -->> This inserts a single document into the courses collection.
```
➡️ Example:  
```
✏️ db.courses.insertOne({
    name: "Harrys web dev free course",
    price: 0,
    assignments: 12,
    projects: 45
})
```
➡️ If successful, MongoDB will return a response similar to:  
```
✏️{
  acknowledged: true,
  insertedId: ObjectId("some_unique_id")
}
```
✅ acknowledged: Confirms the insertion was successful.  
✅ insertedId: The unique _id assigned to the document.

⭐ MongoDB automatically adds a unique _id field to the document if none is provided.


✍️ Insert Multiple Entries:-->>  
➡️ db.courses.insertMany([{}]) -->> This inserts multiple documents into the courses collection.
```
➡️ Example:-->>
✏️ db.courses.insertMany([
    {
        "price": 0,
        "name": "Python Masterclass",
        "assignments": 10,
        "projects": 30
    },
    {
        "name": "JavaScript Basics",
        "price": 0,
        "assignments": 8,
        "projects": 20
    },
    {
        "name": "C# for Beginners",
        "price": 0,
        "assignments": 15,
        "projects": 40
    },
    {
        "name": "Web Development Fundamentals",
        "price": 0,
        "assignments": 12,
        "projects": 35
    },
    {
        "name": "Java Programming Essentials",
        "price": 0,
        "assignments": 14,
        "projects": 38
    },
    {
        "name": "ReactJS Crash Course",
        "price": 0,
        "assignments": 10,
        "projects": 25
    },
    {
        "name": "SQL Simplified",
        "price": 0,
        "assignments": 12,
        "projects": 30
    },
    {
        "name": "Responsive Web Design",
        "price": 0,
        "assignments": 10,
        "projects": 28
    },
    {
        "name": "Node.js for Beginners",
        "price": 0,
        "assignments": 13,
        "projects": 36
    },
    {
        "name": "Frontend Development with Vue.js",
        "price": 0,
        "assignments": 11,
        "projects": 32
    }
])
```

⭐ Atomicity: insertMany ensures that either all documents are inserted or none if an error occurs (unless ordered: false is set).


✍️ Read The Entries:-->>
```  
➡️ let a = db.courses.find({price: 0}) 
```  
✅db.courses: Refers to the courses collection in the database.  
✅ find({price: 0}): Queries the courses collection to retrieve all documents where the price field is 0.  
✅ The result is a cursor, not the actual data.  
✅ A cursor is an object that points to the documents matching the query in the database.
```
➡️ console.log(a)  
```
✅ Logs the cursor object a.   
✅ You won't see the actual documents; instead, you'll get information about the cursor.
```
➡️ console.log(a.count())  
```
✅ This tries to invoke the count() method on the cursor a.  
✨ Problem:  
✅ In modern MongoDB drivers and versions of the MongoDB shell, the .count() method is deprecated and no longer directly available on cursors.  
✅ Instead, you can use db.courses.countDocuments({price: 0}) to count documents matching the query.
```
➡️ console.log(a.toArray())   
```
✅ a.toArray(): Converts all the documents the cursor points to into an array.   
✅ This allows you to view or manipulate the query results as a JavaScript array.  
✅ Problem: toArray() is asynchronous in most environments, so you would need to handle it with await or .then() in modern JavaScript.

    ✨ Example with await:
        ✏️ let a = db.courses.find({price: 0});
        ✏️ let array = await a.toArray();
        ✏️ console.log(array);


✍️ Update Single Entries:-->>  
➡️ db.collection_name.updateOne() , here collection name is courses then the syntax will be db.courses.updateOne()
```
➡️ Syntax :-->>  
✏️ db.collection.updateOne(
        <filter>,       // Filter criteria (e.g., {field: value})
        <update>,       // Update operation (e.g., {$set: {field: value}})
        <options>       // Optional (e.g., {upsert: true})
    )

✅ Purpose: Updates one document that matches the filter criteria.  
✅ Behavior: Stops searching after finding the first match.
```

✨ Example 1:-->>  
```
    ✏️ db.courses.updateOne(
            { price: 0 },  // Filter: Finds the document where price is 0
            { $set: { price: 100 } }  // Update: Sets the price to 100
        )
```
    ✅ Filter: { price: 0 } ensures that only documents where the price equals 0 will be considered for updating.
    ✅ Update: The $set operator modifies the specified field (price) without affecting other fields in the document.

    📒 Initial Entry:--
        🖋️ {
                "_id": {
                    "$oid": "673de34a42199e4d0e42e08e"
                },
                "name": "Harrys web dev free course",
                "price": 0,
                "assignments": 12,
                "projects": 45
            }
    📒 Output:--
        🖋️ {
                "_id": {
                    "$oid": "673de34a42199e4d0e42e08e"
                },
                "name": "Harrys web dev free course",
                "price": 100,
                "assignments": 12,
                "projects": 45
            }

✨ Example 2:-->>
    ✏️ db.courses.updateOne(
            {name: "Python Masterclass"}, 
            {$set:{active: true} }
        )

    ✅ Here first it will search the first occurence of "Python Masterclass" then it set at attribute active :true , suppose if there is no attributr as active then it will create an attribute named "active" under the "Python Masterclass" and set it "true"

    📒 Initial Entry:--
        🖋️ {
                "_id": {
                    "$oid": "673de4a006c9cf3e9fdce412"
                },
                "price": 1000,
                "name": "Python Masterclass",
                "assignments": 10,
                "projects": 30,
            }
    📒 Output:--
        🖋️ {
                "_id": {
                    "$oid": "673de4a006c9cf3e9fdce412"
                },
                "price": 1000,
                "name": "Python Masterclass",
                "assignments": 10,
                "projects": 30,
                "active": true
            }


✨ Example 3:-->>  

    ✏️ db.courses.updateOne(
            {age: 35},  // Filter: Find document with age 35 (doesn't exist)
            {$set: { name: "Eve" } }, // Update: Set name to "Eve"
            { upsert: true }  // Insert a new document if no match is found
        )

    ✅ No document matches the filter, so a new document is inserted.

    📒 Output:--
        🖋️ {
                "_id": {
                    "$oid": "673ee77d5373b2fc43bde7e0"
                },
                "age": 35,
                "name": "Eve"
            }



✍️ Update Multiple Entries:-->>  
```
➡️ db.collection.updateMany()

➡️ Syntax :-->>   
✏️ db.collection.updateMany(
        <filter>,       // Filter criteria (e.g., {field: value})
        <update>,       // Update operation (e.g., {$set: {field: value}})
        <options>       // Optional (e.g., {upsert: true})
    )

✅ Purpose: Updates all documents that match the filter criteria.  
✅ Behavior: Continues searching and updating all matching documents.
```

✨ Example 1:-->>  
```
✏️ db.courses.updateMany(
        { price: 0 },  // Filter: Finds all documents where price is 0
        { $set: { price: 1000 } } // Update: Sets the price to 1000
    )

📒 Example Before and After:  
  ✔️ Before:  
    🖋️ [
            { "_id": 1, "name": "Course A", "price": 0 },
            { "_id": 2, "name": "Course B", "price": 0 },
            { "_id": 3, "name": "Course C", "price": 200 }
        ]

  ✔️ After:  
    🖋️ [
            { "_id": 1, "name": "Course A", "price": 1000 },
            { "_id": 2, "name": "Course B", "price": 1000 },
            { "_id": 3, "name": "Course C", "price": 200 }
        ]
```

✍️ Delete Single Entries:-->>  
➡️ deleteOne()  
✅ Purpose: Deletes one document that matches the filter criteria.  
✅ Behavior: Stops after deleting the first matching document.
```
➡️ Syntax:  
    ✏️ db.collection.deleteOne(
            <filter>,   // Criteria for selecting the document to delete
            <options>   // Optional, e.g., { collation: ... }
        )
```
✨ Example:  
```
➡️ Initial Collection (courses):  
    ✏️ [
        { "_id": 1, "name": "Course A", "price": 1000 },
        { "_id": 2, "name": "Course B", "price": 1000 },
        { "_id": 3, "name": "Course C", "price": 500 }
    ]

➡️ Query:  
✏️ db.courses.deleteOne({ price: 1000 })

➡️ Updated Collection:  
✏️ [
  { "_id": 2, "name": "Course B", "price": 1000 },
  { "_id": 3, "name": "Course C", "price": 500 }
]
```


✍️ Delete Single Entries:-->>  
➡️ deleteMany()  
✅ Purpose: Deletes all documents that match the filter criteria.  
✅ Behavior: Continues searching and deleting all matching documents.

```
➡️ Syntax:  
✏️ db.collection.deleteMany(
        <filter>,   // Criteria for selecting documents to delete
        <options>   // Optional, e.g., { collation: ... }
    )
```

✨ Example: 
```
➡️ Initial Collection (courses):  
✏️ [
  { "_id": 1, "name": "Course A", "price": 1000 },
  { "_id": 2, "name": "Course B", "price": 1000 },
  { "_id": 3, "name": "Course C", "price": 500 }
]

➡️ Query:  
✏️ db.courses.deleteMany({ price: 1000 })

➡️ Updated Collection:  
  ✏️ [
        { "_id": 3, "name": "Course C", "price": 500 }
     ]
```