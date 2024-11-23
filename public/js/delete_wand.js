function deleteWand(wandID) {
    // Create the data object to send to the server
    let data = {
        wandID: wandID
    };

    // Set up the AJAX request
    var xhttp = new XMLHttpRequest();
    xhttp.open("DELETE", "/delete-wand-ajax", true);
    xhttp.setRequestHeader("Content-type", "application/json");

    // Define the behavior for when the request is resolved
    xhttp.onreadystatechange = () => {
        if (xhttp.readyState == 4 && xhttp.status == 204) {

            // Add the new data to the table
            deleteRow(wandID);

        }
        else if (xhttp.readyState == 4 && xhttp.status != 204) {
            console.log("There was an error with the input.")
        }
    }
    // Send the request and wait for the response
    xhttp.send(JSON.stringify(data));
}

function deleteRow(wandID) {
    let table = document.getElementById("wands-table");
    for (let i = 0, row; row = table.rows[i]; i++) {
       //iterate through rows
       //rows would be accessed using the "row" variable assigned in the for loop
       if (table.rows[i].getAttribute("data-value") == wandID) {
            table.deleteRow(i);
            break;
        }
    }
}
