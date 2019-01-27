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
	$('#menu').on("click","a", function (event) {
		event.preventDefault();
		var id = $(this).attr('href'),
		top = $(id).offset().top
		$('body, html').animate({
			scrollTop: top - 76
		}, 1000);
	});
});

//Slide-Toggle//

$(document).ready(function(){
	$(".More").slideToggle();
	if (0===0) $(".moreButton").toggle();
	$(".slide-toggle").click(function(){ // задаем функцию при нажатиии на элемент с классом slide-toggle
		$(".More").slideToggle(); // плавно скрываем, или отображаем все элементы <div>
	});
});
