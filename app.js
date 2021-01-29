document.getElementById('iPhone-button').addEventListener('click', function() {
    handleProduct(true);
});

// minus button 
document.getElementById('iPhone-minus-button').addEventListener('click', function() {
    handleProduct(false);
});

// handle product change function
function handleProduct(isIncrease) {
    let iPhoneQuantity = document.getElementById('quantity').value;
    let iPhoneQuantityNumber = parseInt(iPhoneQuantity);

    let iPhoneNewQuantity = iPhoneQuantityNumber;
    if (isIncrease == true) {
        iPhoneNewQuantity = iPhoneQuantityNumber + 1;
    }
    if (isIncrease == false && iPhoneQuantityNumber > 0) {
        iPhoneNewQuantity = iPhoneQuantityNumber - 1;
    }
    document.getElementById('quantity').value = iPhoneNewQuantity;
    let total = iPhoneNewQuantity * 1219;
    document.getElementById('iPhone-price').innerText = '$' + total;
    calculateTotal()
}


// phone increase case button 
document.getElementById('case-increase').addEventListener('click', function() {
    handleProductChange(true);

});

// phone decrease case button
document.getElementById('case-decrease').addEventListener('click', function() {
    handleProductChange(false);
});


// handle product change function
function handleProductChange(isIncrease) {
    let caseCount = document.getElementById('case-count').value;
    let caseCountNumber = parseInt(caseCount);
    let caseNewCount = caseCountNumber;
    if (isIncrease == true) {
        caseNewCount = caseCountNumber + 1;
    }
    if (isIncrease == false && caseCountNumber > 0) {
        caseNewCount = caseCountNumber - 1;
    }
    let caseTotal = caseNewCount * 64;
    document.getElementById('case-count').value = caseNewCount;
    document.getElementById('case-price').innerText = '$' + caseTotal;
    calculateTotal()

}


//phone calculate

function calculateTotal() {
    let phoneCalculate = document.getElementById('quantity').value;
    let phoneCalculateNumber = parseInt(phoneCalculate);

    let caseCalculate = document.getElementById('case-count').value;
    let caseCalculateNumber = parseInt(caseCalculate);

    let totalAmount = phoneCalculateNumber * 1219 + caseCalculateNumber * 64;
    document.getElementById('total-price').innerText = totalAmount;

    let tax = Math.round(totalAmount * 0.1);
    document.getElementById('tax').innerText = "$" + tax;

    let total = totalAmount + tax;
    document.getElementById('total').innerHTML = "$" + total;

}