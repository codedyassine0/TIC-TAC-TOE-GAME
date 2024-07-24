let boxes = document.querySelectorAll(".box");
let turn ="X";
let gameover = false;

boxes.forEach(e=>{
    e.innerHTML=""
    e.addEventListener("click", ()=>{
        if(!gameover && e.innerHTML===""){
            if(e.innerHTML==""){
                e.innerHTML = turn;
                checkWin();
                checkDraw();
                changeTurn();
            }
        }
    })
})

function changeTurn(){
    if(turn === "X"){
        turn = "O";
        document.querySelector(".bg").style.left = "85px"; }
    else{
        turn = "X";
        document.querySelector(".bg").style.left = "0";

    }
}
function checkWin(){
    let wincondition = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    for(let i=0;i<wincondition.length;i++){
        let v0 = boxes[wincondition[i][0]].innerHTML;
        let v1 = boxes[wincondition[i][1]].innerHTML;
        let v2 = boxes[wincondition[i][2]].innerHTML;
        if(v0!=="" && v0===v1 && v0===v2){
            gameover = true;
            document.querySelector("#results").innerHTML = turn + " win ";
            document.querySelector("#play-again").style.display = "inline" ;
            for(j=0;j<3;j++){
                boxes[wincondition[i][j]].style.backgroundColor = "#00ff00";
                boxes[wincondition[i][j]].style.color = "#000";
            }
        }
        
    }
}
function checkDraw(){
    let counter = 0;
    for(let i=0;i<9;i++){
        if(boxes[i].innerHTML !== ""){
            counter++;
        }
    }
    if(counter === 9 && !gameover){
        document.querySelector("#results").innerHTML = "DRAW";
        document.querySelector("#play-again").style.display = "inline" ;
    }
}
document.querySelector("#play-again").addEventListener("click", ()=>{
    gameover = false;
    turn = "X";
    document.querySelector(".bg").style.left = "0";
    document.querySelector("#results").innerHTML = "";
    document.querySelector("#play-again").style.display = "none" ;
    boxes.forEach(e=>{
        e.innerHTML = "";
        e.style.removeProperty("background-color") ;
        e.style.color = "#fff";
    })
})
