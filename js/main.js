window.addEventListener('scroll', () => {
  handleHeaderScroll()
  handleVideoScroll()
})

const handleHeaderScroll = () => {
  const pageWidth = document.body.clientWidth
  const scrollTop = document.documentElement.scrollTop
  if (scrollTop > 10) {
    document.getElementById('logo').style.height = '100%'
    document.getElementById('logo-img').src = './images/3x/logo@3x.png'
    document.getElementById('logo-img').style.width = pageWidth > 800 ? '180px' : '80px'
  } else {
    document.getElementById('logo').style.height = pageWidth > 800 ? '220px' : '100px'
    document.getElementById('logo-img').src = './images/3x/logo-large@3x.png'
    document.getElementById('logo-img').style.width = pageWidth > 800 ? '140px' : '58px'
  }
}
handleHeaderScroll()

const handleVideoScroll = () => {
  const pageWidth = document.body.clientWidth
  const videoWrapper = document.getElementById('video-wrapper')
  if (pageWidth < 800) {
    videoWrapper.classList.remove('absolute')
    videoWrapper.classList.remove('fixed')
    return
  }
  const facility = document.getElementById('facility')
  const pageHeight = window.innerHeight
  const facRect = facility.getBoundingClientRect()
  if (facRect.top < 90 && facRect.bottom > pageHeight) {
    videoWrapper.classList.add('fixed')
    videoWrapper.classList.remove('absolute')
  } else if (facRect.bottom < pageHeight) {
    videoWrapper.classList.remove('fixed')
    videoWrapper.classList.add('absolute')
  } else {
    videoWrapper.classList.remove('absolute')
    videoWrapper.classList.remove('fixed')
  }
}

const initSwiper = () => {
  const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    autoplay: true
  });
}
initSwiper()