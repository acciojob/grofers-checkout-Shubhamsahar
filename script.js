const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
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
        totalRow.innerHTML = `<td colspan="2" class="total-price">Total: $${totalPrice.toFixed(2)}</td>`;
        table.tBodies[0].appendChild(totalRow);
    }
};

  


getSumBtn.addEventListener("click", getSum);

