// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");


function buildTable(data) {
  tbody.html(""); // clears data


  data.forEach((dataRow) => { 
    let row = tbody.append("tr");
  
    Object.values(dataRow).forEach((val) => { 
      // dataRow -> values go into dataRow
      // the forEach((val) specifies we want one object per row
      let cell = row.append("td");
      // ^set up the action of appending data into table data tag <td>
      cell.text(val); 
      // actual addition of values into the data tag
    });
  
   }); 
   // ^ With this function, we have done the following:
  // Looped through each object in the array
  // Appended a row to the HTML table
  // Added each value from the object into a cell
}

function handleClick() {
  let date = d3.select("#datetime").property("value");
  // d3 is similar to html that is why it looks different
  // .select() will pick the very first element that matches selector string
    // ex. "#datetime"
  // .property() is grabbing the information that we are selecting and storing
    // it as our variable date
  
  let filteredData = tableData;
  // tableData is our raw data from data.js
  // did I need to define this before or is this already a specific defined
    // w/in JavaScript????
  
  if (date) {
    filteredData = filteredData.filter(row => row.datetime === date);
  };


  // Rebuild the table using the filtered data
  // @NOTE: If no date was entered, then filteredData will
  // just be the original tableData.
  buildTable(filteredData);
};

d3.selectAll("#filter-btn").on("click", handleClick);

// builds table when the page loads
buildTable(tableData);


