// Scroll to top button (from earlier)
document.addEventListener("DOMContentLoaded", () => {
    const scrollBtn = document.createElement("button");
    scrollBtn.innerText = "↑ Top";
    scrollBtn.id = "scrollTopBtn";
    document.body.appendChild(scrollBtn);

    Object.assign(scrollBtn.style, {
        position: "fixed",
        bottom: "20px",
        right: "20px",
        padding: "10px 15px",
        fontSize: "16px",
        background: "#ffafbd",
        color: "#333",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        display: "none",
        boxShadow: "0 4px 10px rgba(0,0,0,0.2)"
    });

    window.addEventListener("scroll", () => {
        scrollBtn.style.display = window.scrollY > 200 ? "block" : "none";
    });

    scrollBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // Lightbox for images
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const captionText = document.getElementById("caption");
    const closeBtn = document.querySelector(".close");

    document.querySelectorAll(".art-card img").forEach(img => {
        img.addEventListener("click", () => {
            lightbox.style.display = "block";
            lightboxImg.src = img.src;
            captionText.innerHTML = img.nextElementSibling.innerText;
        });
    });

    closeBtn.addEventListener("click", () => {
        lightbox.style.display = "none";
    });

    window.addEventListener("click", (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = "none";
        }
    });
});
