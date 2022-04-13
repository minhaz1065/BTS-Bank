document.getElementById("depositeOK").addEventListener("click",function(){
    let moneyin = parseFloat(document.getElementById("deposite").value);
    let moneyshow = parseFloat(document.getElementById("showDeposite").innerHTML);
    let totalin = moneyin + moneyshow;
    let balance = parseFloat(document.getElementById("showBalance").innerHTML);
    let currentBalance = balance + moneyin;
    document.getElementById("showDeposite").innerHTML = totalin;
    document.getElementById("deposite").value = "";
    document.getElementById("showBalance").innerHTML = currentBalance;
});

document.getElementById("withdrawOK").addEventListener("click",function(){
    let balance = parseFloat(document.getElementById("showBalance").innerHTML);
    let prevwithdraw = parseFloat(document.getElementById("showWithdraw").innerHTML);
    let withdraw = parseFloat(document.getElementById("withdraw").value);
    let totalout = balance - withdraw;
    let totalwithdraw = withdraw + prevwithdraw;
    document.getElementById("showWithdraw").innerHTML = totalwithdraw;
    document.getElementById("withdraw").value = "";
    document.getElementById("showBalance").innerHTML = totalout;
});
