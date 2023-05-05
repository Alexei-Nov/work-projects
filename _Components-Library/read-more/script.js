document.querySelectorAll('.read-more__btn').forEach(el => {
    let toggleText = el.getAttribute('data-toggle-text')
    let currentText = el.innerHTML
    let limitHeight = +getComputedStyle(el.closest('.read-more').querySelector('.read-more__text')).height.split('').slice(0, -2).join('')
    let fullHeight = el.closest('.read-more').querySelector('.read-more__text').scrollHeight

    if (limitHeight >= fullHeight) {
        el.remove()
    }

    el.addEventListener('click', (e) => {
        if (!e.target.closest('.read-more_show')) {
            document.querySelectorAll('.read-more_show').forEach(elem => {
                elem.querySelector('.read-more__btn').innerHTML = currentText
                elem.classList.remove('read-more_show')
                elem.querySelector('.read-more__text').style.maxHeight = limitHeight + 'px'
            })
            e.target.closest('.read-more').classList.add('read-more_show')
            e.target.innerHTML = toggleText
            el.closest('.read-more').querySelector('.read-more__text').style.maxHeight = fullHeight + 'px'

        } else {
            document.querySelectorAll('.read-more_show').forEach(elem => {
                elem.querySelector('.read-more__btn').innerHTML = currentText
                elem.classList.remove('read-more_show')
                elem.querySelector('.read-more__text').style.maxHeight = limitHeight + 'px'
            })
        }
    })
});
