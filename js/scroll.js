$(document).ready(function() {
	var start_pos=$('#menu').offset().top;
	$(window).scroll(function(){
		if ($(window).scrollTop()>=start_pos) {
			if ($('#menu').hasClass()==false) $('#menu').addClass('change');
		}
		else $('#menu').removeClass('change');
	});
});

var top_show = 150;
var delay = 1000;

$(document).ready(function() {
	$(window).scroll(function () {
		if ($(this).scrollTop() > top_show) $('#topbottom').fadeIn();
		else $('#topbottom').fadeOut();
	});
	$('#topbottom').click(function () {
		$('body, html').animate({
			scrollTop: 0
		}, delay);
	});
});

$(document).ready(function() {
	$('#Main').click(function () {
		$('body, html').animate({
			scrollTop: 0
		}, delay);
	});
});

$(document).ready(function() {
	$('#Study').click(function () {
		$('body, html').animate({
			scrollTop: 400
		}, delay);
	});
});

$(document).ready(function() {
	$('#Skills').click(function () {
		$('body, html').animate({
			scrollTop: 1150
		}, delay);
	});
});

$(document).ready(function() {
	$('#Contacts').click(function () {
		$('body, html').animate({
			scrollTop: 1600
		}, delay);
	});
});
