
//  Citation for this code structure.
 
//  Date: 12/8/2024
 
//  Adapted from CS 340 nodejs-starter-app, step 8, add_person.js
//  values and data changes were made to adapt the website's theme
 
//  Source URL: https://github.com/osu-cs340-ecampus/nodejs-starter-app

// Get the objects we need to modify
let addWandForm = document.getElementById('add-wand-form-ajax');

// Modify the objects we need
addWandForm.addEventListener("submit", function (e) {

    // Prevent the form from submitting
    e.preventDefault();

    // Get form fields we need to get data from
    let inputLength = document.getElementById("input-length");
    let inputPrice = document.getElementById("input-price");
    let inputCore = document.getElementById("input-core");
    let inputWood = document.getElementById("input-wood");
    let inputTotalWandQuantity = document.getElementById("input-totalWandQuantity");

    // Get the values from the form fields
    let lengthValue = inputLength.value;
    let priceValue = inputPrice.value;
    let coreValue = inputCore.value;
    let woodValue = inputWood.value;
    let totalWandQuantityValue = inputTotalWandQuantity.value;

    // Put our data we want to send in a javascript object
    let data = {
        length: lengthValue,
        price: priceValue,
        core: coreValue,
        wood: woodValue,
        totalWandQuantity: totalWandQuantityValue
    }

    // Setup our AJAX request
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "/add-wand-ajax", true);
    xhttp.setRequestHeader("Content-type", "application/json");

    // Tell our AJAX request how to resolve
    xhttp.onreadystatechange = () => {
        if (xhttp.readyState == 4 && xhttp.status == 200) {

            // Add the new data to the table
            addRowToTable(xhttp.response);

            // Clear the input fields for another transaction
            inputLength.value = '';
            inputPrice.value = '';
            inputCore.value = '';
            inputWood.value = '';
            inputTotalWandQuantity.value = '';

            setTimeout(() => {
                window.location.reload();
            }, 100);

        }
        else if (xhttp.readyState == 4 && xhttp.status != 200) {
            console.log("There was an error with the input.")
        }
    }

    // Send the request and wait for the response
    xhttp.send(JSON.stringify(data));

})


// Creates a single row from an Object representing a single record from
// bsg_people
addRowToTable = (data) => {

    // Get a reference to the current table on the page and clear it out.
    let currentTable = document.getElementById("wands-table");

    // Get the location where we should insert the new row (end of table)
    let newRowIndex = currentTable.rows.length;

    // Get a reference to the new row from the database query (last object)
    let parsedData = JSON.parse(data);
    let newRow = parsedData[parsedData.length - 1]

    // Create a row and 4 cells
    let row = document.createElement("TR");
    let wandIDCell = document.createElement("TD");
    let lengthCell = document.createElement("TD");
    let priceCell = document.createElement("TD");
    let coreCell = document.createElement("TD");
    let woodCell = document.createElement("TD");
    let totalWandQuantityCell = document.createElement("TD");

    let deleteCell = document.createElement("TD");

    // Fill the cells with correct data
    wandIDCell.innerText = newRow.wandID;
    lengthCell.innerText = newRow.length;
    priceCell.innerText = newRow.price;
    coreCell.innerText = newRow.core;
    woodCell.innerText = newRow.wood;
    totalWandQuantityCell.innerText = newRow.totalWandQuantity;

    deleteCell = document.createElement("button");
    deleteCell.innerHTML = "Delete";
    deleteCell.onclick = function(){
        deleteWand(newRow.wandID);
    };

    // Add the cells to the row
    row.appendChild(wandIDCell);
    row.appendChild(lengthCell);
    row.appendChild(priceCell);
    row.appendChild(coreCell);
    row.appendChild(woodCell);
    row.appendChild(totalWandQuantityCell);
    row.appendChild(deleteCell);

    row.setAttribute('data-value', newRow.wandID);

    // Add the row to the table
    currentTable.appendChild(row);
}
