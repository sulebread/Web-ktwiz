window.addEventListener('load', function (){
    drawDetail();
});

function drawDetail(){
	const data = JSON.parse(localStorage.getItem('detailData'));
	let playerImg = document.getElementById("playerImg");
	let backNum = document.getElementById("backNum");
	let nameKr = document.getElementById("nameKr");
	let bt = document.getElementById("bt");
	let birth = document.getElementById("birth");
	let physical = document.getElementById("physical");
	let career = document.getElementById("career");

	playerImg.src = data.img;
	backNum.innerHTML = data.backNum;
	nameKr.innerHTML = data.nameKr;
	bt.innerHTML = data.bt;
	birth.innerHTML = data.birth;
	physical.innerHTML = data.physical;
	career.innerHTML = data.career;
}