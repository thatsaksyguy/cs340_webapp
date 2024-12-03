function deleteSpell(spellID) {
    // Create the data object to send to the server
    let data = {
        spellID: spellID
    };

    // Set up the AJAX request
    var xhttp = new XMLHttpRequest();
    xhttp.open("DELETE", "/delete-spell-ajax", true);
    xhttp.setRequestHeader("Content-type", "application/json");

    // Define the behavior for when the request is resolved
    xhttp.onreadystatechange = () => {
        if (xhttp.readyState == 4 && xhttp.status == 204) {

            // Remove the deleted spell from the table
            deleteRow(spellID);

        }
        else if (xhttp.readyState == 4 && xhttp.status != 204) {
            console.log("There was an error with the input.");
        }
    };
    // Send the request and wait for the response
    xhttp.send(JSON.stringify(data));
}

function deleteRow(spellID) {
    let table = document.getElementById("Spells-table");
    for (let i = 0, row; row = table.rows[i]; i++) {
        // Iterate through rows
        // Rows would be accessed using the "row" variable assigned in the for loop
        if (table.rows[i].getAttribute("data-value") == spellID) {
            table.deleteRow(i);
            break;
        }
    }
}
