var btn = document.getElementById("button");

btn.addEventListener('click', function() {
    document.getElementById("loader").style.cssText = "opacity: 1; z-index: 1;";
    document.getElementById("login-container").style.cssText = "filter: blur(1.5px); -webkit-filter: blur(1.5px);";
    window.setTimeout(function() {
        window.location.href = "../Forside/index.html";
    }, 3000);
});