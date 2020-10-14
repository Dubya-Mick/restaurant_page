function history() {
    let activeTab = document.getElementById('active-tab');

    let testText = document.createElement('div');
    testText.textContent = "A history of taste";
    testText.style.fontSize = '3rem';
    testText.style.margin = '3vh 0 0 12vw';

    let scientificImage = document.createElement('img');
    scientificImage.setAttribute('src', 'https://layers-of-learning.com/wp-content/uploads/2011/03/scientific-method.png');
    scientificImage.style.display = 'block';
    scientificImage.style.margin = '0 auto';

    activeTab.appendChild(testText);

    activeTab.appendChild(scientificImage);

}

export default history;