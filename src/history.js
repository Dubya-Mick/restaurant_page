function history() {
    let activeTab = document.getElementById('active-tab');

    let historyTitle = document.createElement('div');
    historyTitle.textContent = "A history of taste";
    historyTitle.style.fontSize = '3rem';
    historyTitle.style.margin = '3vh 0 0 12vw';

    let sandwich = document.createElement('img');
    sandwich.setAttribute('src', 'https://bushbeans.com/sites/default/files/styles/fullsize_style/public/recipes/plate/protein-packed-grilled-cheese.png?itok=tFqeV4Oz');
    sandwich.style.display = 'block';
    sandwich.style.margin = '2rem auto';

    let historyCopy = document.createElement('div');
    historyCopy.textContent = 'It may look like a simple sandwich, but it represents so much more. In the beginning, we were the new kid on the block. We struggled. We cut our teeth. But little did we know we were simply looking for a canvas to paint our Mona Lisa. Now we have over 100 locations and cater to the white house.'
    historyCopy.style.width = '32vw';
    historyCopy.style.margin = '3rem 0 0 55vw';

    activeTab.appendChild(historyTitle);
    activeTab.appendChild(sandwich);
    activeTab.appendChild(historyCopy);

}

export default history;