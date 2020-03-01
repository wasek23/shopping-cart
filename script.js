// Item Price
function itemPrice(inputUpdate){
    const price = event.target.parentElement.parentElement.previousElementSibling.children[0].innerText;
    const priceUpdate = parseFloat(price) * inputUpdate;
    event.target.parentElement.parentElement.nextElementSibling.children[0].innerText = priceUpdate;
}

// Add quantity
const btnPlus = document.querySelectorAll(".btnPlus");
btnPlus.forEach(function(btnP){
    btnP.addEventListener("click", function(event){
        if(event.target.parentElement.classList.contains("btnPlus")){
            let input = event.target.parentElement.previousElementSibling.value;
            if(input == false){ input = 1; }

            const inputUpdate = parseFloat(input) + 1;
            event.target.parentElement.previousElementSibling.value = inputUpdate;

            itemPrice(inputUpdate);
            showTotal();
        }
    });
});

// Remove quantity
const btnMinus = document.querySelectorAll(".btnMinus");
btnMinus.forEach(function(btnM){
    btnM.addEventListener("click", function(event){
        if(event.target.parentElement.classList.contains("btnMinus")){
            let input = event.target.parentElement.nextElementSibling.value;
            if(input == false){ input = 1; }

            if(input > 1){
                const inputUpdate = parseFloat(input) - 1;
                event.target.parentElement.nextElementSibling.value = inputUpdate;

                itemPrice(inputUpdate);
                showTotal();
            }
        }
    });
});

// Close cart item
const removeItem = document.querySelectorAll(".remove-item");
removeItem.forEach(function(itRemove){
    itRemove.addEventListener("click", function(event){
        const cartItem = event.target.parentElement.parentElement.parentElement;
        cartItem.remove();

        showTotal();
    });
});

// Show total fn
function showTotal(){
    const subPrices = [];

    const itemTotalPrice = document.querySelectorAll(".itemTotalPrice");
    itemTotalPrice.forEach(function(item){
        subPrices.push(parseFloat(item.innerText));
    });

    subTotalPrice = subPrices.reduce(function(subPrices, item){
        subPrices += item;
        return subPrices;
    }, 0);

    // Sub Total
    document.getElementById("subTotal").innerText = subTotalPrice.toFixed(2);

    // Tax
    const taxInput = document.getElementById("taxInput").value;
    if(taxInput == false){ taxInput = 0; }
    const taxCalc = parseFloat(taxInput) / 100 * subTotalPrice;
    document.getElementById("taxTotal").innerHTML = taxCalc.toFixed(2);

    // Grand total
    const grandTotal = subTotalPrice + taxCalc;
    document.getElementById("grandTotal").innerHTML = grandTotal.toFixed(2);
}
showTotal();

// Update tax and grand total on tax change
function updateTaxInput(value){
    // Tax
    if(value == false){ value = 0; }
    const taxCalc = parseFloat(value) / 100 * subTotalPrice;
    document.getElementById("taxTotal").innerHTML = taxCalc.toFixed(2);

    // Grand total
    const grandTotal = subTotalPrice + taxCalc;
    document.getElementById("grandTotal").innerHTML = grandTotal.toFixed(2);
}


// First take (static). Don't try this because ids are removed from html

// // Update Cart Items Value
// function updateCartItem(inputId, quantityAmount, priceId, price){
//     // Update Input Value
//     const inputValue = document.getElementById(inputId).value;
//     let inputValueUpdate = parseFloat(inputValue) + quantityAmount;
//     document.getElementById(inputId).value = inputValueUpdate;
    
//     // Update Price
//     const priceUpdate = parseFloat(price) * inputValueUpdate;
//     document.getElementById(priceId).innerText = priceUpdate;
// }


// // Update Items
// const price1 = document.getElementById("price1").innerText;

// const plusBtn1 = document.getElementById("plusBtn1");
// plusBtn1.addEventListener("click", function(){
//     updateCartItem("input1", 1, "price1", price1);
//     totalCalc();
//     // const totalPrice1 = document.getElementById("price1").innerText;
// });

// const minusBtn1 = document.getElementById("minusBtn1");
// minusBtn1.addEventListener("click", function(){
//     const inputValue1 = document.getElementById("input1").value;

//     if(inputValue1 > 1){
//         updateCartItem("input1", -1, "price1", price1);
//         totalCalc();
//     }
// });


// const price2 = document.getElementById("price2").innerText;

// const plusBtn2 = document.getElementById("plusBtn2");
// plusBtn2.addEventListener("click", function(){
//     updateCartItem("input2", 1, "price2", price2);
//     totalCalc();
// });

// const minusBtn2 = document.getElementById("minusBtn2");
// minusBtn2.addEventListener("click", function(){
//     const inputValue2 = document.getElementById("input2").value;

//     if(inputValue2 > 1){
//         updateCartItem("input2", -1, "price2", price2);
//         totalCalc();
//     }
// });

// // Calculate Total
// function totalCalc(){
//     const totalPrice1 = document.getElementById("price1").innerText;
//     const totalPrice2 = document.getElementById("price2").innerText;

//     // Subtotal
//     const subTotal = parseFloat(totalPrice1) + parseFloat(totalPrice2);
//     document.getElementById("subTotal").innerText = subTotal.toFixed(2);

//     // Tax
//     const taxInput = document.getElementById("taxInput").value;
//     const taxCalc = parseFloat(taxInput) / 100 * subTotal;
//     document.getElementById("taxTotal").innerHTML = taxCalc.toFixed(2);

//     // Grand total
//     const grandTotal = parseFloat(subTotal) + parseFloat(taxCalc.toFixed(2));
//     document.getElementById("grandTotal").innerHTML = grandTotal.toFixed(2);
//     console.log(grandTotal);
// }