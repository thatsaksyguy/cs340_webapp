// Get the objects we need to modify
let updateCustomerForm = document.getElementById('update-order-form-ajax');

// Modify the objects we need
updateCustomerForm.addEventListener("submit", function (e) {

    // Prevent the form from submitting
    e.preventDefault();

    // Get form fields we need to get data from
    let inputOrderID = document.getElementById("update-orderID");
    let inputOrderDate = document.getElementById("update-orderDate");
    let inputCustomerID = document.getElementById("update-customerID");
    let inputTotalPrice = document.getElementById("update-totalPrice");

    // Get the values from the form fields
    let orderIDValue = inputOrderID.value;
    let orderDateValue = inputOrderDate.value;
    let customerIDValue = inputCustomerID.value;
    let totalPriceValue = inputTotalPrice.value;

    // currently the database table for bsg_people does not allow updating values to NULL
    // so we must abort if being bassed NULL for homeworld


    // Put our data we want to send in a javascript object
    let data = {
        orderID: orderIDValue,
        orderDate: orderDateValue,
        customerID: customerIDValue,
        totalPrice: totalPriceValue,
    }

    // Setup our AJAX request
    var xhttp = new XMLHttpRequest();
    xhttp.open("PUT", "/put-order-ajax", true);
    xhttp.setRequestHeader("Content-type", "application/json");

    // Tell our AJAX request how to resolve
    xhttp.onreadystatechange = () => {
        if (xhttp.readyState == 4 && xhttp.status == 200) {

            // Add the new data to the table
            updateRow(xhttp.response, orderIDValue);

            inputOrderID.value = '';
            inputOrderDate.value = '';
            inputCustomerID.value = '';
            inputTotalPrice.value = '';

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


function updateRow(data, orderID){
    let parsedData = JSON.parse(data);

    let table = document.getElementById("orders-table");

    for (let i = 0, row; row = table.rows[i]; i++) {
       //iterate through rows
       //rows would be accessed using the "row" variable assigned in the for loop
       if (table.rows[i].getAttribute("data-value") == orderID) {

            // Get the location of the row where we found the matching person ID
            let updateRowIndex = table.getElementsByTagName("tr")[i];

            // Get td of homeworld value
            let tds = updateRowIndex.getElementsByTagName("td");

            // Update all fields
            tds[0].innerHTML = parsedData[0].orderID;
            tds[1].innerHTML = parsedData[0].orderDate;
            tds[2].innerHTML = parsedData[0].customerID;
            tds[3].innerHTML = parsedData[0].totalPrice;

       }
    }
}
