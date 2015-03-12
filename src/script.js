$(function() {
	$(window).on('load scroll', function() {
		if ($(window).scrollTop() > $('header[role="banner"]').height()) {
			$('header[role="banner"]').addClass('fix');
		} else {
			$('header[role="banner"]').removeClass('fix');
		}
	});
});
