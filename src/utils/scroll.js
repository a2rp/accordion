export function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "auto" });
}

export function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);

    if (!section) {
        return;
    }

    const headerOffset = 90;
    const sectionTop = section.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
        top: Math.max(0, sectionTop - headerOffset),
        behavior: "auto",
    });
}
