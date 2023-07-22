const printDateBtn = document.getElementById('todaysDate');
// 1. write a funtion that prints the current date
function printCurrentDate(format) {
    // 1. Create a new date object
    let date = new Date();
    // 2. Print the date in the specified format
    if (format === 'mm-dd-yyyy') {
        alert('Current date is: ' + (date.getMonth() + 1) + '-' + date.getDate() + '-' + date.getFullYear());
    }
    else if (format === 'mm/dd/yyyy') {
        alert('Current date is: ' + (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear());
    }
    else if (format === 'dd-mm-yyyy') {
        alert('Current date is: ' + date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear());
    }
    else if (format === 'dd/mm/yyyy') {
        alert('Current date is: ' + date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear());
    }
    else {
        alert('Current date is: ' + (date.getMonth() + 1) + '-' + date.getDate() + '-' + date.getFullYear());
    }
}
printDateBtn.addEventListener('click', printCurrentDate);

// q: what did we do above?
// a: we created a function that prints the current date in the specified format
// q: then?
// a: we added an event listener to the button that calls the function when the button is clicked
// q: can you tell me more about the function we created above
// a: sure, we created a function that takes in a parameter called format
// q: what is a parameter?
// a: a parameter is a variable that is used to pass data into a function
// q: what is the difference between a parameter and an argument?
// q: continue on on the printCurrentDate function
// a: sure, so we created a new date object
// q: and then?
// a: we printed the date in the specified format
// q: how did we do that?
// a: we used the getMonth(), getDate(), and getFullYear() methods to get the month, date, and year respectively
// q: what is the difference between getMonth() and getMonth() + 1?
// a: getMonth() returns the month in the range 0-11, while getMonth() + 1 returns the month in the range 1-12