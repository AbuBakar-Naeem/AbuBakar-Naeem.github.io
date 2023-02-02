const display = document.getElementById("display");
const buttons = Array.from(document.getElementsByClassName("button-container"));

buttons.map( button => {
    button.addEventListener('click', (e) =>{
        e.preventDefault();
        switch(e.target.innerText){
            case 'AC' :
                display.innerText = "";
                break;
            case '←':
                display.innerText = display.innerText.slice(0,-1);
                break;
            case '=' :
                try{
                    display.innerText = eval(display.innerText);
                }    
                catch{
                    display.innerText = "Error!!"
                }
                break;
            default :
            display.innerText += e.target.innerText; 
        }
    });
});
























/* let display = document.getElementById("display");
let buttons = Array.from(document.getElementsByClassName("button-container"));

buttons.map( button =>{
    button.addEventListener('click', (e) => {
        switch(e.target.innerHTML){
            case 'AC' :
                display.innerHTML = '';
                break; 
            case '←':
                display.innerHTML = display.innerHTML.slice(0,-1);
                break;
            case '=':
                 try{
                    display.innerHTML = eval(display.innerHTML);
                 }
                 catch{
                    display.innerHTML = "Error!"
                 };
                break;
            default : 
                display.innerHTML += e.target.innerHTML;
        };
    });
});
  */