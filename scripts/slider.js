let slideIndex = 0;
let slideInterval;
function passarSlideAutomaticamente() {
  slideInterval = setInterval(() => {
    slideIndex++;
    if (slideIndex >= $(".slide").length) {
      slideIndex = 0;
    }
    mostrarSlide(slideIndex);
  }, 5000);
}

passarSlideAutomaticamente();

function mostrarSlide(n) {
  clearInterval(slideInterval);
  slideIndex = n;
  const slides = $(".slide");
  const inputs = $(".manual-btn");
  slides.each((index, slide) => {
    const $slide = $(slide);
    const $input = $(inputs[index]);
    if (index !== n) {
      $slide.removeClass("active");
      $input.removeClass("active");
    } else {
      $slide.addClass("active");
      $input.addClass("active");
    }
  });
  passarSlideAutomaticamente();
}

const radios = $("[type=radio]");
radios.each((index, radio) => {
  $(radio).on("change", () => {
    mostrarSlide(index);
  });
});

radios[0].checked = true;
mostrarSlide(0);
