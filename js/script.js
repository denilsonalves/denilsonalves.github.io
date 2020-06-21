window.addEventListener('load', () => {
  function effectItems() {
    const items = document.querySelectorAll('.js-scroll');

    const windowHeight = window.innerHeight * 0.8;

    function effectScroll() {
      items.forEach((item) => {
        const itemTop = item.getBoundingClientRect().top;
        const isVisible = itemTop - windowHeight < 0;

        if (isVisible) {
          item.classList.add('active-effect');
        } else {
          item.classList.remove('active-effect');
        }
      });
    }
    effectScroll();

    window.addEventListener('scroll', effectScroll);
  }

  effectItems();
});
