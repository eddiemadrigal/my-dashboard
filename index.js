function openMenu() {
    const el = document.getElementById('drawer');
    if (el.style.display === "block") {
        el.style.display = "none"
    } else {
        el.style.display = "block";
    }
}