// // 1.Removing the event listener from the button
// function handleClick() {
//     alert('Button clicked!');
//   }
  
//   const button = document.getElementById('myButton');
  
//   // Adding the event listener
//   button.addEventListener('click', handleClick);
  
//   // Removing the event listener after 5 seconds
//   setTimeout(function() {
//     button.removeEventListener('click', handleClick);
//     console.log('Event listener removed');
//   }, 5000);
  

  // 2.Removing the event listener from the button
function handleClick() {
    alert('Button clicked!');
  }
  
  const button = document.getElementById('myButton');
  
  // Adding the event listener
  button.addEventListener('click', handleClick);
  
  // Removing the event listener after 5 seconds
  setTimeout(function() {
    button.removeEventListener('click', handleClick);
    console.log('Event listener removed');
  }, 5000);
  

  //addEventListener: Attach an event listener to a DOM element.
//removeEventListener: Remove a previously attached event listener from a DOM element.
