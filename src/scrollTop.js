import { animateScroll as scroll } from 'react-scroll'

export function scrollTop(callback) {
    if (window.pageYOffset === 0) {
        return callback()
    }

    scroll.scrollToTop({
        duration: 700
    })

    setTimeout(() => {
        callback()
    }, 800)
}