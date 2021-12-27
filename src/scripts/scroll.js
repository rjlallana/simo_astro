const element = document.querySelector(".flex-container");
// Scroll horizontal when a element .container is hovered
element.addEventListener('wheel', (event) => {
    event.preventDefault();
    console.log('scroll horizontal');
    element.scrollBy({
      left: event.deltaY < 0 ? -30 : 30,
    });
  });