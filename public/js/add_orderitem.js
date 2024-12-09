//  Citation for this code structure.
 
//  Date: 12/8/2024
 
//  Adapted from CS 340 nodejs-starter-app, step 8, add_person.js
//  values and data changes were made to adapt the website's theme
 
//  Source URL: https://github.com/osu-cs340-ecampus/nodejs-starter-app

// Get the objects we need to modify
let addOrderItemForm = document.getElementById('add-orderItem-form-ajax');

// Modify the objects we need
addOrderItemForm.addEventListener("submit", function (e) {

    // Prevent the form from submitting
    e.preventDefault();

    // Get form fields we need to get data from
    let inputOrderID = document.getElementById("input-orderID");
    let inputWandID = document.getElementById("input-wandID");
    let inputSpellID = document.getElementById("input-spellID");
    let inputQuantity = document.getElementById("input-quantity");
    let inputPrice = document.getElementById("input-price");


    // Get the values from the form fields
    let orderIDValue = inputOrderID.value;
    let wandIDValue = inputWandID.value;
    let spellIDValue = inputSpellID.value;
    let quantityValue = inputQuantity.value;
    let priceValue = inputPrice.value;

    if (wandIDValue === '') {
        wandIDValue = null;
    }

    if (spellIDValue === '') {
        spellIDValue = null;
    }

    // Put our data we want to send in a javascript object
    let data = {
        orderID: orderIDValue,
        wandID: wandIDValue,
        spellID: spellIDValue,
        quantity: quantityValue,
        price: priceValue,
    }

    // Setup our AJAX request
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "/add-orderItem-ajax", true);
    xhttp.setRequestHeader("Content-type", "application/json");

    // Tell our AJAX request how to resolve
    xhttp.onreadystatechange = () => {
        if (xhttp.readyState == 4 && xhttp.status == 200) {

            // Add the new data to the table
            addRowToTable(xhttp.response);

            // Clear the input fields for another transaction

            inputOrderID.value = '';
            inputWandID.value = '';
            inputSpellID.value = '';
            inputQuantity.value = '';
            inputPrice.value = '';

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
    console.log("ballsack")

    // Get a reference to the current table on the page and clear it out.
    let currentTable = document.getElementById("OrderItems-table");

    // Get the location where we should insert the new row (end of table)
    let newRowIndex = currentTable.rows.length;

    // Get a reference to the new row from the database query (last object)
    let parsedData = JSON.parse(data);
    let newRow = parsedData[parsedData.length - 1]

    // Create a row and 4 cells
    let row = document.createElement("TR");
    let orderItemIDCell = document.createElement("TD");
    let orderIDCell = document.createElement("TD");
    let wandIDCell = document.createElement("TD");
    let spellIDCell = document.createElement("TD");
    let quantityCell = document.createElement("TD");
    let priceCell = document.createElement("TD");

    let deleteCell = document.createElement("TD");

    // Fill the cells with correct data
    orderItemIDCell.innerText = newRow.orderItemID
    orderIDCell.innerText = newRow.orderID;
    wandIDCell.innerText = newRow.wandID;
    spellIDCell.innerText = newRow.spellID;
    quantityCell.innerText = newRow.quantity;
    priceCell.innerText = newRow.price;

    deleteCell = document.createElement("button");
    deleteCell.innerHTML = "Delete";
    deleteCell.onclick = function(){
        deleteOrderItems(newRow.orderItemID);
    };

    // Add the cells to the row
    row.appendChild(orderItemIDCell);
    row.appendChild(orderIDCell);
    row.appendChild(wandIDCell);
    row.appendChild(spellIDCell);
    row.appendChild(quantityCell);
    row.appendChild(priceCell);

    row.setAttribute('data-value', newRow.orderItemID);

    // Add the row to the table
    currentTable.appendChild(row);
}
