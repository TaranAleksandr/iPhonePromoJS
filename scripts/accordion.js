const accordion = () => {
  const chItems = document.querySelectorAll(".characteristics__item");
  const chButtons = document.querySelectorAll('.characteristics__title')
  const chContents = document.querySelectorAll('.characteristics__description')

  const inActiveAll = () => {
    chButtons.forEach((btn) => {
      btn.classList.remove('active')
    })
    chContents.forEach((cnt) => {
      cnt.classList.remove('active')
      cnt.style.height = ''
    })
  }

  inActiveAll()

  chItems.forEach((item) => {
    const chButton = item.querySelector(".characteristics__title");
    const chContent = item.querySelector(".characteristics__description");

    chButton.addEventListener("click", () => {
      inActiveAll()


      if (chContent.classList.contains("active")) {
        chContent.style.height = "";
      } else {
        chContent.style.height = chContent.scrollHeight + "px";
      }
      chButton.classList.toggle("active");
      chContent.classList.toggle("active");
    });
  });
};

accordion();
