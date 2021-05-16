// from data.js
var tableData = data;

// YOUR CODE HERE!
    var tbody = d3.select("tbody");
    console.log(data);

        data.forEach(function(sighting) {
            console.log(sighting);
    });

        data.forEach(function(sighting) {
            console.log(sighting);
            var row = tbody.append("tr");
            Object.entries(sighting).forEach(function([key, value]) {
                console.log(key, value);
                var cell = row.append("td");
                cell.text(value);
            });
});

var button = d3.select("#button");
var form = d3.select("#form");


form.on("submit",runEnter);

function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
  
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
  
    console.log(inputValue);
    console.log(tableData);
  
    var filteredData = tableData.filter(answer => answer.datetime === inputValue);
  
    console.log(filteredData);
};
