window.addEventListener('load', function () {
    drawHistory();
});

function drawHistory(){
    let historyBox = document.getElementById("historyGridView");
    
    for(let i = 0; i < historyList.totalhistory.length; i++){
        let historyCard = document.createElement("div");
        let year = document.createElement("div");
        
        const currentHistory = historyList.totalhistory[i];
        
        historyCard.className = "historyCard";
        year.className = "historyYear";
        year.textContent = currentHistory.year;
        
        historyBox.append(historyCard);
        historyCard.append(year);
        console.log(currentHistory);
        
        for(let j = 0; j < currentHistory.history.length; j++){

            let description = document.createElement("div");
            description.className = "historyDesc";
            description.textContent = currentHistory.history[j];
            historyCard.appendChild(description);
        }
    }
}

// function drawMap(){
//     return(
//         <>
//         {historyList.totalhistory.map((item) => (
//                 <div className="historyCard">
//                     <div className = "historyYear">
//                         {item.year}
//                     </div>
//                     <li>
//                         {item.description}
//                     </li>
//                 </div>
//         ))}
//         </>
//     )
// }