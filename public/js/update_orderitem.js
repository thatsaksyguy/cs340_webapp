//  Citation for this code structure.
 
//  Date: 12/8/2024
 
//  Adapted from CS 340 nodejs-starter-app, step 8, update_person.js
//  values and data changes were made to adapt the website's theme
 
//  Source URL: https://github.com/osu-cs340-ecampus/nodejs-starter-app

// Get the objects we need to modify
let updateOrderItemForm = document.getElementById('update-orderItem-form-ajax');

// Modify the objects we need
updateOrderItemForm.addEventListener("submit", function (e) {

    // Prevent the form from submitting
    e.preventDefault();

    // Get form fields we need to get data from
    let inputOrderItemID = document.getElementById("update-orderItemID")
    let inputOrderID = document.getElementById("update-orderID");
    let inputWandID = document.getElementById("update-wandID");
    let inputSpellID = document.getElementById("update-spellID");
    let inputQuantity = document.getElementById("update-quantity");
    let inputPrice = document.getElementById("update-price");

    // Get the values from the form fields
    let orderItemIDValue = inputOrderItemID.value;
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

    // currently the database table for bsg_people does not allow updating values to NULL
    // so we must abort if being bassed NULL for homeworld


    // Put our data we want to send in a javascript object
    let data = {
        orderItemID: orderItemIDValue,
        orderID: orderIDValue,
        wandID: wandIDValue,
        spellID: spellIDValue,
        quantity: quantityValue,
        price: priceValue,
    }

    // Setup our AJAX request
    var xhttp = new XMLHttpRequest();
    xhttp.open("PUT", "/put-orderItem-ajax", true);
    xhttp.setRequestHeader("Content-type", "application/json");

    // Tell our AJAX request how to resolve
    xhttp.onreadystatechange = () => {
        if (xhttp.readyState == 4 && xhttp.status == 200) {

            // Add the new data to the table
            updateRow(xhttp.response, orderIDValue);

            inputOrderItemID.value = '';
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

function updateRow(data, orderItemID){
    let parsedData = JSON.parse(data);

    let table = document.getElementById("OrderItems-table");

    for (let i = 0, row; row = table.rows[i]; i++) {
       //iterate through rows
       //rows would be accessed using the "row" variable assigned in the for loop
       if (table.rows[i].getAttribute("data-value") == orderItemID) {

            // Get the location of the row where we found the matching person ID
            let updateRowIndex = table.getElementsByTagName("tr")[i];

            // Get td of homeworld value
            let tds = updateRowIndex.getElementsByTagName("td");

            // Update all fields
            tds[0].innerHTML = parsedData[0].orderItemID;
            tds[1].innerHTML = parsedData[0].orderID;
            tds[2].innerHTML = parsedData[0].wandID;
            tds[3].innerHTML = parsedData[0].spellID;
            tds[4].innerHTML = parsedData[0].quantity;
            tds[5].innerHTML = parsedData[0].price;

       }
    }
}
