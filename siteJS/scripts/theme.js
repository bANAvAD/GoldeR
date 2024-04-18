const header = document.querySelector('.header');
const footer = document.querySelector('.footer');
const main = document.querySelector('.main');
const navLink = document.querySelectorAll('.nav__link');

console.log(navLink);


function choiceDark(){

	console.log(header.style);
	header.style.background='#383737';
	header.style.transition='1s';
	footer.style.background='#383737';
	footer.style.transition='1s';
	main.style.background= '#383737'
	main.style.transition= '1s'
	navLink.forEach((el)=>{
		el.style.color = 'white';
		el.style.transition = '1s';
	});
}

function choiceLight(){

	console.log(header.style);
	header.style.background='rgba(230, 190, 92, 0.7)';
	header.style.transition='1s';
	footer.style.background='rgba(230, 190, 92, 0.7)';
	footer.style.transition='1s';
	main.style.background= 'white'
	main.style.transition= '1s'
	navLink.forEach((el)=>{
		el.style.color = 'black';
		el.style.transition = '1s';
	});
}
