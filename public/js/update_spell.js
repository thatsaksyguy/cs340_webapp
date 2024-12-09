//  Citation for this code structure.
 
//  Date: 12/8/2024
 
//  Adapted from CS 340 nodejs-starter-app, step 8, update_person.js
//  values and data changes were made to adapt the website's theme
 
//  Source URL: https://github.com/osu-cs340-ecampus/nodejs-starter-app

// Get the objects we need to modify
let updateSpellForm = document.getElementById('update-spell-form-ajax');

// Modify the objects we need
updateSpellForm.addEventListener("submit", function (e) {
    // Prevent the form from submitting
    e.preventDefault();

    // Get form fields we need to get data from
    let inputSpellID = document.getElementById("update-spellid");
    let inputLevel = document.getElementById("update-level");
    let inputPrice = document.getElementById("update-price");
    let inputTypeOfSpell = document.getElementById("update-typeOfSpell");
    let inputTotalSpellQuantity = document.getElementById("update-totalSpellQuantity");

    // Get the values from the form fields
    let spellIDValue = inputSpellID.value;
    let levelValue = inputLevel.value;
    let priceValue = parseFloat(inputPrice.value);
    let typeOfSpellValue = inputTypeOfSpell.value;
    let totalSpellQuantityValue = parseInt(inputTotalSpellQuantity.value);

    // Put our data we want to send in a JavaScript object
    let data = {
        spellID: spellIDValue,
        level: levelValue,
        price: priceValue,
        typeOfSpell: typeOfSpellValue,
        totalSpellQuantity: totalSpellQuantityValue,
    };

    // Setup our AJAX request
    var xhttp = new XMLHttpRequest();
    xhttp.open("PUT", "/put-spell-ajax", true);
    xhttp.setRequestHeader("Content-type", "application/json");

    // Define how the AJAX request resolves
    xhttp.onreadystatechange = () => {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            // Update the row in the table
            updateRow(xhttp.response, spellIDValue);

            // Clear the input fields for another update
            inputLevel.value = '';
            inputPrice.value = '';
            inputTypeOfSpell.value = '';
            inputTotalSpellQuantity.value = '';

            setTimeout(() => {
                window.location.reload();
            }, 100);

        } else if (xhttp.readyState == 4 && xhttp.status != 200) {
            console.log("There was an error with the input.");
        }
    };

    // Send the request and wait for the response
    xhttp.send(JSON.stringify(data));
});

// Function to update a row in the table
function updateRow(data, spellID) {
    let parsedData = JSON.parse(data);

    let table = document.getElementById("Spells-table");

    for (let i = 0, row; row = table.rows[i]; i++) {
        // Iterate through rows
        // Rows would be accessed using the "row" variable assigned in the for loop
        if (table.rows[i].getAttribute("data-value") == spellID) {
            // Get the location of the row where we found the matching spell ID
            let updateRowIndex = table.getElementsByTagName("tr")[i];

            // Get the <td> elements in the row
            let tds = updateRowIndex.getElementsByTagName("td");

            // Update all fields
            tds[0].innerHTML = parsedData[0].spellID;
            tds[1].innerHTML = parsedData[0].level;
            tds[2].innerHTML = parsedData[0].price;
            tds[3].innerHTML = parsedData[0].typeOfSpell;
            tds[4].innerHTML = parsedData[0].totalSpellQuantity;
        }
    }
}
