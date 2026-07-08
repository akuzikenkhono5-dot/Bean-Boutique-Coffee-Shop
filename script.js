function closeModel() {
    document.getElementById("welcomemodel").style.display = "none";
}
window.onclick = function(event) {
    let model = document.getElementById("welcomemodel");
    if (event.target == model) {
        model.style.display = "none";
    }
}
