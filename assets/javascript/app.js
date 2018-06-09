$("button").click(function() {
window.location.href="index2.html";

}); 
$(".darkBeerC").click(function() {
    window.location.href="index2a.html";
});
$(".darkBeerW").click(function() {
    window.location.href="index2b.html";
});
for(var i = 3; i <= 5; i++) {
var delay = 1000; 
setTimeout(function(){ window.location = "index" + i +".html"; }, delay);
console.log(this);
}