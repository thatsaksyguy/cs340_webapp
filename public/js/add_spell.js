// Get the objects we need to modify
let addSpellForm = document.getElementById('add-spell-form-ajax');

// Modify the objects we need
addSpellForm.addEventListener("submit", function (e) {

    // Prevent the form from submitting
    e.preventDefault();

    // Get form fields we need to get data from
    let inputLevel = document.getElementById("input-level");
    let inputPrice = document.getElementById("input-price");
    let inputTypeOfSpell = document.getElementById("input-typeOfSpell");
    let inputTotalSpellQuantity = document.getElementById("input-totalSpellQuantity");

    // Get the values from the form fields
    let levelValue = inputLevel.value;
    let priceValue = inputPrice.value;
    let typeOfSpellValue = inputTypeOfSpell.value;
    let totalSpellQuantityValue = inputTotalSpellQuantity.value;

    // Put our data we want to send in a javascript object
    let data = {
        level: levelValue,
        price: priceValue,
        typeOfSpell: typeOfSpellValue,
        totalSpellQuantity: totalSpellQuantityValue,
    };

    // Setup our AJAX request
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "/add-spell-ajax", true);
    xhttp.setRequestHeader("Content-type", "application/json");

    // Tell our AJAX request how to resolve
    xhttp.onreadystatechange = () => {
        if (xhttp.readyState == 4 && xhttp.status == 200) {

            // Add the new data to the table
            addRowToTable(xhttp.response);

            // Clear the input fields for another transaction
            inputLevel.value = '';
            inputPrice.value = '';
            inputTypeOfSpell.value = '';
            inputTotalSpellQuantity.value = '';
        }
        else if (xhttp.readyState == 4 && xhttp.status != 200) {
            console.log("There was an error with the input.")
        }
    };

    // Send the request and wait for the response
    xhttp.send(JSON.stringify(data));

});

// Creates a single row from an Object representing a single record from
// spells
addRowToTable = (data) => {

    // Get a reference to the current table on the page
    let currentTable = document.getElementById("Spells-table");

    // Get a reference to the new row from the database query (last object)
    let parsedData = JSON.parse(data);
    let newRow = parsedData[parsedData.length - 1];

    // Create a row and 5 cells
    let row = document.createElement("TR");
    let spellIDCell = document.createElement("TD");
    let levelCell = document.createElement("TD");
    let priceCell = document.createElement("TD");
    let typeOfSpellCell = document.createElement("TD");
    let totalSpellQuantityCell = document.createElement("TD");

    let deleteCell = document.createElement("TD");

    // Fill the cells with correct data
    spellIDCell.innerText = newRow.spellID;
    levelCell.innerText = newRow.level;
    priceCell.innerText = newRow.price;
    typeOfSpellCell.innerText = newRow.typeOfSpell;
    totalSpellQuantityCell.innerText = newRow.totalSpellQuantity;

    deleteCell = document.createElement("button");
    deleteCell.innerHTML = "Delete";
    deleteCell.onclick = function () {
        deleteSpell(newRow.spellID);
    };

    // Add the cells to the row
    row.appendChild(spellIDCell);
    row.appendChild(levelCell);
    row.appendChild(priceCell);
    row.appendChild(typeOfSpellCell);
    row.appendChild(totalSpellQuantityCell);
    row.appendChild(deleteCell);

    row.setAttribute('data-value', newRow.spellID);

    // Add the row to the table
    currentTable.appendChild(row);
};
