$(document).ready(function () {
	$('.burger').click(function (event) {
		$('.burger_svg-wrapper,.burger,.burger-menu').toggleClass('active');
		$('body').toggleClass('locker');
	});
});



