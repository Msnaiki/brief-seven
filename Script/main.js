var header = document.querySelector('.main-header');

window.addEventListener('scroll', () => {
  var scrollPos = window.scrollY;
  if(scrollPos > 10){
    header.classList.add('scrolled');
    
  } else {
    header.classList.remove('scrolled');
  }
});
var
	carousel = document.querySelector('.carousel'),
	figure = carousel.querySelector('figure'),
	nav = carousel.querySelector('nav'),
	numImages = figure.childElementCount,
	theta =  2 * Math.PI / numImages,
	currImage = 0
;

	
nav.addEventListener('click', onClick);

function onClick(e) {
	
	
	var t = e.target;

	if (t.tagName.toUpperCase() != 'BUTTON')
		return;
	
	if (t.classList.contains('next')) {
		currImage++;
	}
	else {
		currImage--;
	}
	
	figure.style.transform = `rotateY(${currImage * -theta}rad)`;
}
