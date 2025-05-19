//Async/Await Version of the Fetch Call

async function fetchWeather() {
  try {
    const response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m");

    // Check if the response was successful (status 200–299)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json(); // Parse the JSON response
    console.log("Weather data received:");
    console.log(data); // Do something with the data (e.g., display it)
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
}

// Call the function
fetchWeather();


//What You'll See in Console:
//{
 // "latitude": 52.52,
 // "longitude": 13.419998,
 // "hourly_units": { "temperature_2m": "°C", ... },
 // "hourly": {
   // "time": ["2025-05-18T00:00", ...],
   // "temperature_2m": [14.2, 13.5, 13.1, ...]
 // }
//}




















//function fetch () promise method//

//syntaxfetch("API_URL") // Returns a Promise
  //.then(response => {
    // This happens when the fetch promise resolves
   // return response.json(); // This also returns a Promise
  //})
  //.then(data => {
    // This happens when the response.json() promise resolves
   // console.log(data); // You now have the usable data
  //})
  //.catch(error => {
    // This runs if fetch fails (e.g. network error or thrown error above)
    //console.error(error);
  //});

//using promise method below
  //fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m")
  //.then(response => {
   // if (!response.ok) {
     // throw new Error(`HTTP error! status: ${response.status}`);
   // }
    //return response.json();
  //})
  //.then(data => {
    //console.log("✅ API Response received:");
    //console.log(data);
 // })
  //.catch(error => {
   // console.error("❌ Fetch error:", error);
  //});



 // ✅ What to Look For
//If the request works, you’ll see a JSON object logged in the console with hourly data including temperature_2m.

//If it fails, you’ll see an error like a 404, 500, or a CORS/network error.

//🛠 Common Debug Tips
//CORS Errors? If you see a CORS error in the browser, the issue is on the API or frontend origin — but Open-Meteo supports public use and CORS by default.

//Check status codes: Make sure you check for response.ok to confirm the request succeeded.

// Key Promise Concepts Used
//fetch() returns a Promise that resolves with a Response object.

//response.json() also returns a Promise that resolves to the parsed JSON.

//.then() is used to chain callbacks when Promises resolve.

//.catch() handles any errors thrown in the chain.


//🆚 Promises vs Async/Await
//Both of these do the same thing — handle asynchronous code — but the syntax is different.

//1. Promise Syntax

//fetch(url)
 // .then(response => response.json())
 // .then(data => console.log(data))
 // .catch(error => console.error(error));


 //2. Async/Await Syntax (Syntax Sugar for Promises)

//async function getData() {
 // try {
    //const response = await fetch(url);
    //const data = await response.json();
    //console.log(data);
 // } catch (error) {
   // console.error(error);
 // }
//}
//getData();
//Both versions:

//Use fetch() (returns a Promise)

//Handle response.json() (also returns a Promise)

//Do the same thing

//But async/await:

//Looks more like synchronous (top-to-bottom) code

//Is easier to read, especially for long chains of async operations

//🔧 Under the Hood
//When you use await, JavaScript is still using Promises — it's just hidden from you. The JavaScript engine rewrites the async/await code into a chain of Promises at runtime.