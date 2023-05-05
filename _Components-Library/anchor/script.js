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



let currentBlock
let blockPosition

if (document.querySelector('.header_main')) {
    document.querySelectorAll('.nav-panel__item').forEach((el => {
        el.addEventListener('click', (e) => {
            let linkChars = el.querySelector('a').href.split('')
            let hashLength = linkChars.filter(char => char == '#');
            if (hashLength.length == 0) return
            e.preventDefault()
            let hashIndex
            linkChars.findIndex((element, index, array) => {
                if (element == '#') {
                    hashIndex = index + 1;
                    return index;
                }
            })
            currentBlock = linkChars.slice(hashIndex).join('')
            blockPosition = document.getElementById(currentBlock).offsetTop - 120
            window.scroll({
                top: blockPosition,
                left: 0,
                behavior: 'smooth'
            });
        })
    }))
}

window.onload = () => {
    let urlHashLength = document.location.href.split('').filter(char => char == '#');
    currentBlock = document.location.hash.split('').slice(1).join('')
    if (document.getElementById(currentBlock)) {
        blockPosition = document.getElementById(currentBlock).offsetTop - 100
        if (urlHashLength.length > 0) {
            window.scroll({
                top: blockPosition,
                left: 0,
                behavior: 'smooth'
            });
        }
    }
}