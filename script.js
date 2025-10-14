
const navMenu = document.querySelectorAll('nav a')
const removeActiveClass = () => {
  navMenu.forEach(itme => {
    itme.classList.remove('active')
  })
}

navMenu.forEach(itme => {
  itme.addEventListener('click', () => {
    removeActiveClass()
    itme.classList.add('active')
  })
})



const themeBtn = document.querySelector('.theme_btn')
themeBtn.addEventListener('click', () => {
  if(document.body.className == ''){
    document.body.className = 'dark'
    localStorage.setItem('portfolio_theme', 'dark')
    themeBtn.innerHTML = `<i class="ph ph-sun"></i>`

  } else{
    document.body.className = ''
    localStorage.setItem('portfolio_theme', '')
    themeBtn.innerHTML = `<i class="ph ph-moon"></i>`
  }
})


// GET THEME FROM localStorage

window.addEventListener('load', () => {
  const savedTheme = localStorage.getItem('portfolio_theme') || ''
  document.body.className = savedTheme
  if(document.body.className == '') {
    themeBtn.innerHTML = ` <i class="ph ph-moon"></i>`

  } else {
     themeBtn.innerHTML = ` <i class="ph ph-sun"></i>`
  }
})