window.addEventListener("load", function () {
    alert("Selamat datang di profil Elyza!");
});

const menuLinks = document.querySelectorAll("nav a");
menuLinks.forEach(link => {
    link.addEventListener("click", function () {
        menuLinks.forEach(l => l.classList.remove("aktif"));
        this.classList.add("aktif");
    });
});
