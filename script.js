const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const totalPriceElement = document.createElement("p");
document.body.appendChild(totalPriceElement);

const getSum = () => {
    let prices = document.querySelectorAll('.prices');
    let totalPrice = 0;

    prices.forEach(price => {
        totalPrice += parseFloat(price.textContent);
    });

    totalPriceElement.textContent = `Total Price: $${totalPrice.toFixed(2)}`;
};

getSumBtn.addEventListener("click", getSum);


  
};

getSumBtn.addEventListener("click", getSum);

