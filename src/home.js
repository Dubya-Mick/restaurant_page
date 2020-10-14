function home() {
    let activeTab = document.getElementById('active-tab');

    let feast = document.createElement('p');
    feast.setAttribute('id', 'feast');
    feast.textContent = "A feast for the senses";

    let cookingHandsImg = document.createElement('img');
    cookingHandsImg.setAttribute('id', 'cook-hands');
    cookingHandsImg.setAttribute('src', "https://www.pngkey.com/png/full/758-7589724_for-30-years-our-sophisticated-menu-of-contemporary.png");

    let homeCopy = document.createElement('p');
    homeCopy.setAttribute('id', 'home-copy');
    homeCopy.textContent = "At Second Harvest, brown is the new green. Using only the finest locally sourced and biologically upcycled ingredients, our world-class chefs produce artisan sandwich fillings that'll have you coming back for more."

    activeTab.appendChild(feast);
    activeTab.appendChild(cookingHandsImg);
    activeTab.appendChild(homeCopy);

}

export default home;