 /** 
Sample Output : Today is : Tuesday.
Current time is : 10 PM : 30 : 38
*/

//1. Create a new date object
let date = new Date();
//2. Get the day of the week
let day = date.getDay();   
//3. Get the current time
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
let ampm = hours >= 12 ? 'PM' : 'AM';
//4. Create an array of days of the week
let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//5. Print the day of the week
console.log('Today is: ' + days[day]);
console.log('Current time is: ' + hours + ' ' + ampm + ' : ' + minutes + ' : ' + seconds);
