var exchangeForm = document.querySelector(".exchangeForm");
exchangeForm.onsubmit = function(e){
    e.preventDefault();
    var elements=e.target.elements;
    
    var amount=elements[0].value;
    var currency=elements[1].value;
    if(currency=="dollar"){
        amount*=3.6;
    }
    else if (currency=="dinar"){
        amount*=5;
    }
    else{
        amount*=1;
    }
    document.querySelector("p").innerHTML=amount;
}