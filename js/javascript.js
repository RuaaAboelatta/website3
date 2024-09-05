var search = document.querySelectorAll(".sbtn");

search.forEach(function(button) {
    button.onclick = function() {
        alert("The piece has been found");
    }
})
