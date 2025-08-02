function calculateTotalPrice() {
    let prices = document.querySelectorAll('.prices');
    let totalPrice = 0;

    prices.forEach(price => {
        totalPrice += parseFloat(price.textContent);
    });

    let table = document.querySelector('table');
    let totalRow = table.querySelector('.total-row');

    if (totalRow) {
        totalRow.querySelector('.total-price').textContent = `Total: $${totalPrice.toFixed(2)}`;
    } else {
        totalRow = document.createElement('tr');
        totalRow.className = 'total-row';
        totalRow.innerHTML = `<td class="total-price" colspan="100%">Total: $${totalPrice.toFixed(2)}</td>`;
        table.appendChild(totalRow);
    }
}

// Calculate total price initially
calculateTotalPrice();

// Update total price when prices change (if prices are editable)
let prices = document.querySelectorAll('.prices');
prices.forEach(price => {
    price.addEventListener('input', calculateTotalPrice);
});

