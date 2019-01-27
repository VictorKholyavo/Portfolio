$(document).ready(function() {
	var windowHeight = $(window).height();

	$(document).on('scroll', function() {
		$('.Skills').each(function() {
			var self = $(this),
			height = self.offset().top + self.height();
			if ($(document).scrollTop() + windowHeight >= height) {
				var mql = window.matchMedia('all and (max-width: 700px)');
					if (mql.matches) {
						$(function() {
								$('.html').easyPieChart({
									size: 150,
									barColor: '#f2a03c',
									scaleColor: false,
									lineWidth: 12,
									trackColor: 'white',
									lineCap: 'circle',
									animate: 2000
								});
								$('.css').easyPieChart({
									size: 150,
									barColor: '#3875d8',
									scaleColor: false,
									lineWidth: 12,
									trackColor: 'white',
									lineCap: 'circle',
									animate: 2000
								});
								$('.js').easyPieChart({
									size: 150,
									barColor: '#e8ea6e',
									scaleColor: false,
									lineWidth: 12,
									trackColor: 'white',
									lineCap: 'circle',
									animate: 2000
								});

						});
					} else {
						$(function() {
								$('.html').easyPieChart({
									size: 200,
									barColor: '#f2a03c',
									scaleColor: false,
									lineWidth: 15,
									trackColor: 'white',
									lineCap: 'circle',
									animate: 2000
								});
								$('.css').easyPieChart({
									size: 200,
									barColor: '#3875d8',
									scaleColor: false,
									lineWidth: 15,
									trackColor: 'white',
									lineCap: 'circle',
									animate: 2000
								});
								$('.js').easyPieChart({
									size: 200,
									barColor: '#e8ea6e',
									scaleColor: false,
									lineWidth: 15,
									trackColor: 'white',
									lineCap: 'circle',
									animate: 2000
								});
						});
					}
			}
		});
	});
});
