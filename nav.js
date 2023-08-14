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
                    <a href="introduce.html">ktwiz</a>
                </li>
                <li>
                    <a href="player.html">Player</a>
                </li>
                <li>
                    <a href="">Story</a>
                </li>
            </ul>
        </nav>
    </div>
`;

window.onload = function(){
    const headerNav = document.getElementById("headerNav");
    headerNav.innerHTML = headerNavContent;
}