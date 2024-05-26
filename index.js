
console.log("java says hi now");
let score = 0;
let x = getNumber();
let y = x;
function start(){
    if(score >= 0){
    document.getElementById("number").innerHTML = "number = " + x;
    }
   // const str = document.getElementById("number").innerHTML;
    //document.write(str);
}
function getNumber(){
    return (Math.floor(Math.random()*10) + 1);
}

function higher(){
    x =y;
    start();
    y = getNumber();
    document.getElementById("new").innerHTML = "next number =" + y;
    if(x<=y){
        score++;
    }
    document.getElementById("scored").innerHTML = "score:" + score;

}
function lower(){
    x =y;
    start();
    y = getNumber();
    document.getElementById("new").innerHTML = "next number =" + y;
    if(x>=y){
        score++;
    }
    document.getElementById("scored").innerHTML = "score:" + score;

}