# JavaScript for Button Click
```
document.querySelector(".container>button").addEventListener("click", async () => {
  console.log("Yes")
  let a = await fetch("/generate")
  let r = await a.json()
  console.log(r)
})
```
✅ Selects the "Generate Now" button (.container>button) and adds a click event listener.  
✅ On Click:  
&emsp;&emsp;1️⃣ Logs "Yes" to the console.  
&emsp;&emsp;2️⃣ Sends an asynchronous HTTP GET request to the /generate route on the server using fetch().  
&emsp;&emsp;3️⃣ Awaits the server's response, which is expected to return JSON data.  
&emsp;&emsp;4️⃣ Logs the server's response to the console.  