


let ondick = document.querySelector('.profile-card .avt');
ondick.addEventListener('click', () => {
	let addAll = document.querySelectorAll('.profile-card > *');
	addAll.forEach( (ele) => {
		ele.classList.toggle("active");
	});
	document.querySelector('.profile-card').classList.toggle('active');

});
let btn = document.querySelector('.profile-card .btn button:first-child');
btn.addEventListener('click', () => {
	window.location.assign("https://www.facebook.com/trang.adii.08");
})
