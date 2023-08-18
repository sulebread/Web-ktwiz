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

window.onload = function(){
    const headerNav = document.getElementById("headerNav");
    headerNav.innerHTML = headerNavContent;
}