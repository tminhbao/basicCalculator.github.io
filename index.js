var number1Element = document.querySelector(".number1__input")
var number2Element = document.querySelector(".number2__input")
var plusButton = document.querySelector("#plus");
var abstractButton = document.querySelector("#abstract");
var multiplyButton = document.querySelector("#multiply");
var divideButton = document.querySelector("#divide");
var notifyElement = document.querySelector(".notify-desc");
var calculationButton = document.querySelector(".calculationButton");

// Kiểm tra đã chọn phép tính chưa 
function isChosenCalculator()
{
    calculationButton.addEventListener("click",function(){
        if (document.querySelector("#plus").checked==false && document.querySelector("#subtract").checked==false && document.querySelector("#multiply").checked==false && document.querySelector("#divide").checked==false)
        {
            notifyElement.innerHTML = "Chưa chọn phép tính"
            return;
        }
    })
}
isChosenCalculator()



// Thực hiện các phép tính
var plusElement = document.querySelector("#plus").addEventListener("click", function () {
    calculationButton.addEventListener("click", function () {
        if (number1Element.value.length == 0 || number2Element.value.length == 0) {
            notifyElement.innerHTML = "Chưa điền đủ hai số hợp lệ để thực hiện phép tính"
        }
        else{
            var sum = Number.parseFloat(number1Element.value) + Number.parseFloat(number2Element.value);
            var resultElement = document.querySelector(".result__input");
            resultElement.value = sum;
        }
    })  
});

var subtractElement = document.querySelector("#subtract").addEventListener("click", function () {
    calculationButton.addEventListener("click", function () {
        if (number1Element.value.length == 0 || number2Element.value.length == 0) {
            notifyElement.innerHTML = "Chưa điền đủ hai số hợp lệ để thực hiện phép tính"
        }
        else{
            var sum = Number.parseFloat(number1Element.value) - Number.parseFloat(number2Element.value);
            var resultElement = document.querySelector(".result__input");
            resultElement.value = sum;
        }
    })  
});

var multiplyElement = document.querySelector("#multiply").addEventListener("click", function () {
    calculationButton.addEventListener("click", function () {
        if (number1Element.value.length == 0 || number2Element.value.length == 0) {
            notifyElement.innerHTML = "Chưa điền đủ hai số hợp lệ để thực hiện phép tính"
        }
        else{
            var sum = Number.parseFloat(number1Element.value) * Number.parseFloat(number2Element.value);
            var resultElement = document.querySelector(".result__input");
            resultElement.value = sum;
        }
    })  
});

var divideElement = document.querySelector("#divide").addEventListener("click", function () {
    calculationButton.addEventListener("click", function () {
        if (number1Element.value.length == 0 || number2Element.value.length == 0) {
            notifyElement.innerHTML = "Chưa điền đủ hai số hợp lệ để thực hiện phép tính"
        }
        else{
            var sum = Number.parseFloat(number1Element.value) / Number.parseFloat(number2Element.value);
            var resultElement = document.querySelector(".result__input");
            resultElement.value = sum;
        }
    })  
});



// Di chuyển khỏi 2 ô nhập và thông báo nếu dữ liệu nhập vào không phải số thực (chuỗi, ...)
number1Element.addEventListener("focusout", function () {
    if (isNaN(number1Element.value))
    {
        notifyElement.innerHTML = "Giá trị của số thứ nhất không phải số thực"
    }
})

number2Element.addEventListener("focusout", function () {
    if (isNaN(number2Element.value)) {
        notifyElement.innerHTML = "Giá trị của số thứ hai không phải số thực"
    }
})











