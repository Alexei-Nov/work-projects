// tab
document.querySelectorAll('.tab').forEach(el => {
    el.addEventListener('click', (e) => {
        if (e.target.closest('.tab__link')) {
            el.querySelectorAll('.tab__link').forEach(elem => {
                elem.classList.remove('tab__link_active')
            })
            e.target.classList.add('tab__link_active')

            el.querySelectorAll('.tab__item').forEach(elem => {
                elem.classList.remove('tab__item_active')
            })
            let index = [...e.target.parentElement.children].indexOf(e.target)
            el.querySelectorAll('.tab__item')[index].classList.add('tab__item_active')
        }
    })
})
