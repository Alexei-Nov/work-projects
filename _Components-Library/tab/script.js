//------------------tab----------------------------

document.querySelectorAll('.tab__link').forEach(el => {
    el.addEventListener('click', (e) => {
        let currentTab = e.target.closest('.tab')
        if (!e.target.closest('.tab__link-active')) {
            e.target.closest('.tab').querySelector('.tab__link-active').classList.remove('tab__link-active')
            e.target.classList.add('tab__link-active')
        }
        for (let i = 0; i < currentTab.querySelectorAll('.tab__link').length; i++) {
            if (currentTab.querySelectorAll('.tab__link')[i].closest('.tab__link-active')) {
                e.target.closest('.tab').querySelector('.tab__item-active').classList.remove('tab__item-active')
                currentTab.querySelectorAll('.tab__item')[i].classList.add('tab__item-active')
            }
        }
    })
})
