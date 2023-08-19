window.addEventListener('load', function (){
    drawDetail();
});

function drawDetail(){
	const data = JSON.parse(localStorage.getItem('detailData'));
	let playerImg = document.getElementById("playerImg");
	playerImg.className = "playerImg"
	
	let backNum = document.getElementById("backNum");
	backNum.className = "playerBacknum";

	let nameKr = document.getElementById("nameKr");
	nameKr.className = "playerName";

	let bt = document.getElementById("bt");
	bt.className = "playerInfo";

	let birth = document.getElementById("birth");
	birth.className = "playerInfo";

	let physical = document.getElementById("physical");
	physical.className = "playerInfo";

	let career = document.getElementById("career");
	career.className = "playerInfo";

	playerImg.src = data.img;
	backNum.innerHTML = data.backNum;
	nameKr.innerHTML = data.nameKr;
	bt.innerHTML = data.bt;
	birth.innerHTML = data.birth;
	physical.innerHTML = data.physical;
	career.innerHTML = data.career;
}