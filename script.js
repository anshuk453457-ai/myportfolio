
// Mobile Menu
function toggleMenu() {
    const navLinks = document.getElementById("navLinks");
    navLinks.classList.toggle("active");
}

// Close menu after clicking a link
document.querySelectorAll(".nav-links a").forEach(function(link) {
    link.addEventListener("click", function() {
        document.getElementById("navLinks").classList.remove("active");
    });
});

// Automatically update copyright year
document.getElementById("year").textContent = new Date().getFullYear();
