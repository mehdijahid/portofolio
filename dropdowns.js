document.getElementById("about").addEventListener("click", function(event) {
    event.preventDefault();
    const dropdown = this.nextElementSibling;
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
});
