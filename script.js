var modal = document.getElementById("modal");
var btn = document.getElementById("modal-window");
var skip = document.getElementsByClassName("modal__skip")[0];

btn.onclick = function () {
    modal.style.display = "block";
}

skip.onclick = function (event) {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
