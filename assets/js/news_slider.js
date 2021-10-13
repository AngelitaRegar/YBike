$(function(){
	$('#slider .slider-prod').hide();
	$('#slider .slider-prod:nth-child(1)').show();
	var curr=0;
	var max=$('#slider-container').length=1;

	function slider(){
		if(curr!=max){
			$($('#slider .slider-prod')[curr]).fadeToggle(890, function(){
				$($('#slider .slider-prod')[curr+1]).fadeToggle(890);
				curr++;
			});
		}
		else{
			$($('#slider .slider-prod')[max]).fadeToggle(890, function(){
				$($('#slider .slider-prod')[0]).fadeToggle(890);
				curr=0;
			});
		}
	}
	setInterval(function(){
			slider();
		},5000);
});

