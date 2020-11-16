let randomNumber1 = Math.floor(Math.random()*6)+1;
let randomNumber2 = Math.floor(Math.random()*6)+1;

if(randomNumber1 > randomNumber2) {

	document.getElementsByTagName('h1')[0].innerHTML = 'Player 1 wins!';

} else if(randomNumber1 === randomNumber2) {

	document.getElementsByTagName('h1')[0].innerHTML = 'Draw!';

} else {

	document.getElementsByTagName('h1')[0].innerHTML = 'Player 2 wins!';

}

document.querySelector('.img1').setAttribute('src',`images/dice${randomNumber1}.png`);
document.querySelector('.img2').setAttribute('src',`images/dice${randomNumber2}.png`);