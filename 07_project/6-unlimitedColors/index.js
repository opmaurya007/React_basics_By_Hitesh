//generate a random color
const randomColor = function(){
    const hex='0123456789ABCDEF';
    let color='#'
    for(let i=0;i<6;i++){
        color +=hex[Math.floor(Math.random()*16)];
    }
    return color;
};
let intervalId;
const startChnagingColor=function(){
    if(!intervalId){
        intervalId=setInterval(chnageBgColor,1000);
    }
    function chnageBgColor(){
        document.body.style.backgroundColor=randomColor();
    } 
};
const stopChangingColor=function(){
    clearInterval(intervalId);
    intervalId=null;
};
console.log(randomColor());
document.querySelector('#start').addEventListener('click',startChnagingColor);
document.querySelector('#stop').addEventListener('click',stopChangingColor);