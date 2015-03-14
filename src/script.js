$(function() {
	$(window).on('load scroll', function() {
		var header = $('header[role="banner"]');
		var action = $(window).scrollTop() > $('header[role="banner"]').height() ? header.addClass : header.removeClass;
		action('fix');
	});
});
