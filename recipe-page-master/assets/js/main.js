

var i = 1;
var elInstruction = document.querySelectorAll('.cont__elinstru');
console.log(elInstruction);
elInstruction.forEach((e)=>{
    var text = i++;
    e.setAttribute("data-txt", text)
})
// https://stackoverflow.com/questions/54992319/vanilla-js-equivalent-of-jquery-attr-attributename-function

