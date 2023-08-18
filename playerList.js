window.addEventListener('load', function (){
    drawPitcher();
    drawCatcher();
    drawInfielder();
    drawOutfielder();
});

function drawPitcher(){
    const pitcherUl = document.getElementById("pitcherList");
    
    for(let i = 0; i < playerList.pitcher.length; i++){
        //html 요소 생성
        let playerLi = document.createElement("li");
        let playerArticle = document.createElement("article");
        let playerImg = document.createElement("img");
        let playerInfo = document.createElement("span");
        let playerName = document.createElement("span");
        let playerBacknum = document.createElement("span");

        //html 요소 속성 설정
        playerLi.className = "player";
        playerImg.src = playerList.pitcher[i].img;
        playerInfo.className = "playerInfo";
        playerName.textContent = playerList.pitcher[i].nameKr;
        playerName.className = "playerName";
        playerBacknum.textContent = playerList.pitcher[i].backNum;
        playerBacknum.className = "playerBacknum"

        //html 그리기
        pitcherUl.appendChild(playerLi);
        playerLi.appendChild(playerArticle);
        playerArticle.append(playerImg, playerInfo);
        playerInfo.append(playerBacknum, playerName);
    }
}

function drawCatcher(){
    const catcherUl = document.getElementById("catcherList");
    
    for(let i = 0; i < playerList.catcher.length; i++){
        //html 요소 생성
        let playerLi = document.createElement("li");
        let playerArticle = document.createElement("article");
        let playerImg = document.createElement("img");
        let playerInfo = document.createElement("span");
        let playerName = document.createElement("span");
        let playerBacknum = document.createElement("span");

        //html 요소 속성 설정
        playerLi.className = "player";
        playerImg.src = playerList.catcher[i].img;
        playerInfo.className = "playerInfo";
        playerName.textContent = playerList.catcher[i].nameKr;
        playerName.className = "playerName";
        playerBacknum.textContent = playerList.catcher[i].backNum;
        playerBacknum.className = "playerBacknum"

        //html 그리기
        catcherUl.appendChild(playerLi);
        playerLi.appendChild(playerArticle);
        playerArticle.append(playerImg, playerInfo);
        playerInfo.append(playerBacknum, playerName);
    }
}

function drawInfielder(){
    const infielderUl = document.getElementById("infielderList");
    
    for(let i = 0; i < playerList.infielder.length; i++){
        //html 요소 생성
        let playerLi = document.createElement("li");
        let playerArticle = document.createElement("article");
        let playerImg = document.createElement("img");
        let playerInfo = document.createElement("span");
        let playerName = document.createElement("span");
        let playerBacknum = document.createElement("span");

        //html 요소 속성 설정
        playerLi.className = "player";
        playerImg.src = playerList.infielder[i].img;
        playerInfo.className = "playerInfo";
        playerName.textContent = playerList.infielder[i].nameKr;
        playerName.className = "playerName";
        playerBacknum.textContent = playerList.infielder[i].backNum;
        playerBacknum.className = "playerBacknum"

        //html 그리기
        infielderUl.appendChild(playerLi);
        playerLi.appendChild(playerArticle);
        playerArticle.append(playerImg, playerInfo);
        playerInfo.append(playerBacknum, playerName);
    }
}

function drawOutfielder(){
    const outfielderUl = document.getElementById("outfielderList");
    
    for(let i = 0; i < playerList.outfielder.length; i++){
        //html 요소 생성
        let playerLi = document.createElement("li");
        let playerArticle = document.createElement("article");
        let playerImg = document.createElement("img");
        let playerInfo = document.createElement("span");
        let playerName = document.createElement("span");
        let playerBacknum = document.createElement("span");

        //html 요소 속성 설정
        playerLi.className = "player";
        playerImg.src = playerList.outfielder[i].img;
        playerInfo.className = "playerInfo";
        playerName.textContent = playerList.outfielder[i].nameKr;
        playerName.className = "playerName";
        playerBacknum.textContent = playerList.outfielder[i].backNum;
        playerBacknum.className = "playerBacknum"

        //html 그리기
        outfielderUl.appendChild(playerLi);
        playerLi.appendChild(playerArticle);
        playerArticle.append(playerImg, playerInfo);
        playerInfo.append(playerBacknum, playerName);
    }
}
