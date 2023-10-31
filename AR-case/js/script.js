document.addEventListener('DOMContentLoaded', function () {

	// slider gallery
	document.querySelectorAll('.gallery__item').forEach((item, index) => {
		let SwiperSubGallery = new Swiper('.gallery__subslider', {
			slidesPerView: 'auto',
			spaceBetween: 15,
			direction: 'vertical',
			watchSlidesProgress: true,
		});

		let SwiperLinkGallery = new Swiper('.gallery__link-slider', {
			slidesPerView: 1,
			spaceBetween: 10,
		});

		let SwiperGallery = new Swiper(`.gallery__item:nth-child(${index + 1}) .gallery__slider`, {
			slidesPerView: 1,
			spaceBetween: 10,
			direction: 'vertical',
			pagination: {
				el: ".gallery__pagination",
				type: 'bullets',
			},
			thumbs: {
				swiper: SwiperSubGallery[index],
			},
			breakpoints: {
				0: {
					direction: 'horizontal',
				},
				1024: {
					direction: 'vertical',
				},
			}
		});
		if (index == 2) {
			SwiperGallery.slideTo(2)
		}
		SwiperGallery.controller.control = SwiperLinkGallery[index]
		SwiperLinkGallery[index].controller.control = SwiperGallery
	})


	//phone mask
	document.querySelectorAll('[type="tel"]').forEach(el => {
		let mask = IMask(el, { mask: '+{7}(000)000-00-00' })
	})

	//marquee
	document.querySelectorAll('.marquee__wrapper').forEach(wrapper => {
		let clone = document.createElement('div')
		clone.innerHTML = wrapper.innerHTML
		clone.classList.add('marquee__wrapper-clone')
		wrapper.append(clone)
	})


	// preview
	document.querySelectorAll('.preview').forEach(preview => {
		let body = preview.querySelector('.preview__body')
		let item = preview.querySelector('.preview__item')
		let img = preview.querySelector('.preview__img-phone')
		let phone = preview.querySelector('.preview__phone')
		let field = item.clientWidth / 2

		if (window.innerWidth > 768) {
			body.addEventListener('mousemove', (e) => {
				let x = e.pageX
				let y = e.pageY
				let coord = x - body.offsetLeft
				let transition = coord - field

				if (coord > field && coord < body.clientWidth - field && transition > 30 && transition < item.clientWidth - 30) {
					item.style.left = transition + 'px'
					phone.style.left = transition + 'px'
					img.style.left = - transition + 'px'
				}
			})
		} else {
			phone.addEventListener('touchmove', (e) => {
				let transition = e.touches[0].clientX - item.clientWidth / 2
				if (transition > 30 && transition < item.clientWidth - 30) {
					item.style.left = transition + 'px'
					phone.style.left = transition + 'px'
					img.style.left = - transition + 'px'
				}
			})
		}

	})


	// bouncing balls
	let funcState = true
	function initBalls() {
		funcState = false
		let wrapper = document.querySelector(".example__wrapper")
		let rect = wrapper.getBoundingClientRect(true);
		let width = rect.width;
		let height = rect.height;

		let elemArr = wrapper.querySelectorAll('.example__item')

		const engine = Matter.Engine.create();
		let boxArr = []

		let x = width
		let y = 0
		elemArr.forEach((item, index) => {
			if (index % 4 == 0) {
				x -= 100
				y += 100
			}
			let diameter = getComputedStyle(item).width.split('').slice(0, -2).join('')
			boxArr.push({
				w: diameter,
				h: diameter,
				body: Matter.Bodies.circle(x, y, diameter / 2),
				elem: item,
				render() {
					const { x, y } = this.body.position;
					this.elem.style.top = `${y - this.h / 2}px`;
					this.elem.style.left = `${x - this.w / 2}px`;
				},
			})
		})


		Matter.World.add(engine.world, [
			Matter.Bodies.rectangle(width / 2, 0, width, 100, {
				isStatic: true,
				render: {
					fillStyle: "#ffffff"
				}
			}),
			Matter.Bodies.rectangle(width, height / 2, 100, height, {
				isStatic: true,
				render: {
					fillStyle: "#ffffff"
				}
			}),
			Matter.Bodies.rectangle(width / 2, height, width, 100, {
				isStatic: true,
				render: {
					fillStyle: "#ffffff"
				}
			}),
			Matter.Bodies.rectangle(0, height / 2, 100, height, {
				isStatic: true,
				render: {
					fillStyle: "#ffffff"
				}
			})
		]);


		const mouseConstraint = Matter.MouseConstraint.create(
			engine, { element: document.querySelector('.example__wrapper') }
		);

		mouseConstraint.mouse.element.removeEventListener("mousewheel", mouseConstraint.mouse.mousewheel);
		mouseConstraint.mouse.element.removeEventListener("DOMMouseScroll", mouseConstraint.mouse.mousewheel);

		elemArr.forEach((item, index) => {
			Matter.Composite.add(
				engine.world, [boxArr[index].body]
			);
		})

		Matter.Composite.add(
			engine.world, mouseConstraint
		);

		(function rerender() {
			elemArr.forEach((item, index) => {
				boxArr[index].render()
			})
			Matter.Engine.update(engine);
			requestAnimationFrame(rerender);
		})();

		var shakeScene = function (engine) {
			var timeScale = (1000 / 60) / engine.timing.lastDelta;
			var bodies = Matter.Composite.allBodies(engine.world);
			for (var i = 0; i < bodies.length; i++) {
				var body = bodies[i];
				if (!body.isStatic && body.position.y >= 500) {
					var forceMagnitude = 1;
					Matter.Body.applyForce(body, body.position, {
						x: (forceMagnitude + Matter.Common.random() * forceMagnitude) * Matter.Common.choose([1, -1]),
						y: -forceMagnitude + Matter.Common.random() * -forceMagnitude
					});
				}
			}
		};
		if (window.innerWidth < 768) {
			Matter.Events.on(mouseConstraint, 'mousedown', function (event) {
				shakeScene(engine);
			});

			mouseConstraint.mouse.element.removeEventListener('touchstart', mouseConstraint.mouse.mousedown);
			mouseConstraint.mouse.element.removeEventListener('touchmove', mouseConstraint.mouse.mousemove);
			mouseConstraint.mouse.element.removeEventListener('touchend', mouseConstraint.mouse.mouseup);
		}

	}

	document.addEventListener('scroll', (e) => {
		if (document.querySelector('.example__wrapper').getBoundingClientRect().top < window.innerHeight && funcState) {
			initBalls()
		}
	})


	// card toggle
	document.querySelectorAll('.gallery__toggle-btn').forEach(btn => {
		let card = btn.closest('.gallery__item')

		btn.addEventListener('click', (e) => {
			let currentText = btn.innerText
			let toggleText = btn.getAttribute('data-toggle-text')
			btn.innerText = toggleText
			btn.setAttribute('data-toggle-text', currentText)

			card.classList.toggle('gallery__item_active')
		})
	})


	// glitch
	document.querySelectorAll('.glitch').forEach(wrapper => {
		let itemArr = wrapper.querySelectorAll('.glitch__item')
		let i = itemArr.length


		setInterval((e) => {
			wrapper.querySelectorAll('.glitch__item').forEach(item => {
				item.classList.toggle('glitch__item_active')
			})
		}, 4000)
	})


	// pdf generate
	let generateBody = document.querySelector('.main');
	let generateBtn = document.querySelector('[data-generate-btn]');
	let quoteCanvasData = {};
	let options = {
		height: generateBody.scrollHeight,
	}

	generateBtn.addEventListener('click', async () => {
		let imageHref;
		await html2canvas(generateBody, options).then(canvas => {
			imageHref = canvas.toDataURL();
			quoteCanvasData.width = canvas.width;
			quoteCanvasData.height = canvas.height;
		})

		window.jsPDF = window.jspdf.jsPDF;
		function ConvertPxToMM(pixels) {
			return Math.floor(pixels * 0.264583);
		}

		let docWidth = ConvertPxToMM(quoteCanvasData.width)
		let docHeight = ConvertPxToMM(quoteCanvasData.height)
		let orientation = quoteCanvasData.width >= quoteCanvasData.height ? 'l' : 'p';

		const doc = new jsPDF(orientation, 'mm', [docWidth, docHeight]);
		doc.addImage(imageHref, 0, 0);
		doc.save("document.pdf");
	})

});