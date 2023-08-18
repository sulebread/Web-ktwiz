const headerNavContent = `
    <div class="headerNav">
        <h1 class="gnb-logo">
            <img src="media/img-logo.svg">
        </h1>             
        <nav>
            <ul class="gnb">
                <li>
                    <a href="index.html">홈</a>
                </li>
                <li>
                    <a href="history.html">History</a>
                </li>
                <li>
                    <a href="player.html">Player</a>
                </li>
                <li>
                    <a href="">Story</a>
                </li>
                <li>
                    <a href="wizpark.html">Wiz Park</a>
                </li>
                <li>
                    <a href="media.html">Media</a>
                </li>
            </ul>
        </nav>
    </div>
`;

const footerNavContent = `
    <div class="footerNav">
        <nav>
            <a href="https://www.instagram.com/ktwiz.pr" target="_blank"> <img src="./media/insta_logo.png" style="width:50px; height:50px;"> </a>
            <a href="https://www.youtube.com/@ktwiztv" target="_blank"> <img src="./media/youtube_logo.png" style="width:50px; height:50px;"> </a>
        </nav>
        <font color="white"> <h3> 제작자 : 방한경 </h3> </font>
    </div>
`;

window.onload = function(){
    const headerNav = document.getElementById("headerNav");
    headerNav.innerHTML = headerNavContent;
    const footerNav = document.getElementById("footerNav");
    footerNav.innerHTML = footerNavContent;
}