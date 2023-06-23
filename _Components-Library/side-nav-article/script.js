// article detail nav
document.querySelectorAll('.article-nav').forEach(nav => {
    let titleArr = nav.querySelectorAll('.article-content h2')
    titleArr.forEach(title => {
        nav.innerHTML += `<div class="article-nav__item">${title.innerText}</div>`
    })
    let anchorArr = nav.querySelectorAll('.article-nav__item')
    anchorArr[0].classList.add('article-nav__item_active')

    anchorArr.forEach((anchor, index) => {
        anchor.addEventListener('click', (e) => {
            if (!anchor.closest('.article-nav__item_active')) {
                nav.querySelector('.article-nav__item_active').classList.remove('article-nav__item_active')
                anchor.classList.add('article-nav__item_active')

                window.scroll({
                    top: titleArr[index].offsetTop,
                    left: 0,
                    behavior: 'smooth'
                });
            }
        })
    })

    document.addEventListener('scroll', (e) => {
        anchorArr.forEach((anchor, index) => {
            if (titleArr[index].offsetTop < window.scrollY + (window.innerHeight / 2)) {
                nav.querySelector('.article-nav__item_active').classList.remove('article-nav__item_active')
                anchorArr[index].classList.add('article-nav__item_active')
            }
            titleArr.offsetTop
        })
    })
})