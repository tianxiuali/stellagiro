window.addEventListener('scroll', () => {
  handleHeaderScroll()
  handleVideoScroll()
})

const handleHeaderScroll = () => {
  const pageWidth = document.body.clientWidth
  const scrollTop = document.documentElement.scrollTop
  const logo = document.getElementById('logo')
  const logoImg = document.getElementById('logo-img')
  if (scrollTop > 10) {
    logo.classList.add('fixed')
    logoImg.src = './images/3x/logo@3x.png'
  } else {
    logo.classList.remove('fixed')
    logoImg.src = './images/3x/logo-large@3x.png'
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
  const pageWidth = document.body.clientWidth
  if (pageWidth > 800) {
    return
  }
  const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    autoplay: {
      delay: 6000,
    }
  });
  document.getElementById('swiper-prev').addEventListener('click', () => {
    swiper.slidePrev()
  })
  document.getElementById('swiper-next').addEventListener('click', () => {
    swiper.slideNext()
  })
}
initSwiper()

const initModal = () => {
  document.body.style.overflow = 'hidden'
  const modal = document.getElementById('modal')
  document.getElementById('modal-img').addEventListener('click', () => {
    document.body.style.overflow = 'auto'
    modal.style.display = 'none'
    location.href = '/#price'
  })

  document.getElementById('close-modal').addEventListener('click', () => {
    document.body.style.overflow = 'auto'
    modal.style.display = 'none'
  })
}
initModal()

const initMenu = () => {
  const pageWidth = document.body.clientWidth
  if (pageWidth > 800) {
    return
  }
  document.getElementById('menu-icon').addEventListener('click', () => {
    document.getElementById('menu-sp').style.display = 'block'
  })
  document.getElementById('close-menu').addEventListener('click', () => {
    document.getElementById('menu-sp').style.display = 'none'
  })
  const menuList = document.querySelectorAll('#menu-sp li')
  menuList.forEach(target => {
    target.addEventListener('click', () => {
      document.getElementById('menu-sp').style.display = 'none'
    })
  })
}
initMenu()

const initMarquee = () => {
  $(function () {
    $('.marquee').marquee({
      delayBeforeStart: 0,
      duration: 8000,
      // duplicated: true,
      // startVisible: true,
    })
  })
}
initMarquee()

const initFaqClick = () => {
  $('.faq-list li').on('click', function () {
    $(this).find('.answer').slideToggle();
  })
}
initFaqClick()