const button = document.querySelector('button')
const popup = document.querySelector('.popup-wrapper')
const body = document.querySelector('body')

button.addEventListener('click', () => {
    popup.style.display = 'block'
    body.classList.add('no-scroll')
})

popup.addEventListener('click', event => {
    const classNameOfClickedElement = event.target.classList[0]

    if(classNameOfClickedElement === 'popup-close' || classNameOfClickedElement === 'popuplink' || classNameOfClickedElement === 'popup-wrapper'){
        popup.style.display = 'none'
        body.classList.remove('no-scroll')
    }
})