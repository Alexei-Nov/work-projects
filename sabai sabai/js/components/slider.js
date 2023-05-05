$(document).ready(function(){
	$('.salon-main-carousel').owlCarousel({
		loop:true,
		nav:true,
		navText : ["<i class=\"ion ion-ios-arrow-back\"></i>","<i class=\"ion ion-ios-arrow-forward\"></i>"],
		responsive:{
			0:{
				 items:1
			},
		},
	});
	$('.salon-masters-carousel').owlCarousel({
		loop:true,
		nav:true,
		margin: 30,
		navText : ["<i class=\"ion ion-ios-arrow-back\"></i>","<i class=\"ion ion-ios-arrow-forward\"></i>"],
		responsive:{
			0:{
				 items:1,
				 loop:false,
			},
			550:{
				 items:2,
				 loop:false,
			},
			900:{
				 items:3,
				 loop:false,
			},
			1100:{
				 items:4
			},
		},
	});
	$('.salon-actions-carousel').owlCarousel({
		loop:true,
		nav:true,
		margin: 8,
		navText : ["<i class=\"ion ion-ios-arrow-back\"></i>","<i class=\"ion ion-ios-arrow-forward\"></i>"],
		responsive:{
			0:{
				 items:1,
			},
			650:{
				 items:2,
			},
			1100:{
				 items:3
			},
		},
	});
	$('.salon-reviews-carousel').owlCarousel({
		loop:true,
		nav:true,
		margin: 8,
		navText : ["<i class=\"ion ion-ios-arrow-back\"></i>","<i class=\"ion ion-ios-arrow-forward\"></i>"],
		responsive:{
			0:{
				 items:1,
			},
			900:{
				 items:2,
			}
		},
	})
 });