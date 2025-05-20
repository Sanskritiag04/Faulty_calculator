
 let screen=document.querySelector("h2");
 let numbers=document.querySelectorAll(".circle");

const clear=()=>
{
    console.log(screen.innerText);
    screen.innerText="";
}

let op;
let string="";
let arr=Array.from(numbers);

function faultyfunc() {
    switch(op)
    {
    case "+": string=string.replace("+","-");
    break;
    case "-": string=string.replace("-","/");
    break;
    case "/": string=string.replace("/","**");
    break;
    case "*": string=string.replace("*","+");
    break;
    case "**": string=string.replace("**","*");
    break;
    default: console.log("wrong operator!");
    }
    console.log(string);
    return string;
};



arr.forEach(number=>{
    number.addEventListener('click',(e)=>{
        if(e.target.innerText== '=')
        {
            let fault=Math.floor(Math.random()*100);
            console.log(fault);
            if(fault<=30) string=faultyfunc();
            string=eval(string);
            screen.innerText=string;
            if(fault<=30) screen.innerText=string+"\nFault occured!\nPlease press AC!";
        }
        else if(e.target.innerText== 'CE'){
            string=string.substring(0,string.length-1);
            screen.innerText=string;
        }
        else if(e.target.innerText== 'AC'){
            string="";
            clear();
        }
        else{
        if(e.target.innerText=='+') op="+";
        if(e.target.innerText=='-') op="-";
        if(e.target.innerText=='*') op="*";
        if(e.target.innerText=='/') op="/";
        if(e.target.innerText=='**') op="**";
        console.log(op);
        string+=e.target.innerHTML;
        screen.innerText=string;
        }
    })
})

