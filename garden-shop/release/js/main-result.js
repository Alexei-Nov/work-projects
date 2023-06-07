document.addEventListener("DOMContentLoaded",(function(){new Swiper(".home-slider__container",{slidesPerView:1,spaceBetween:30,loop:!0,centeredSlides:!0,autoplay:{delay:3e3,disableOnInteraction:!1,waitForTransition:!1},pagination:{el:".home-slider__pagination",type:"bullets",clickable:!0},navigation:{nextEl:".home-slider__next",prevEl:".home-slider__prev"},breakpoints:{0:{slidesPerView:1,spaceBetween:10},769:{slidesPerView:1.25,spaceBetween:20},1024:{slidesPerView:1,spaceBetween:30}}});new Swiper(".default-slider__container",{slidesPerView:"auto",spaceBetween:30,loop:!0,autoHeight:!0,pagination:{el:".default-slider__pagination",type:"bullets",clickable:!0},navigation:{nextEl:".default-slider__next",prevEl:".default-slider__prev"},scrollbar:{el:".default-slider__scrollbar",draggable:!0},breakpoints:{0:{slidesPerView:1,spaceBetween:15},680:{slidesPerView:2,spaceBetween:15},769:{slidesPerView:"auto",spaceBetween:15},991:{spaceBetween:30}}});new Swiper(".card__gallery",{slidesPerView:1,spaceBetween:30,loop:!0,nested:!0,pagination:{el:".card__gallery-pagination",type:"bullets",clickable:!0}});new Swiper(".category__slider",{slidesPerView:1,spaceBetween:30,loop:!0,pagination:{el:".category__pagination",type:"bullets",clickable:!0},navigation:{nextEl:".category__next",prevEl:".category__prev"},breakpoints:{0:{slidesPerView:1,spaceBetween:15},570:{slidesPerView:2,spaceBetween:15},769:{slidesPerView:3,spaceBetween:30},1200:{slidesPerView:4}}});new Swiper(".partners__slider",{slidesPerView:"auto",spaceBetween:24,loop:!0,pagination:{el:".partners__pagination",type:"bullets",clickable:!0},navigation:{nextEl:".partners__next",prevEl:".partners__prev"},breakpoints:{0:{spaceBetween:10,slidesPerView:2},570:{spaceBetween:24,slidesPerView:"auto"}}});new Swiper(".tab-slider__container",{slidesPerView:1,spaceBetween:30,loop:!0,pagination:{el:".tab-slider__pagination",type:"bullets",clickable:!0},navigation:{nextEl:".tab-slider__next",prevEl:".tab-slider__prev"},breakpoints:{0:{slidesPerView:1,spaceBetween:15},570:{slidesPerView:2,spaceBetween:15},769:{slidesPerView:3,spaceBetween:30},1300:{slidesPerView:4}}});new Swiper(".review__slider",{slidesPerView:"auto",spaceBetween:30,autoHeight:!0,navigation:{nextEl:".review__next",prevEl:".review__prev"},scrollbar:{el:".review__scrollbar",draggable:!0},breakpoints:{0:{slidesPerView:1},570:{slidesPerView:"auto"}}});if(new Swiper(".detail-block__slider",{slidesPerView:1,spaceBetween:30,navigation:{nextEl:".detail-block__next",prevEl:".detail-block__prev"},pagination:{el:".detail-block__pagination",type:"bullets",clickable:!0}}),document.querySelectorAll('[type="tel"]').forEach((e=>{IMask(e,{mask:"+{7}(000)000-00-00"})})),document.addEventListener("scroll",(e=>{window.pageYOffset>30?document.querySelector(".body-wrapper").classList.add("header-stick"):document.querySelector(".body-wrapper").classList.remove("header-stick")})),document.querySelectorAll(".dropdown").forEach((e=>{e.addEventListener("click",(t=>{e.classList.toggle("dropdown_active"),t.target.closest(".dropdown__list")&&(e.querySelector(".dropdown__title-text").innerHTML=t.target.innerText)}))})),document.querySelectorAll(".icon").forEach((e=>{e.addEventListener("click",(t=>{e.classList.toggle("icon_active")}))})),document.querySelectorAll(".tab").forEach((e=>{e.addEventListener("click",(t=>{if(t.target.closest(".tab__link")){e.querySelectorAll(".tab__link").forEach((e=>{e.classList.remove("tab__link-active")})),t.target.classList.add("tab__link-active"),e.querySelectorAll(".tab__item").forEach((e=>{e.classList.remove("tab__item-active")}));let i=[...t.target.parentElement.children].indexOf(t.target);e.querySelectorAll(".tab__item")[i].classList.add("tab__item-active")}}))})),window.innerWidth<570){let e=document.querySelector(".header__search").cloneNode(!0);document.querySelector(".header__mid").append(e),document.querySelector(".header__body .header__search").remove()}function e(e,t){document.addEventListener("click",(function(i){if(i.target.closest(".a-btn")){if(i.target.closest(`${e}`))if(i.target.closest(".a-container").classList.contains("a-container_open"))i.target.closest(".a-container").classList.remove("a-container_open"),i.target.closest(".a-container").querySelector(".a-panel").style.height=0;else{if(i.preventDefault(),1==t){var s=document.querySelectorAll(e+" .a-container");Array.prototype.forEach.call(s,(function(e){e.classList.remove("a-container_open"),e.querySelector(".a-panel").style.height=0}))}i.target.closest(".a-container").classList.add("a-container_open"),i.target.closest(".a-container").querySelector(".a-panel").style.height=i.target.closest(".a-container").querySelector(".a-panel").scrollHeight+"px"}}else document.querySelector(`${e} > .a-container_open`)&&1==t&&(document.querySelector(`${e} > .a-container_open .a-panel`).style.height=0,document.querySelector(`${e} > .a-container_open`).classList.remove("a-container_open"))}))}e(".accordion_v2",!1),window.innerWidth<570&&e(".accordion_v1",!0),document.querySelectorAll(".popup-info").forEach((e=>{e.addEventListener("click",(t=>{t.target.closest(".popup-info__close")&&e.classList.add("popup-info_hide")}))})),document.querySelector(".menu").addEventListener("click",(e=>{e.target.closest(".menu__btn")?document.querySelector("body").classList.toggle("menu-open"):e.target.closest(".menu__nav")||e.target.closest(".menu__list")||document.querySelector("body").classList.remove("menu-open")})),document.querySelectorAll(".tags").forEach((e=>{e.querySelector(".tags__btn").addEventListener("click",(t=>{let i=t.target.innerText,s=t.target.getAttribute("data-toggle-text");t.target.setAttribute("data-toggle-text",i),t.target.innerText=s,e.classList.toggle("tags_open")}))})),document.querySelectorAll(".range-slider").forEach((e=>{let t,i,s;t=e.getAttribute("data-limits")?e.getAttribute("data-limits").split(","):[0,100],i=e.getAttribute("data-step")?e.getAttribute("data-step"):10,s=e.getAttribute("data-unit")?e.getAttribute("data-unit"):"";var l=new rSlider({target:e.querySelector(".range-slider__slider"),values:{min:+t[0],max:+t[1]},step:i,range:!0,scale:!1,labels:!1,tooltip:!1,onChange:function(t){let i=l.getValue().split(",");e.querySelector(".range-slider__input_min").value=i[0]+s,e.querySelector(".range-slider__input_max").value=i[1]+s}})})),document.querySelectorAll(".catalog__sort").forEach((e=>{e.addEventListener("click",(t=>{t.target.closest(".catalog__sort-item")?(e.querySelectorAll(".catalog__sort-item_active").forEach((e=>{e.classList.remove("catalog__sort-item_active")})),t.target.closest(".catalog__sort-item").classList.add("catalog__sort-item_active"),e.classList.remove("catalog__sort_open")):t.target.closest(".catalog__sort-title")&&e.classList.toggle("catalog__sort_open")}))})),document.querySelectorAll(".catalog__template-item").forEach((e=>{e.addEventListener("click",(t=>{document.querySelectorAll(".catalog__template-item_active").forEach((e=>{e.classList.remove("catalog__template-item_active")})),e.classList.add("catalog__template-item_active")}))})),document.querySelectorAll(".catalog__filter").forEach((e=>{e.addEventListener("click",(e=>{e.target.closest(".catalog__filter-wrapper")||document.querySelector("body").classList.remove("filter-open")}))})),document.querySelectorAll(".catalog__filter-menu-btn").forEach((e=>{e.addEventListener("click",(e=>{document.querySelector("body").classList.toggle("filter-open")}))})),document.querySelectorAll(".anchor").forEach((e=>{e.addEventListener("click",(e=>{e.preventDefault();let t=e.target.href.split("#").slice(1).join(""),i=document.getElementById(t).offsetTop-276;console.log(i),window.scroll({top:i,left:0,behavior:"smooth"})}))}))})),window.onload=()=>{document.querySelectorAll(".read-more").forEach((e=>{let t=e.querySelector(".read-more__btn"),i=e.querySelector(".read-more__text"),s=+i.style.maxHeight.split("").slice(0,-2).join(""),l=i.scrollHeight;s>=l&&(t.remove(),e.classList.toggle("read-more_open")),t.addEventListener("click",(n=>{n.target.closest(".read-more_open")?i.style.maxHeight=s+"px":i.style.maxHeight=l+"px";let a=t.innerHTML,r=t.getAttribute("data-toggle-text");t.setAttribute("data-toggle-text",a),t.innerText=r,e.classList.toggle("read-more_open")}))}))},function(){"use strict";var e=function(e){for(var t in this.input=null,this.inputDisplay=null,this.slider=null,this.sliderWidth=0,this.sliderLeft=0,this.pointerWidth=0,this.pointerR=null,this.pointerL=null,this.activePointer=null,this.selected=null,this.scale=null,this.step=0,this.tipL=null,this.tipR=null,this.timeout=null,this.valRange=!1,this.values={start:null,end:null},this.conf={target:null,values:null,set:null,range:!1,width:null,scale:!0,labels:!0,tooltip:!0,step:null,disabled:!1,onChange:null},this.cls={container:"rs-container",background:"rs-bg",selected:"rs-selected",pointer:"rs-pointer",scale:"rs-scale",noscale:"rs-noscale",tip:"rs-tooltip"},this.conf)e.hasOwnProperty(t)&&(this.conf[t]=e[t]);this.init()};e.prototype.init=function(){return"object"==typeof this.conf.target?this.input=this.conf.target:this.input=document.getElementById(this.conf.target.replace("#","")),this.input?(this.inputDisplay=getComputedStyle(this.input,null).display,this.input.style.display="none",this.valRange=!(this.conf.values instanceof Array),!this.valRange||this.conf.values.hasOwnProperty("min")&&this.conf.values.hasOwnProperty("max")?this.createSlider():console.log("Missing min or max value...")):console.log("Cannot find target element...")},e.prototype.createSlider=function(){return this.slider=t("div",this.cls.container),this.slider.innerHTML='<div class="rs-bg"></div>',this.selected=t("div",this.cls.selected),this.pointerL=t("div",this.cls.pointer,["dir","left"]),this.scale=t("div",this.cls.scale),this.conf.tooltip&&(this.tipL=t("div",this.cls.tip),this.tipR=t("div",this.cls.tip),this.pointerL.appendChild(this.tipL)),this.slider.appendChild(this.selected),this.slider.appendChild(this.scale),this.slider.appendChild(this.pointerL),this.conf.range&&(this.pointerR=t("div",this.cls.pointer,["dir","right"]),this.conf.tooltip&&this.pointerR.appendChild(this.tipR),this.slider.appendChild(this.pointerR)),this.input.parentNode.insertBefore(this.slider,this.input.nextSibling),this.conf.width&&(this.slider.style.width=parseInt(this.conf.width)+"px"),this.sliderLeft=this.slider.getBoundingClientRect().left,this.sliderWidth=this.slider.clientWidth,this.pointerWidth=this.pointerL.clientWidth,this.conf.scale||this.slider.classList.add(this.cls.noscale),this.setInitialValues()},e.prototype.setInitialValues=function(){if(this.disabled(this.conf.disabled),this.valRange&&(this.conf.values=s(this.conf)),this.values.start=0,this.values.end=this.conf.range?this.conf.values.length-1:0,this.conf.set&&this.conf.set.length&&l(this.conf)){var e=this.conf.set;this.conf.range?(this.values.start=this.conf.values.indexOf(e[0]),this.values.end=this.conf.set[1]?this.conf.values.indexOf(e[1]):null):this.values.end=this.conf.values.indexOf(e[0])}return this.createScale()},e.prototype.createScale=function(e){this.step=this.sliderWidth/(this.conf.values.length-1);for(var i=0,s=this.conf.values.length;i<s;i++){var l=t("span"),n=t("ins");l.appendChild(n),this.scale.appendChild(l),l.style.width=i===s-1?0:this.step+"px",this.conf.labels?n.innerHTML=this.conf.values[i]:0!==i&&i!==s-1||(n.innerHTML=this.conf.values[i]),n.style.marginLeft=n.clientWidth/2*-1+"px"}return this.addEvents()},e.prototype.updateScale=function(){this.step=this.sliderWidth/(this.conf.values.length-1);for(var e=this.slider.querySelectorAll("span"),t=0,i=e.length;t<i;t++)e[t].style.width=this.step+"px";return this.setValues()},e.prototype.addEvents=function(){var e=this.slider.querySelectorAll("."+this.cls.pointer),t=this.slider.querySelectorAll("span");i(document,"mousemove touchmove",this.move.bind(this)),i(document,"mouseup touchend touchcancel",this.drop.bind(this));for(var s=0,l=e.length;s<l;s++)i(e[s],"mousedown touchstart",this.drag.bind(this));for(s=0,l=t.length;s<l;s++)i(t[s],"click",this.onClickPiece.bind(this));return window.addEventListener("resize",this.onResize.bind(this)),this.setValues()},e.prototype.drag=function(e){if(e.preventDefault(),!this.conf.disabled){var t=e.target.getAttribute("data-dir");return"left"===t&&(this.activePointer=this.pointerL),"right"===t&&(this.activePointer=this.pointerR),this.slider.classList.add("sliding")}},e.prototype.move=function(e){if(this.activePointer&&!this.conf.disabled){var t=("touchmove"===e.type?e.touches[0].clientX:e.pageX)-this.sliderLeft-this.pointerWidth/2;return(t=Math.round(t/this.step))<=0&&(t=0),t>this.conf.values.length-1&&(t=this.conf.values.length-1),this.conf.range?(this.activePointer===this.pointerL&&(this.values.start=t),this.activePointer===this.pointerR&&(this.values.end=t)):this.values.end=t,this.setValues()}},e.prototype.drop=function(){this.activePointer=null},e.prototype.setValues=function(e,t){var i=this.conf.range?"start":"end";return e&&this.conf.values.indexOf(e)>-1&&(this.values[i]=this.conf.values.indexOf(e)),t&&this.conf.values.indexOf(t)>-1&&(this.values.end=this.conf.values.indexOf(t)),this.conf.range&&this.values.start>this.values.end&&(this.values.start=this.values.end),this.pointerL.style.left=this.values[i]*this.step-this.pointerWidth/2+"px",this.conf.range?(this.conf.tooltip&&(this.tipL.innerHTML=this.conf.values[this.values.start],this.tipR.innerHTML=this.conf.values[this.values.end]),this.input.value=this.conf.values[this.values.start]+","+this.conf.values[this.values.end],this.pointerR.style.left=this.values.end*this.step-this.pointerWidth/2+"px"):(this.conf.tooltip&&(this.tipL.innerHTML=this.conf.values[this.values.end]),this.input.value=this.conf.values[this.values.end]),this.values.end>this.conf.values.length-1&&(this.values.end=this.conf.values.length-1),this.values.start<0&&(this.values.start=0),this.selected.style.width=(this.values.end-this.values.start)*this.step+"px",this.selected.style.left=this.values.start*this.step+"px",this.onChange()},e.prototype.onClickPiece=function(e){if(!this.conf.disabled){var t=Math.round((e.clientX-this.sliderLeft)/this.step);return t>this.conf.values.length-1&&(t=this.conf.values.length-1),t<0&&(t=0),this.conf.range&&t-this.values.start<=this.values.end-t?this.values.start=t:this.values.end=t,this.slider.classList.remove("sliding"),this.setValues()}},e.prototype.onChange=function(){var e=this;this.timeout&&clearTimeout(this.timeout),this.timeout=setTimeout((function(){if(e.conf.onChange&&"function"==typeof e.conf.onChange)return e.conf.onChange(e.input.value)}),500)},e.prototype.onResize=function(){return this.sliderLeft=this.slider.getBoundingClientRect().left,this.sliderWidth=this.slider.clientWidth,this.updateScale()},e.prototype.disabled=function(e){this.conf.disabled=e,this.slider.classList[e?"add":"remove"]("disabled")},e.prototype.getValue=function(){return this.input.value},e.prototype.destroy=function(){this.input.style.display=this.inputDisplay,this.slider.remove()};var t=function(e,t,i){var s=document.createElement(e);return t&&(s.className=t),i&&2===i.length&&s.setAttribute("data-"+i[0],i[1]),s},i=function(e,t,i){for(var s=t.split(" "),l=0,n=s.length;l<n;l++)e.addEventListener(s[l],i)},s=function(e){var t=[],i=e.values.max-e.values.min;if(!e.step)return console.log("No step defined..."),[e.values.min,e.values.max];for(var s=0,l=i/e.step;s<l;s++)t.push(e.values.min+s*e.step);return t.indexOf(e.values.max)<0&&t.push(e.values.max),t},l=function(e){return!e.set||e.set.length<1||e.values.indexOf(e.set[0])<0?null:!e.range||!(e.set.length<2||e.values.indexOf(e.set[1])<0)||null};window.rSlider=e}();