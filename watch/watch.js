const bannerTimeline = gsap.timeline();


bannerTimeline
  .from('.header__logo', 1, {
    opacity: 0,
    x: -30,
    ease: Expo.easeInOut,
    duration: 1,
  })
  .from('.header__search', 1, {
    opacity: 0,
    x: -30,
    ease: Expo.easeInOut,
    duration: 1,
  }, '-=0.8')
  .staggerFrom('.header__navItem', 1, {
    opacity: 0,
    x: -30,
    ease: Expo.easeInOut,
  }, 0.1, '-=0.6')
  .from('.hero__content--tag', 1, {
    opacity: 0,
    y: 40,
    ease: Expo.easeInOut,
  }, '-=0.4')
  .from('.hero__content--title', 1, {
    opacity: 0,
    y: 40,
    ease: Expo.easeInOut,
  }, '-=0.6')
  .from('.hero__content--para', 1, {
    opacity: 0,
    y: 40,
    ease: Expo.easeInOut,
  }, '-=0.4')
  .from('.hero__imgBx', 1, {
    x: -700
  })
  .from('.hero__cta', 2, {
    opacity: 0,
    y: 100,
  })
  .staggerFrom('.media__navItem', 1, {
    opacity: 0,
    y: 40,
    ease: Expo.easeInOut,
  }, 0.05, '-=1')


const MenuToggleBtn = document.querySelector('.header__toggle')
const headerNav = document.querySelector('.header__nav')

MenuToggleBtn.addEventListener('click', () => {
  headerNav.classList.toggle('active');
  let navTimeline = gsap.timeline();
  navTimeline.staggerFrom('.header__navItem', 1, {
    opacity: 0,
    x: -30,
    ease: Expo.easeInOut,
  }, 0.1)
})