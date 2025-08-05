document.addEventListener("DOMContentLoaded", function () {
    var navbarContainer = document.getElementById("navbarContainer");
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            navbarContainer.innerHTML = this.responseText;
        }
    };
    xhr.open("GET", "navbar.html", true);
    xhr.send();
});


