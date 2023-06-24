let randomnumber1 = Math.floor(Math.random()*6)+1
let dice1="./images/dice"+randomnumber1+ ".png"
let dice1image=document.querySelectorAll("img")[0]
dice1image.setAttribute("src",dice1)

let randomnumber2 = Math.floor(Math.random()*6)+1
let dice2="./images/dice"+randomnumber2+ ".png"
let dice2image=document.querySelectorAll("img")[1]
dice2image.setAttribute("src",dice2)

if(randomnumber1>randomnumber2){
    document.querySelector("h1").innerHTML="Player 1 win"
}else if(randomnumber2>randomnumber1){
    document.querySelector("h1").innerHTML="Player 2 win"

}else{
    document.querySelector("h1").innerHTML="Draw"
}