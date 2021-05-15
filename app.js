// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("ufo-table");
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
       });
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