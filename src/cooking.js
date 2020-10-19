function cooking () {
    let activeTab = document.getElementById('active-tab');

    let cookingTitle = document.createElement('div');
    cookingTitle.textContent = 'The kitchen was inside you all along. . . ';
    cookingTitle.style.fontSize = '3rem';
    cookingTitle.style.margin = '3vh 0 0 12vw';

    let digestImg = document.createElement('img');
    digestImg.setAttribute('src', 'https://childrensgimd.com/wp-content/uploads/2015/08/abdomen-digestive-system-614x1024.png');
    digestImg.style.display = 'block';
    digestImg.style.margin = '2rem auto';
    digestImg.style.height = '600px';

    let cookingCopy = document.createElement('div');
    cookingCopy.textContent = "As so happens in many a tale of innovation, what you set out journeying to find was inside all along. At Second Harvest, we've discovered that Nature's kitchen lives inside of all of us. To all who doubted us along the way, we ask one simple question: 'If the human body weren't made to produce restaurant-quality food, why is its average temperature such a perfect 98.6?'";
    cookingCopy.style.marginRight = '5vw';

    let imgCopyWrapper = document.createElement('div');
    imgCopyWrapper.style.display = 'grid';
    imgCopyWrapper.style.gridTemplateColumns = '1fr 1fr';
    imgCopyWrapper.style.margin = '0 auto';
    imgCopyWrapper.style.alignItems = 'center';
    
    

    imgCopyWrapper.appendChild(digestImg);
    imgCopyWrapper.appendChild(cookingCopy);

    activeTab.appendChild(cookingTitle);
    activeTab.appendChild(imgCopyWrapper);
}

export default cooking;