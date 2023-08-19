const headerNavContent = `
    <div class="headerNav">
        <h1 class="gnb-logo">
            <a href="index.html"><img src="media/img-logo.svg"></a>
        </h1>             
        <nav>
            <ul class="gnb">
                <li>
                    <a href="history.html">History</a>
                </li>
                <li>
                    <a href="player.html">Player</a>
                </li>
                <li>
                    <a href="wizpark.html">Wiz Park</a>
                </li>
                <li>
                    <a href="mediaPhoto.html">Photo</a>
                </li>
                <li>
                    <a href="mediaVideo.html">Video</a>
                </li>
            </ul>
        </nav>
    </div>
`;

const footerNavContent = `
    <div class="footerNav">
        <p><font color="white">제작자 : 방한경(20234236)</font></p>
        <nav>
            <a href="https://www.instagram.com/ktwiz.pr" target="_blank"> <img src="./media/insta_logo.png"> </a>
            <a href="https://www.youtube.com/@ktwiztv" target="_blank"> <img src="./media/youtube_logo.png"> </a>
        </nav>
    </div>
`;

window.onload = function(){
    const headerNav = document.getElementById("headerNav");
    headerNav.innerHTML = headerNavContent;
    const footerNav = document.getElementById("footerNav");
    footerNav.innerHTML = footerNavContent;
}