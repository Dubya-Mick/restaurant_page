function food () {
    let activeTab = document.getElementById('active-tab');

    let foodTitle = document.createElement('div');
    foodTitle.textContent = "You won't believe it's food . . .";
    foodTitle.style.fontSize = '3rem';
    foodTitle.style.margin = '3vh 0 0 12vw';

    let foodPic = document.createElement('img');
    foodPic.setAttribute('src', 'https://i.pinimg.com/originals/a1/e5/15/a1e51546a4648d921fe75cfadc89dd9a.png');
    foodPic.style.display = 'block';
    foodPic.style.width = '500px';
    foodPic.style.height = '500px';
    foodPic.style.margin = '0 auto';

    let foodCopy = document.createElement('div');
    foodCopy.textContent = ". . . and honestly we didn't either. Not until we tasted it. Biological upcycling of preused nutrients adds subtle dimensions of flavor and texture that no other restaurant can provide. Welcome to the future of dining. Welcome to the Second Harvest."
    foodCopy.style.width = '32vw';

    let imgCopyWrapper = document.createElement('div');
    imgCopyWrapper.style.display = 'grid';
    imgCopyWrapper.style.gridTemplateColumns = '1fr 1fr';
    imgCopyWrapper.style.alignItems = 'center';
    imgCopyWrapper.style.justifyContent = 'center';

    imgCopyWrapper.appendChild(foodPic);
    imgCopyWrapper.appendChild(foodCopy);

    activeTab.appendChild(foodTitle);
    activeTab.appendChild(imgCopyWrapper);
}

export default food;