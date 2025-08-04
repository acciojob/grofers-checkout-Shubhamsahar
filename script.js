// Select all the elements with class 'price'
const priceElements = document.querySelectorAll('.price');
let total = 0;

// Calculate the total price
priceElements.forEach(price => {
  total += parseFloat(price.textContent);
});

// Create a new row and cell for the total
const totalRow = document.createElement('tr');
const totalCell = document.createElement('td');
totalCell.colSpan = 2;
totalCell.textContent = `Total Price: Rs ${total}`;
totalCell.style.textAlign = 'center';
totalCell.style.fontWeight = 'bold';

// Append the cell to the row and the row to the table
totalRow.appendChild(totalCell);
document.querySelector('table').appendChild(totalRow);