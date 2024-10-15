let slideImages = document.querySelectorAll('.slides img');
	

	let counter = 0;


	function slideNext(){
	slideImages[counter].style.animation = 'next1 0.5s ease-in forwards';
	if(counter >= slideImages.length-1){
		counter = 0;
	}
	else{
		counter++;
	}
	slideImages[counter].style.animation = 'next2 0.5s ease-in forwards';
	// indicators();
	}

	

	// Auto slideing
	function autoSliding(){
		deletInterval = setInterval(timer, 3000);
		function timer(){
			slideNext();
			// indicators();
		}
	}
	autoSliding();

	// Stop auto sliding when mouse is over
	const container = document.querySelector('.slide-container');
	container.addEventListener('mouseover', function(){
		clearInterval(deletInterval);
	});

	// Resume sliding when mouse is out
	container.addEventListener('mouseout', autoSliding);

	