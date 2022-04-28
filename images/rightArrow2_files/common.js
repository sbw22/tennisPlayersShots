 



$(document).ready(function () {
 
 
	$('.overlay-enable').each(function (indx) {
		$(this).click(function () {
			window.location.hash='gal_'+$(this).attr('data-tbl')+'_'+$(this).attr('data-pid')+'_'+encodeURI($(this).attr('data-url'));
			return false;
		});
	});

  
	getOverlay();

 
	var hashchange = function (event) {
		getOverlay();
	};
	if (window.addEventListener) {
		window.addEventListener('hashchange', hashchange);
	} else {
		window.attachEvent('onhashchange', hashchange);
	}
});

function getOverlay() {

 
	$('.overlay').remove();
	var hash=window.location.hash;

 
	if(!hash.match(/#gal_/)){
		if($('.overlay').lenth){
			closeOverlay();
		}
		return false;
	}

 
	var params=hash.match(/gal_(.+)_(.+)_(.+)$/);
  
	window.location.hash='gal_' + params[1]+ "_" + params[2]+ "_" + params[3];

 

	$('body').css('overflow', 'hidden');
	$('body').append('<div class="overlay"></div>');
	$('.overlay').css('height', '100%');

 
 
	$.post(
			"/frontdownload.html?m=picture2",
			{k:params[1],encodeid:params[2],picture:params[3]},
			onSuccess
			);

	function onSuccess(data) {
 		$('.overlay').html(data);
	}

	$('body').keydown(function (obj) {
		if (obj.which == 27)
			closeOverlay();
	});
 
}

function closeOverlay() {
	$('.overlay').fadeOut(300, function () {
		$('.overlay').remove();
	});
	if ($('body').css('overflow') === 'hidden') {
		$('body').css('overflow', 'auto');
	}
	window.location.hash='';
}
 