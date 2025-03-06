//A callback is a function that is passed as an argument to another function and is executed after some operation is completed. It's commonly used for handling asynchronous tasks in JavaScript, like reading a file, fetching data from an API, or waiting for user input.


function greet(name, callback) {
    console.log("Hello, " + name);
    callback();  // calling the callback function
}

function afterGreeting() {
    console.log("Good to see you!");
}

greet("siri", afterGreeting);
// output Hello, siri
//Good to see you!


//A Promise is an object representing the eventual completion (or failure) of an asynchronous operation. It allows you to attach .then() 
// for success and .catch() for failure. Promises are more powerful and cleaner than callbacks, especially when dealing with multiple asynchronous operations.

//A promise can be:Pending &  Resolved

function fetchData() {
    return new Promise((resolve, reject) => {
        const success = true; // simulate success or failure

        setTimeout(() => {
            if (success) {
                resolve("Data fetched successfully");
            } else {
                reject("Failed to fetch data");
            }
        }, 1000);
    });
}

fetchData()
    .then(response => {
        console.log(response);  // Success: "Data fetched successfully"-- promise
    }) 
    .catch(error => {
        console.log(error);  // Error: "Failed to fetch data" 
    });

//async: You declare a function as asynchronous using the async keyword. This allows you to use the await keyword inside it.
  function fetchData() {
        return new Promise((resolve, reject) => {
            const success = true;
    
            setTimeout(() => {
                if (success) {
                    resolve("Data fetched successfully");
                } else {
                    reject("Failed to fetch data");
                }
            }, 1000);
        });
    }
 //await: You can use the await keyword inside an async function to pause execution until a promise is resolved or rejected.
     
    async function getData() {
        try {
            const response = await fetchData();  // Waits for the promise to resolve
            console.log(response);  // Success: "Data fetched successfully"
        } catch (error) {
            console.log(error);  // Error: "Failed to fetch data"
        }
    }
    
    getData();
    