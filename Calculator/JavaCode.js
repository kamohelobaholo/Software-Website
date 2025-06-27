let display = document.getElementById('display');
let historydiv = document.getelementarybyId('history');
let history = [];
function append(char){
    if (display.innerText === '0 '|| display.innerText === 'Error'){
        display.innerText = char;
    }else{
        display.innerText += char;
    }
}
function clearDisplay() {
    display.value = '0';
}
function deletelast() {
    display.value = display.value.slice((0,-1));
}
function calculate(){
    try {
        let results = eval(display.innerText.replace('///g', '/').replace('/*/g', '*'));
            history.pushState(display.innertext + "="+ result);
            historydiv.innerHTML = history.slice(-5).reverse().join('<br>');

       // display.value = eval(display.value);
    }
    catch{
        display.innerText = 'error';
    }
}
function toggleMode(){
    document.body.classList.toggle('dark');
}