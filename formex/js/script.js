document.addEventListener('DOMContentLoaded', function () {

    //------side navbar-----------------

    let navItem = document.querySelectorAll('.catalog__nav_item');

    for (let i = 0; i < navItem.length; i++) {
        navItem[i].addEventListener('click', sideNavBar)
    }

    function sideNavBar(e) {
        if (!e.target.closest('.open')) {
            if (e.target.parentElement.parentElement) {
                e.target.parentElement.parentElement.classList.add('open')
            } else if (e.target.parentElement.parentElement) {
                e.target.parentElement.parentElement.querySelector('.catalog__nav_item').classList.add('open')
            }
        } else {
            if (e.target.closest('a')) return
            if (e.target.parentElement.parentElement) {
                e.target.parentElement.parentElement.classList.remove('open')
            } else if (e.target.parentElement.parentElement) {
                e.target.parentElement.parentElement.querySelector('.catalog__nav_item').classList.add('open')
            }
        }
    }

    //--------Dropdown filter---------------
    if (document.querySelector('.dropbtn')) {
        document.querySelector('.dropbtn').addEventListener('click', selectFunction)
    }

    function selectFunction() {
        document.getElementById("myDropdown").classList.toggle("show");
        document.querySelector(".dropbtn").classList.toggle("show");
    }

    window.onclick = function (event) {
        if (!event.target.matches('.dropbtn')) {
            if (document.querySelector('.dropbtn')) {
                document.querySelector(".dropbtn").classList.remove("show");
            }
            var dropdowns = document.getElementsByClassName("dropdown-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }

    //------------card counter------------------

    document.addEventListener('click', cardCounter)

    function cardCounter(e) {
        if (!e.target.closest('.counter__wrapper')) return

        if (e.target.closest('.counter-plus')) {
            e.target.parentElement.querySelector('input').value++
        }
        else if (e.target.closest('.counter-min')) {
            if (e.target.parentElement.querySelector('input').value == 1) return
            e.target.parentElement.querySelector('input').value--
        }
    }

    //----------------scrollBtn----------------
    if (document.querySelector('.scroll-btn')) {
        document.addEventListener('scroll', scrollBtn);
        document.querySelector('.scroll-btn').addEventListener('click', scrollBtnClick);
    };

    function scrollBtn() {
        if (window.pageYOffset < 400) return
        document.querySelector('.scroll-btn').style.display = 'block';
    };

    function scrollBtnClick() {
        window.scrollTo(0, 0);
        document.querySelector('.scroll-btn').style.display = 'none';
    };

    //----------tab-----------------

    if (document.querySelectorAll('.tab__title')) {
        for (let i = 0; i < document.querySelectorAll('.tab__title').length; i++) {
            document.querySelectorAll('.tab__title')[i].addEventListener('click', tabSelect);
        }
    };

    function tabSelect(e) {
        if (!e.target.closest('.tab__selected')) {
            document.querySelector('.tab__selected').classList.remove('tab__selected');
            e.target.classList.add('tab__selected');

            if (document.querySelector('.tab__selected').closest('.tab__title_properties')) {
                document.querySelector('.selected').classList.remove('selected');
                document.querySelector('.tab__properties').classList.add('selected');
            } else if (document.querySelector('.tab__selected').closest('.tab__title_values')) {
                document.querySelector('.selected').classList.remove('selected');
                document.querySelector('.tab__values').classList.add('selected');
            }
        }
    };

    //----------product slider----------------

    let sliderProduct = () => {
        let productSwiper = new Swiper('.product__slider ', {
            slidesPerView: 3,
            spaceBetween: 30,
            pagination: {
                el: '.product-pagination',
                type: 'bullets',
                clickable: true,
            },
        });
    };
    sliderProduct();

    //-----------basket mask----------------
    if (document.getElementById('phone-mask')) {
        var phoneMask1 = IMask(document.getElementById('phone-mask'), {
            mask: '+{7}(000)000-00-00'
        });
    }
});