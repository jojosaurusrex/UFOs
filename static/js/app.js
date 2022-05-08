// // import the data from data.js
// const tableData = data;

// // Reference the HTML table using d3
// var tbody = d3.select("tbody");

// Simple JavaScript console.log statement
function printHello() {
    console.log("Hello there!");
  }

  // Takes two numbers and adds them
// function addition(a, b) {
//   return a + b;
// }
printHello();
// ^Converted to an arrow function
addition = (a, b) => a + b;

// Functions can call other functions
// function doubleAddition(c, d) {
//   var total = addition(c, d) * 2;
//   return total;
// }

// ^Converted to an arrow function
doubleAddition = (c, d) => addition(c, d)*2;

function buildTable(data) {
  tbody.html(""); // clears data


  data.forEach((dataRow) => { 
    let row = tbody.append("tr");
  
    Object.values(dataRow).forEach((val) => { // dataRow -> values go into dataRow
      // the forEach((val) specifies we want one object per row
      let cell = row.append("td");
      // ^set up the action of appending data into table data tag <td>
      cell.text(val); // actual addition of values into the data tag
    });
  
   }); 
   // ^ With this function, we have done the following:
  // Looped through each object in the array
  // Appended a row to the HTML table
  // Added each value from the object into a cell
}


