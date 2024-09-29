// The addEventListener() method of the EventTarget interface sets up a function that will be called whenever the specified event is delivered to the target.


var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i< numberOfDrumButtons; i++) {
document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    alert("I got clicked!");
});
}