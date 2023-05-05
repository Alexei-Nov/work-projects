document.querySelectorAll('.anchor').forEach((el => {
    el.addEventListener('click', (e) => {
        e.preventDefault()
        let currentAnchor = e.target.href.split('#').slice(1).join('')
        let blockPosition = document.getElementById(currentAnchor).offsetTop

        window.scroll({
            top: blockPosition,
            left: 0,
            behavior: 'smooth'
        });
    })
}))