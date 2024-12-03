
// Get the objects we need to modify
let updateCustomerForm = document.getElementById('update-customer-form-ajax');

// Modify the objects we need
updateCustomerForm.addEventListener("submit", function (e) {

    // Prevent the form from submitting
    e.preventDefault();

    // Get form fields we need to get data from
    let inputCustomerID = document.getElementById("mySelect");
    let inputName = document.getElementById("update-name");
    let inputEmail = document.getElementById("update-email");
    let inputPhone = document.getElementById("update-phone");
    let inputAddress = document.getElementById("update-address");

    // Get the values from the form fields
    let customerIDValue = inputCustomerID.value;
    let nameValue = inputName.value;
    let emailValue = inputEmail.value;
    let phoneValue = inputPhone.value;
    let addressValue = inputAddress.value;

    // currently the database table for bsg_people does not allow updating values to NULL
    // so we must abort if being bassed NULL for homeworld


    // Put our data we want to send in a javascript object
    let data = {
        customerID: customerIDValue,
        name: nameValue,
        email: emailValue,
        phone: phoneValue,
        address: addressValue,
    }

    // Setup our AJAX request
    var xhttp = new XMLHttpRequest();
    xhttp.open("PUT", "/put-customer-ajax", true);
    xhttp.setRequestHeader("Content-type", "application/json");

    // Tell our AJAX request how to resolve
    xhttp.onreadystatechange = () => {
        if (xhttp.readyState == 4 && xhttp.status == 200) {

            // Add the new data to the table
            updateRow(xhttp.response, customerIDValue);

            inputName.value = '';
            inputEmail.value = '';
            inputPhone.value = '';
            inputAddress.value = '';

        }
        else if (xhttp.readyState == 4 && xhttp.status != 200) {
            console.log("There was an error with the input.")
        }
    }

    // Send the request and wait for the response
    xhttp.send(JSON.stringify(data));

})


function updateRow(data, customerID){
    let parsedData = JSON.parse(data);

    let table = document.getElementById("customers-table");

    for (let i = 0, row; row = table.rows[i]; i++) {
       //iterate through rows
       //rows would be accessed using the "row" variable assigned in the for loop
       if (table.rows[i].getAttribute("data-value") == customerID) {

            // Get the location of the row where we found the matching person ID
            let updateRowIndex = table.getElementsByTagName("tr")[i];

            // Get td of homeworld value
            let tds = updateRowIndex.getElementsByTagName("td");
            
            // Update all fields
            tds[0].innerHTML = parsedData[0].customerID;
            tds[1].innerHTML = parsedData[0].name;
            tds[2].innerHTML = parsedData[0].email;
            tds[3].innerHTML = parsedData[0].phone;
            tds[4].innerHTML = parsedData[0].address;
            
       }
    }
}
