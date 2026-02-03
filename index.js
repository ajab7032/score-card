let hScore = document.getElementById("hscore")
let gScore = document.getElementById("gscore")
let hCount = 0;
let gCount = 0;

function hAddOne()
{
    hCount+=1
    hScore.textContent = hCount;
}

function hAddTwo()
{
    hCount+=2
    hScore.textContent = hCount;
}

function hAddThree()
{
    hCount+=3
    hScore.textContent = hCount;
}

function gAddOne()
{
    gCount+=1
    gScore.textContent = gCount;
}

function gAddTwo()
{
    gCount+=2
    gScore.textContent = gCount;
}

function gAddThree()
{
    gCount+=3
    gScore.textContent = gCount;
}

function newGame()
{
    hCount=0
    gCount=0
    gScore.textContent = gCount;
    hScore.textContent = hCount;
}