// read more 
document.querySelectorAll('.read-more').forEach(el => {
    let btn = el.querySelector('.read-more__btn')
    let text = el.querySelector('.read-more__text')

    let limitHeight = +text.style.maxHeight.split('').slice(0, -2).join('')
    let fullHeight = text.scrollHeight

    if (limitHeight >= fullHeight) {
        btn.remove()
        el.classList.toggle('read-more_open')
    }

    btn.addEventListener('click', (e) => {
        e.target.closest('.read-more_open') ? text.style.maxHeight = limitHeight + 'px' : text.style.maxHeight = fullHeight + 'px'

        let currentText = btn.innerHTML
        let toggleText = btn.getAttribute('data-toggle-text')
        btn.setAttribute('data-toggle-text', currentText)
        btn.innerText = toggleText
        el.classList.toggle('read-more_open')
    })
});