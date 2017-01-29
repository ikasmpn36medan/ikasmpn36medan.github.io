;(function () {

	'use strict';

	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
			BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
			iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
			Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
			Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
			any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};


	var contentWayPoint = function() {
		var i = 0;
		$('.animate-box').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('animated-fast') ) {

				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .animate-box.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn animated-fast');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft animated-fast');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight animated-fast');
							} else {
								el.addClass('fadeInUp animated-fast');
							}

							el.removeClass('item-animate');
						},  k * 100, 'easeInOutExpo' );
					});

				}, 100);

			}

		} , { offset: '85%' } );
	};



	// Loading page
	var loaderPage = function() {
		$(".gtco-loader").fadeOut("slow");
	};


	var screenHeight = function() {

		if ( $(window).width() > 768 && !isMobile.any() ) {
			$('.js-dt, .js-dtc').css('min-height', $(window).height());
		} else {
			$('.js-dt, .js-dtc').css('min-height', '');
		}
		$(window).resize(function(){
			if ( $(window).width() > 768 && !isMobile.any() ) {
				$('.js-dt, .js-dtc').css('min-height', $(window).height());
			} else {
				$('.js-dt, .js-dtc').css('min-height', '');
			}
		});

	};

	var countDown = function() {

		// var d = new Date(new Date().getTime() + 800 * 120 * 120 * 2000);
		// simplyCountdown('.simply-countdown-one', {
		// 	year: d.getFullYear(),
		// 	month: d.getMonth() - 7,
		// 	day: d.getDate()
		// });

		simplyCountdown('.simply-countdown-one', {
            year: 2017, // required
            month: 2, // required
            day: 18, // required
            hours: 11, // Default is 0 [0-23] integer
            minutes: 0, // Default is 0 [0-59] integer
            seconds: 0, // Default is 0 [0-59] integer
            words: { //words displayed into the countdown
                days: 'hari',
                hours: 'jam',
                minutes: 'menit',
                seconds: 'detik',
                pluralLetter: ''
            },
            plural: true, //use plurals
            inline: false, //set to true to get an inline basic countdown like : 24 days, 4 hours, 2 minutes, 5 seconds
            inlineClass: 'simply-countdown-inline', //inline css span class in case of inline = true
            // in case of inline set to false
            enableUtc: true,
            onEnd: function () {
                // your code
                return;
            },
            refresh: 1000, //default refresh every 1s
            sectionClass: 'simply-section', //section css class
            amountClass: 'simply-amount', // amount css class
            wordClass: 'simply-word' // word css class
    });

	};



	$(function(){
		contentWayPoint();
		loaderPage();
		screenHeight();
		countDown();
	});



}());
