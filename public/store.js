// make remove buttons remove from cart
var removeCartItemButtons = document.getElementsByClassName('btn-danger')

console.log(removeCartItemButtons)

for(var i= 0; i < removeCartItemButtons.length; i++) {
var button = removeCartItemButtons[i];

button.addEventListener('click', function(event){
var buttonClicked = event.target
// to remove row from dom
buttonClicked.parentElement.parentElement.remove()
})
}