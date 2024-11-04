console.log("Good Monday everyone!");

// JS POWER! Make your app suggest the user an activity 
const activities = [
  "Play dodgeball",
  "Go to the museum",
  "Go skying diving",
  "Play polish video games",
  "Go to Sushiro"
];

// 1. Select elements (that the user will interact with, that will change)
const button = document.querySelector(".inspire-me");
const activity = document.querySelector("#activity");

console.log("1. before the eventlistener");
// 2. Listen to a click on the button
button.addEventListener("click", (event) => {
  console.log("3. after the eventlistener");
  
  // const randomIndex = Math.floor(Math.random() * activities.length);
  // const randomActivity = activities[randomIndex];

  const url = 'https://bored.api.lewagon.com/api/activity/'
  fetch(url)
    .then(response => response.json())
    .then((data) => {
      console.log("5. the data arrives!");

      // 3. Change the DOM (display the activity)
      activity.innerText = data.activity;
    });

  console.log("4. after the fetch");

});

console.log("2. after the code");



// JS+API POWER! Fetch an activity with the Bored API - Let's pseudocode!

// ==> www.boredapi.com
const url = 'https://bored.api.lewagon.com/api/activity/'

// fetch(url)
//   .then(response => response.json())
//   .then((data) => {
//     console.log(data.activity); 
//   });