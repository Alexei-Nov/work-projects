document.addEventListener("DOMContentLoaded",(function(){new Swiper(".home-slider__container",{slidesPerView:1,spaceBetween:30,loop:!0,centeredSlides:!0,autoplay:{delay:3e3,disableOnInteraction:!1,waitForTransition:!1},pagination:{el:".home-slider__pagination",type:"bullets",clickable:!0},navigation:{nextEl:".home-slider__next",prevEl:".home-slider__prev"},breakpoints:{0:{slidesPerView:1,spaceBetween:10},769:{slidesPerView:1.25,spaceBetween:20},1024:{slidesPerView:1,spaceBetween:30}}});new Swiper(".default-slider__container",{slidesPerView:"auto",spaceBetween:30,loop:!0,autoHeight:!0,pagination:{el:".default-slider__pagination",type:"bullets",clickable:!0},navigation:{nextEl:".default-slider__next",prevEl:".default-slider__prev"},breakpoints:{0:{slidesPerView:1,spaceBetween:15},680:{slidesPerView:2,spaceBetween:15},769:{slidesPerView:"auto",spaceBetween:15},991:{spaceBetween:30}}});new Swiper(".card__gallery",{slidesPerView:1,spaceBetween:30,loop:!0,nested:!0,pagination:{el:".card__gallery-pagination",type:"bullets",clickable:!0}});new Swiper(".category__slider",{slidesPerView:1,spaceBetween:30,loop:!0,pagination:{el:".category__pagination",type:"bullets",clickable:!0},navigation:{nextEl:".category__next",prevEl:".category__prev"},breakpoints:{0:{slidesPerView:1,spaceBetween:15},570:{slidesPerView:2,spaceBetween:15},769:{slidesPerView:3,spaceBetween:30},1200:{slidesPerView:4}}});new Swiper(".partners__slider",{slidesPerView:"auto",spaceBetween:24,loop:!0,pagination:{el:".partners__pagination",type:"bullets",clickable:!0},navigation:{nextEl:".partners__next",prevEl:".partners__prev"},breakpoints:{0:{spaceBetween:10,slidesPerView:2},570:{spaceBetween:24,slidesPerView:"auto"}}});if(new Swiper(".tab-slider__container",{slidesPerView:1,spaceBetween:30,loop:!0,pagination:{el:".tab-slider__pagination",type:"bullets",clickable:!0},navigation:{nextEl:".tab-slider__next",prevEl:".tab-slider__prev"},breakpoints:{0:{slidesPerView:1,spaceBetween:15},570:{slidesPerView:2,spaceBetween:15},769:{slidesPerView:3,spaceBetween:30},1300:{slidesPerView:4}}}),document.querySelectorAll('[type="tel"]').forEach((e=>{IMask(e,{mask:"+{7}(000)000-00-00"})})),document.addEventListener("scroll",(e=>{window.pageYOffset>30?document.querySelector(".body-wrapper").classList.add("header-stick"):document.querySelector(".body-wrapper").classList.remove("header-stick")})),document.querySelectorAll(".dropdown").forEach((e=>{e.addEventListener("click",(t=>{e.classList.toggle("dropdown_active"),t.target.closest(".dropdown__list")&&(e.querySelector(".dropdown__title-text").innerHTML=t.target.innerText)}))})),document.querySelectorAll(".icon").forEach((e=>{e.addEventListener("click",(t=>{e.classList.toggle("icon_active")}))})),document.querySelectorAll(".tab").forEach((e=>{e.addEventListener("click",(t=>{if(t.target.closest(".tab__link")){e.querySelectorAll(".tab__link").forEach((e=>{e.classList.remove("tab__link-active")})),t.target.classList.add("tab__link-active"),e.querySelectorAll(".tab__item").forEach((e=>{e.classList.remove("tab__item-active")}));let l=[...t.target.parentElement.children].indexOf(t.target);e.querySelectorAll(".tab__item")[l].classList.add("tab__item-active")}}))})),window.innerWidth<570){let e=document.querySelector(".header__search").cloneNode(!0);document.querySelector(".header__mid").append(e),document.querySelector(".header__body .header__search").remove()}function t(t,l){e.target.closest("."+t)?document.querySelectorAll("."+t).forEach((e=>{e.classList.remove(t),e.querySelector(l).style.height=0})):(e.preventDefault(),document.querySelectorAll("."+t).forEach((e=>{e.classList.remove(t),e.querySelector(l).style.height=0})),el.classList.add(t),el.querySelector(l).style.height=el.querySelector(l).scrollHeight+"px")}window.innerWidth<570&&document.querySelectorAll(".footer__nav-item_has-children").forEach((e=>{e.addEventListener("click",t("footer__nav-item_open","footer__subnav"))})),document.querySelectorAll(".popup-info").forEach((e=>{e.addEventListener("click",(t=>{t.target.closest(".popup-info__close")&&e.classList.add("popup-info_hide")}))})),document.querySelector(".menu").addEventListener("click",(e=>{e.target.closest(".menu__btn")?document.querySelector("body").classList.toggle("menu-open"):e.target.closest(".menu__nav")||e.target.closest(".menu__list")||document.querySelector("body").classList.remove("menu-open")})),window.innerWidth<570&&document.querySelectorAll(".catalog-list__filter").forEach((e=>{e.addEventListener("click",t("catalog-list__filter_open","catalog-list__filter-list"))})),document.querySelectorAll(".tags").forEach((e=>{e.querySelector(".tags__btn").addEventListener("click",(t=>{let l=t.target.innerText,r=t.target.getAttribute("data-toggle-text");t.target.setAttribute("data-toggle-text",l),t.target.innerText=r,e.classList.toggle("tags_open")}))}))}));