// Get all the price elements
const priceElements = document.querySelectorAll('.price');
let total = 0;

// Sum up all the prices
priceElements.forEach(price => {
  total += parseFloat(price.textContent);
});

// Create a new row
const totalRow = document.createElement('tr');
const totalCell = document.createElement('td');
totalCell.colSpan = 2;
totalCell.style.fontWeight = 'bold';
totalCell.textContent = `Total Price: Rs ${total}`;

// Append the cell to the row
totalRow.appendChild(totalCell);

// Append the row to the table
const table = document.querySelector('table');
table.appendChild(totalRow);
