function handleDeposite(){
    var inputvalue = document.getElementById("deposite-input").value;
    var convertinputvalue = convertToNumber(inputvalue);
    var depositeamount = document.getElementById("deposite-amount").innerText;
    var convertdepositeamount = convertToNumber(depositeamount);
    var sum = convertinputvalue + convertdepositeamount;
    document.getElementById("deposite-amount").innerText = sum;
    document.getElementById("deposite-input").value= "";

    var totalamount = document.getElementById("total-amount").innerText;
    var convertedtotalamount = convertToNumber(totalamount);
    var totalsum = convertinputvalue + convertedtotalamount;
    document.getElementById("total-amount").innerText = totalsum;

    
}
function convertToNumber(value){
    return parseFloat(value);
}

function handleWithdraw(){
    var inputwithdraw = document.getElementById("withdraw-input").value;
    var convertedinputwithdraw = convertToNumber(inputwithdraw);
    var withdrawamount = document.getElementById("withdraw-amount").innerText;
    var convertwithdrawamount = convertToNumber(withdrawamount);
    var sum = convertedinputwithdraw  + convertwithdrawamount;
    document.getElementById("withdraw-amount").innerText = sum;
    document.getElementById("withdraw-input").value = "";

    var totalamount = document.getElementById("total-amount").innerText;
    var convertedtotalamount = convertToNumber(totalamount);
    var totalsum =  convertedtotalamount - convertedinputwithdraw;
    document.getElementById("total-amount").innerText = totalsum;
    
}