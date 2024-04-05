document.addEventListener("DOMContentLoaded", function() {
    fetch("about.txt")
    .then(response => response.text())
    .then(data => {
        document.getElementById("aboutText").innerHTML = data;
    })
    .catch(error => {
        console.error("Error fetching the about text:", error);
    });
});