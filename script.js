const buttons = document.querySelectorAll("[data-wrapper-button]");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const direction = button.dataset.wrapperButton === "next" ? 1 : -1;
        const wrapper = button.closest("[data-wrapper]");
        if (!wrapper) return;

        const slidesContainer = wrapper.querySelector("[data-slides]");
        if (!slidesContainer) return;

        const activeSlide = slidesContainer.querySelector("[data-active]");
        if (!activeSlide) return;

        const slides = Array.from(slidesContainer.children);
        let newIndex = slides.indexOf(activeSlide) + direction;

        if (newIndex < 0) {
            newIndex = slides.length - 1;
        } else if (newIndex >= slides.length) {
            newIndex = 0;
        }

        slides[newIndex].setAttribute("data-active", "true");
        activeSlide.removeAttribute("data-active");
    });
});