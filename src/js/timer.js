$( document ).ready(function() {

	$('.home').hide();

	startCounter();
	
	$('.button').click(function(){
		$('.button').fadeOut('10');
		$('.intro').fadeOut(2000, function(){
			$('.home').fadeIn('slow');
		});
	});

});

this.createTime = function(time){

	sec = Math.floor(time % 60);
	min = Math.floor((time / 60) % 60);
	hour = Math.floor((time / 3600));

	//Hours
	textHour = '0'+hour+' : ';

	//Minutes
	if (min < 10){

		if(min == 0 && hour == 0)
			textMin = '';

		else if(hour > 0)
			textMin = '0'+min+' : ';

		else
			textMin = min+' : ';
	}

	else
		textMin = min+' : ';

	//Seconds
	if (sec < 10){

		if(min == 0)
			textSec = sec;
		else
			textSec = '0'+sec;
	}

	else
		textSec = sec;

		timeGlobal = '<span class="hour">'+textHour+'</span><span class="min">'+textMin+'</span><span class="sec">'+textSec+'</span>';

		return timeGlobal;
}


updateTime = function(){
	$('.time').html(createTime(time));
}

startCounter = function(){
	window.clearInterval(this.timer);
	time = 31545;
	
	$('.time').append(createTime(time));
    timer = window.setInterval(function(){
		
		time++;
		updateTime();

	},1000);

};

stopCounter = function(){
	window.clearInterval(this.timer);
	updateTime();
};