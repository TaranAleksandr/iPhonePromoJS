const scrollFunc = () => {
const links = document.querySelectorAll('.header-menu__item a');
const linkCharacteristics = document.querySelector('.card-details__link-characteristics')

const newArray = [...links, linkCharacteristics]

newArray.forEach((element) => {
  element.addEventListener('click', (Event) => {
    Event.preventDefault()

    const id = element.getAttribute('href').substring(1)
    const section = document.getElementById(id)

    if (section) {
      seamless.scrollIntoView(section, {
        behavior: 'smooth',
        block: 'start'
      })
    } else {
      console.log('нет id');
    }});
  })
}

scrollFunc()