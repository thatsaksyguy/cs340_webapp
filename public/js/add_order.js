// Get the objects we need to modify
let addOrderForm = document.getElementById('add-order-form-ajax');

// Modify the objects we need
addOrderForm.addEventListener("submit", function (e) {

    // Prevent the form from submitting
    e.preventDefault();

    // Get form fields we need to get data from
    let inputOrderDate = document.getElementById("input-orderDate");
    let inputCustomerID = document.getElementById("input-customerID");
    let inputTotalPrice = document.getElementById("input-totalPrice");


    // Get the values from the form fields
    let orderDateValue = inputOrderDate.value;
    let customerIDValue = inputCustomerID.value;
    let totalPriceValue = inputTotalPrice.value;

    // Put our data we want to send in a javascript object
    let data = {
        orderDate: orderDateValue,
        customerID: customerIDValue,
        totalPrice: totalPriceValue,
    }

    // Setup our AJAX request
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "/add-order-ajax", true);
    xhttp.setRequestHeader("Content-type", "application/json");

    // Tell our AJAX request how to resolve
    xhttp.onreadystatechange = () => {
        if (xhttp.readyState == 4 && xhttp.status == 200) {

            // Add the new data to the table
            addRowToTable(xhttp.response);

            // Clear the input fields for another transaction
            inputOrderDate.value = '';
            inputCustomerID.value = '';
            inputTotalPrice.value = '';

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
    let currentTable = document.getElementById("Orders-table");

    // Get the location where we should insert the new row (end of table)
    let newRowIndex = currentTable.rows.length;

    // Get a reference to the new row from the database query (last object)
    let parsedData = JSON.parse(data);
    let newRow = parsedData[parsedData.length - 1]

    // Create a row and 4 cells
    let row = document.createElement("TR");
    let orderIDCell = document.createElement("TD");
    let orderDateCell = document.createElement("TD");
    let customerIDCell = document.createElement("TD");
    let totalPriceCell = document.createElement("TD");

    let deleteCell = document.createElement("TD");

    // Fill the cells with correct data
    orderIDCell.innerText = newRow.orderID;
    orderDateCell.innerText = newRow.orderDate;
    customerIDCell.innerText = newRow.customerID;
    totalPriceCell.innerText = newRow.totalPrice;

    deleteCell = document.createElement("button");
    deleteCell.innerHTML = "Delete";
    deleteCell.onclick = function(){
        deleteWand(newRow.orderID);
    };

    // Add the cells to the row
    row.appendChild(orderIDCell);
    row.appendChild(orderDateCell);
    row.appendChild(customerIDCell);
    row.appendChild(totalPriceCell);

    row.setAttribute('data-value', newRow.id);

    // Add the row to the table
    currentTable.appendChild(row);
}
