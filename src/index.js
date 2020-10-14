import home from './home';
import history from './history';

const renderNav = (() => {

    //clear active tab
    const clearActiveTab = () => {
        let activeTab = document.getElementById('active-tab');
        while(activeTab.firstChild) {
            activeTab.removeChild(activeTab.firstChild);
        }
    }

    const navBar = () => {
        //main entire body wrapper
        let mainContentDiv = document.getElementById('content');

        //ids for navbar divs
        let idArray = ['title', 'our-story', 'our-food', 'cooking', 'testimonial'];

        //textContent for each tab
        let textContentArray = ['Second Harvest', 'History', 'Food', '"Cooking"', 'Testimonials'];

        //navBar wrapper
        let navBarWrapper = document.createElement('div');
        navBarWrapper.setAttribute('id', 'tab-nav-bar');

        //active tab content wrapper
        let activeTab = document.createElement('div');
        activeTab.setAttribute('id', 'active-tab');

        //doc fragment to contain all tabs before appending to DOM
        let tabFragment = document.createDocumentFragment();

        //create divs for each tab of the nav bar and set their ids
        idArray.forEach((idName) => {
            let tab = document.createElement('div');
            tab.setAttribute('id', idName);
            tabFragment.appendChild(tab);
        });
        navBarWrapper.appendChild(tabFragment);

        //set the text content of each nav bar tab
        let navTabs = [...navBarWrapper.children];
        for(let i = 0; i < textContentArray.length; i++) {
            navTabs[i].textContent = textContentArray[i];
        }
    
        //render the navbar and the maincontent on load
        mainContentDiv.appendChild(navBarWrapper);
        mainContentDiv.appendChild(activeTab);
        home();

        //testing history module
        let historyTest = document.getElementById('our-story');
        historyTest.addEventListener('click', () => {
            clearActiveTab();
            history();
        })

        //testing home module
        let homeTest = document.getElementById('title');
        homeTest.addEventListener('click', () => {
            clearActiveTab();
            home();
        })
    }

    
    

    return {navBar};
})();

renderNav.navBar();

//to do: add other tab modules, think about maybe having an array of all the module
//functions and using a loop to add event listeners to each tab div all at once