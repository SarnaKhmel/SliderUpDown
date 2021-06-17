const downBtn = document.querySelector('.down-button')
const upBtn = document.querySelector('.up-button')


const sidebar = document.querySelector('.sidebar')
const mainSlide = document.querySelector('.main-slide')

const container = document.querySelector('.container')

const slidesCount = mainSlide.querySelectorAll('div').length

let activeSlideIndex = 0

 sidebar.style.top = `-${(slidesCount - 1) * 100}vh`

upBtn.addEventListener('click', () => {
    changeSlide('up')
    console.log('up')
})

downBtn.addEventListener('click', () => {
    changeSlide('down')
    console.log('down')
})

document.addEventListener('keydown', e => {
    if (e.key === 'ArrowUp'){
        changeSlide('up')
    } else if (e.key === 'ArrowDown'){
        changeSlide('down')
    }
})

function changeSlide(direction) {
    console.log(direction)
    if (direction === 'up') {
        activeSlideIndex++
        if (activeSlideIndex === slidesCount) {
            activeSlideIndex = 0
        }
        console.log(activeSlideIndex)
    } else if (direction === 'down') {
        activeSlideIndex--
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesCount - 1 
        }
    }

    //mainSlide.style.transform = `translateY(-2000px)`
    const height = container.clientHeight

    mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`
    sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`
}