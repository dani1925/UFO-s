// from data.js
const tableData = data;

// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}

// 1. Create a variable to keep track of all the filters as an object.
let data_filter= {};

// 3. Use this function to update the filters. 
function updateFilters() {

    // 4a. Save the element that was changed as a variable.
      let element = d3.select(this)
    // 4b. Save the value that was changed as a variable.
     let element_val = element.property("value");
    // 4c. Save the id of the filter that was changed as a variable.
    let element_id = element.attr("id")

    // 5. If a filter value was entered then add that filterId and value
    // to the filters list. Otherwise, clear that filter from the filters object.

    if (element_val){
        data_filter[element_id]= element_val;
    }
    else{
      delete data_filter[element_id];
    }
 
  
    // 6. Call function to apply all filters and rebuild the table
    filterTable();
  
  }
  // 7. Use this function to filter the table when data is entered.
  function filterTable() {
  
    // 8. Set the filtered data to the tableData.
    let filteredData = tableData;

    console.log("in filterDAta function")

    // 9. Loop through all of the filters and keep any data that
    // matches the filter values

    for(let i in data_filter){

      if (i === "datetime"){
        filteredData = filteredData.filter(key => key.datetime === data_filter[i]);
        console.log("date time changed")
      }
      else if (i === "city"){
        filteredData = filteredData.filter(key => key.city === data_filter[i]);
        console.log("city changed")
      }
      else if (i === "state"){
        filteredData = filteredData.filter(key => key.state === data_filter[i]);
        console.log("state changed")

      }
      else if (i === "country"){
        filteredData = filteredData.filter(key => key.country === data_filter[i]);
        console.log("country changed")

      }
      else if (i === "shape"){
        filteredData = filteredData.filter(key => key.shape === data_filter[i]);
        console.log("shape changed")
      }

        console.log("Done for")
    };
    
  
    // 10. Finally, rebuild the table using the filtered data
     buildTable(filteredData)
  };
  
  // 2. Attach an event to listen for changes to each filter
  d3.selectAll("input").on("change",updateFilters);
  
  // Build the table when the page loads
  buildTable(tableData);
