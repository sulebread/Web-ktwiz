window.addEventListener('load', function () {
    drawPhoto();
});

function drawPhoto(){
    const photoUl= document.getElementById("photoList");
    
    for(let i = 0; i < photoList.photo.length; i++){
        let imgList = document.createElement("li");
        imgList.className = "photoCard";
        photoUl.appendChild(imgList);

        let img = document.createElement("img");
        img.className = "photoImg"
        img.src = photoList.photo[i].url;
        
        let subTitle = document.createElement("span");
        subTitle.className = "photoSub";
        subTitle.textContent = photoList.photo[i].subTitle;

        let title = document.createElement("span");
        title.className = "photoTitle";
        title.textContent = photoList.photo[i].title;

        let date = document.createElement("span");
        date.className = "photoDate";
        date.textContent = photoList.photo[i].date;

        imgList.append(img, subTitle, title, date);
    }
}