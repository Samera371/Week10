
// Select the HTML element with the ID 'dataForm' and attach an event listener to it
document.getElementById('dataForm').addEventListener('submit', function(event) {
    // Prevent the default form submission behavior (which would reload the page)
    event.preventDefault(); 

    // Get form values
    
    // Retrieve the value of the input element with the id 'name' and store it in the variable 'name'
const name = document.getElementById('name').value;

// Retrieve the value of the input element with the id 'email' and store it in the variable 'email'
const email = document.getElementById('email').value;

// Retrieve the value of the input element with the id 'age' and store it in the variable 'age'
const age = document.getElementById('age').value;

    // Create a new row
    // Create a new table row element
const newRow = document.createElement('tr');

// Set the inner HTML of the new row with the provided name, email, and age values
newRow.innerHTML = `
    <td>${name}</td>
    <td>${email}</td>
    <td>${age}</td>
`;

// Get the table element by its ID 'dataTable'
const table = document.getElementById('dataTable');

// Get the current number of rows in the table
const rowCount = table.rows.length;

// Insert the new row at the end of the table
const row = table.insertRow(rowCount);

// Append the newly created row (newRow) to the inserted row (row)
row.appendChild(newRow);


    // This effectively adds the new row to the end of the table.
    document.getElementById('dataTable').appendChild(newRow);

    // // This clears any user input in the form, making it ready for new data entry.
    document.getElementById('dataForm').reset();
});
