function testimonial () {
    let activeTab = document.getElementById('active-tab');

    let reviewWrapper = document.createElement('div');
    reviewWrapper.style.display = 'grid';
    reviewWrapper.style.gridTemplateColumns = '1fr 1fr 1fr';
    reviewWrapper.style.width = '80vw';
    reviewWrapper.style.margin = '3vh auto'
    reviewWrapper.style.textAlign = 'center';
    reviewWrapper.style.alignItems = 'center';

    let reviewOneWrap = document.createElement('div');
    reviewOneWrap.style.margin = '0 1rem 0 0';
    let reviewOne = document.createElement('div');
    reviewOne.textContent = "Now I'm a business man. And in my industry, trust is a limited resource. That's why I was blown away by the customer service at Second Harvest Catering. Their sloppy jo's had HR licking their lips!";
    let reviewOneCaption = document.createElement('div') 
    reviewOneCaption.textContent = '— Jimp Nugget, Associated Waste Management';
    let reviewOnePhoto = document.createElement('img');
    reviewOnePhoto.setAttribute('src', 'https://purepng.com/public/uploads/large/businessman-1aq.png');
    reviewOnePhoto.style.height = '300px';
    reviewOneWrap.appendChild(reviewOnePhoto);
    reviewOneWrap.appendChild(reviewOne);
    reviewOneWrap.appendChild(reviewOneCaption);

    let reviewTwoWrap = document.createElement('div');
    let reviewTwo = document.createElement('div');
    reviewTwo.textContent = "I'm not gonna lie. I'm a bit of a foodie. So I was understandably a little hesitant to try such an innovative culinary experience. But let me tell you, these sandwiches are soft in the best way. I barely have to chew!";
    let reviewTwoCaption = document.createElement('div');
    reviewTwoCaption.textContent = '— Garen Boop, The Eating Show';
    let reviewTwoPhoto = document.createElement('img');
    reviewTwoPhoto.setAttribute('src', 'https://purepng.com/public/uploads/large/purepng.com-cool-guymanpeoplepersonsmalecool-1121525125875xyw4y.png');
    reviewTwoPhoto.style.height = '330px';
    reviewTwoWrap.appendChild(reviewTwoPhoto);
    reviewTwoWrap.appendChild(reviewTwo);
    reviewTwoWrap.appendChild(reviewTwoCaption);

    let reviewThreeWrap = document.createElement('div');
    reviewThreeWrap.style.margin = '0 0 0 1rem'
    let reviewThree = document.createElement('div');
    reviewThree.textContent = "I'm just a regular person. I'm trying to feed my kids, and this is doing the job just fine."
    let reviewThreeCaption = document.createElement('div');
    reviewThreeCaption.textContent = '— Timander Gliss';
    let reviewThreePhoto = document.createElement('img');
    reviewThreePhoto.setAttribute('src', 'https://2.bp.blogspot.com/-nc-jObav_Kg/U_3zqpG15oI/AAAAAAAAB3g/0378Lns5cfk/s1600/happy-woman--%2Bhow%2Bto%2Bmake%2Byour%2Bwoman%2Bhappy.png');
    reviewThreePhoto.style.height = '300px';
    reviewThreeWrap.appendChild(reviewThreePhoto);
    reviewThreeWrap.appendChild(reviewThree);
    reviewThreeWrap.appendChild(reviewThreeCaption);

    reviewWrapper.appendChild(reviewOneWrap);
    reviewWrapper.appendChild(reviewTwoWrap);
    reviewWrapper.appendChild(reviewThreeWrap);

    activeTab.appendChild(reviewWrapper);


}

export default testimonial;