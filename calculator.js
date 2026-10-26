document.addEventListener("DOMContentLoaded", function(){
    const quantityInput = document.getElementById("product_quantity");
    const orderForm = document.getElementById("order-form");
    const resultDiv = document.getElementById("calculator_result");
    const optionsContainer = document.getElementById("options-container");
    const propertyContainer = document.getElementById("property-container");
    const phoneStorage = document.getElementById("phone_storage");
    const phoneInsurance = document.getElementById("phone_insurance");

    const regex = /^[1-9][0-9]*$/;

    function Calculate_Current_Price(){
        if (!regex.test(quantityInput.value)) {
            resultDiv.textContent = "Ошибка: введите корректное количество!";
            return;
        }

        const selectedRadio = document.querySelector('input[name="phone_type"]:checked');
        if (!selectedRadio) return;

        let basePrice = parseInt(selectedRadio.value);
        let additionalCost = 0;

        if (basePrice === 90000) {
            optionsContainer.style.display = "none";
            propertyContainer.style.display = "none";
        } else if (basePrice === 120000) {
            optionsContainer.style.display = "block";
            propertyContainer.style.display = "none";
            additionalCost += parseInt(phoneStorage.value);
        } else if (basePrice === 25000) {
            optionsContainer.style.display = "none";
            propertyContainer.style.display = "block";
            if (phoneInsurance.checked) {
                additionalCost += parseInt(phoneInsurance.value);
            }
        }

        let current_price = (basePrice + additionalCost) * parseInt(quantityInput.value);
        resultDiv.textContent = "Стоимость товара: " + current_price + "Р";
    }

    orderForm.addEventListener("input", Calculate_Current_Price);
    orderForm.addEventListener("change", Calculate_Current_Price);
    Calculate_Current_Price(); 
});
