let addBtn = document.getElementsByClassName("addBtn") //.addEventListener("click", add, false);
let subBtn = document.getElementsByClassName("subBtn");
let divBtn = document.getElementsByClassName("divBtn");
let mulBtn = document.getElementsByClassName("mulBtn");
let numBtns = document.getElementsByClassName("numButn") //.addEventListener("click", getOperands, false);

operands = [];
operations = [];

//TODO: make function to push numBtns into operands array as they're clicked

function formatNumButtons(){

}


//add function
function add(n1, n2){
	return n1 + n2;
}
//subtract function
function subtract(n1, n2){
	return n1 - n2;
}

//multiply function
function multiply(n1, n2){
	return n1 * n2;
}
//divide function
function divide(n1, n2){
	return n1/n2;
}
//calculate function
//erase function

function getOperands(){

}