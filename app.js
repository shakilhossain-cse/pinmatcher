function generatePin() {
    const keyword = Math.floor(Math.random()*5565)
    const keywordString = keyword + '';
    if (keywordString.length == 4) {
        document.getElementById('DisplayNumber').value = keywordString;
    }else{
        generatePin();
    }

}

document.getElementById('keyword').addEventListener('click',function (e) {
    let pin = document.getElementById('displayPin');
    const number = e.target.innerText;
    if (isNaN(number)) {
        if(number == 'C'){
            pin.value = "";
        }
    }else{
        const currentNumber =pin.value + number;
        pin.value = currentNumber;
    }
})

document.getElementById('submitBtn').addEventListener('click',function () {
    let genPin =  document.getElementById('DisplayNumber').value;
    let pin = document.getElementById('displayPin').value ;
    if (genPin == pin){
        pin = '';
       document.getElementById('success').style.display = "block";
       document.getElementById('error').style.display = "none";
    }else{
        document.getElementById('error').style.display = "block";
        document.getElementById('success').style.display = "none";
    }
})