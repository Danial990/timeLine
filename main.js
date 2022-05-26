const items = document.querySelectorAll('#timeline li');

const isInViewport = el => {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
    (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

const run = () =>
  items.forEach(item => {
    if (isInViewport(item)) {
      item.classList.add('show');
    }
  });

// Events
window.addEventListener('load', run);
window.addEventListener('resize', run);
window.addEventListener('scroll', run);




// color

const color = document.querySelectorAll('[data-color]');

color.forEach(element => {
  element.style.backgroundColor = "#000000";
});


const colorWorks = document.querySelectorAll('[data-work]');

colorWorks.forEach(element => {
  element.style.backgroundColor = "#df0000";
});

const colorFuture = document.querySelectorAll('[data-future]');

colorFuture.forEach(element => {
  element.style.backgroundColor = "#ffcf00";
});