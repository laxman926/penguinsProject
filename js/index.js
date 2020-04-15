var maximumPenguins=18;
var maximumYeti=3;
var currentscore=0;
$(document).ready( function() {
	
	// $('#title')[0].append($('<span id="score"></span>')[0])
	// $('#score')[0].append($('<span>Score:</span>')[0])
	// $('#score')[0].append($('<span id="SCS">0</span>')[0])
	// $('#score')[0].append($('<span><br>HighScore:</span>')[0])
	// $('#score')[0].append($('<span id="HSC1">0</span>')[0])
	$('#HSC1')[0].innerText=localStorage.getItem('HSC1')||0;

	function newscore(currentscore){
		$('#SCS')[0].innerText=currentscore;
		if (currentscore>(localStorage.getItem('HSC1')||0)){
		localStorage.setItem('HSC1',currentscore);
		(new Audio("hscores.wav")).play();
		}
		$('#HSC1')[0].innerText=localStorage.getItem('HSC1')||0;
	}
	$('#reset').click(function(){
		reseter();
	});
	reseter=function()
    {
        localStorage.setItem('HSC1',0);
        newscore(0);
        location.reload();
    }
	/* $('#title')[0].append($('<input/>',
                            {
        id:'reset',
        type:'button',
        value:'Reset Scores',
        click:reseter
    })[0]); */

		
    $("#yeti").mousedown(function() {
		$('[id^=yeti]').css('background-image', 'url(images/yeti.png)');
		(new Audio("lost.wav")).play();
		
        setTimeout( function() {
        	//$('#error').css('dispaly','block');
		alert("GAME OVER!!!!!! 'Yetiiii is here.'");
		location.reload();
		},300 );
    });
	 $('[id^=penguin]').each(function (i,e){e.remove()});

	var randomBoxes=1+Math.floor(Math.random()*maximumPenguins);
	for(var y=0;y<randomBoxes;y++)
		$('#gameholder').append($('<div id="penguin'+(1+y%8)+'"></div>'))
	
	var randomBoxes1=0+Math.floor(Math.random()*maximumYeti);
	for(var y=0;y<randomBoxes1;y++)
		$('#gameholder').append($('<div id="yeti" + y></div>'))

	 

	$('[id^=penguin]').each(function (i,e){
		e.onclick=(function(t){
			if (e.isclicked!="1")
			{
				newscore(++currentscore);
			
				$(e).css('background-image', 'url(images/penguin_'+e.id.slice(-1)+'.png)');
				
				(new Audio("scrores.wav")).play();
			}
			e.isclicked="1";
		});
	 });
	
	$('[id^=penguin]').each(function (i,e){e.classList.add('rando')});
	$('#yeti').each(function (i,e){e.classList.add('rando')});
	Array=$('.rando');
	$('[id^=penguin]').each(function (i,e){e.classList.remove('rando')});
	$('#yeti').each(function (i,e){e.classList.remove('rando')});
	
	var currentIndex = Array.length, tempVal, randomIndex ;
	
	while (0 !== currentIndex) {
		
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;
		
		Array[randomIndex].before(Array[currentIndex]);  
		tempVal = Array[currentIndex];		
		Array[currentIndex] = Array[randomIndex];		
		Array[randomIndex] = tempVal;			
  }

});