function generateDOM() {

    // Body and main div
    const body = document.querySelector('body');
    const main = document.createElement('div');
    main.id = 'main';
    body.append(main);

    // Background image
    const backgroundImage = document.createElement('div');
    backgroundImage.classList.add('background-image');
    main.append(backgroundImage);

    // Menu div
    const menu = document.createElement('div');
    menu.classList.add('menu');
    main.append(menu);
    
    const menuBackgroundPattern = document.createElement('div');
    menuBackgroundPattern.classList.add('menu-background-pattern');
    menu.append(menuBackgroundPattern);

    const menuItems = document.createElement('div');
    menuItems.classList.add('menu-items');
    menu.append(menuItems);
    
    const menuItem1 = document.createElement('div');
    menuItem1.classList.add('menu-item');
    menuItem1.textContent = 'Home';
    menuItems.append(menuItem1);
    menuItem1.addEventListener('click', () => {
        showHome();
        hideShop();
        hideAbout();
        hideContactUs();
    })
    
    const menuItem2 = document.createElement('div');
    menuItem2.classList.add('menu-item');
    menuItem2.textContent = 'Shop';
    menuItems.append(menuItem2);
    menuItem2.addEventListener('click', () => {
        hideHome();
        showShop();
        hideAbout();
        hideContactUs();
    })
    
    const menuItem3 = document.createElement('div');
    menuItem3.classList.add('menu-item');
    menuItem3.textContent = 'About';
    menuItems.append(menuItem3);
    menuItem3.addEventListener('click', () => {
        hideHome();
        hideShop();
        showAbout();
        hideContactUs();
    })
    
    const menuItem4 = document.createElement('div');
    menuItem4.classList.add('menu-item');
    menuItem4.textContent = 'Contact Us';
    menuItems.append(menuItem4);
    menuItem4.addEventListener('click', () => {
        hideHome();
        hideShop();
        hideAbout();
        showContactUs();
    })
    
    Array.from(document.getElementsByClassName('menu-item')).forEach((item, index) => {
        item.onmouseover = () => {
            menu.dataset.activeIndex = index;
        }
    })

    // Content div
    const content = document.createElement('div');
    content.classList.add('content');
    main.append(content);

    const menuLogo = document.createElement('div');
    menuLogo.classList.add('menu-logo');
    content.append(menuLogo);

    const contentContainer = document.createElement('div');
    contentContainer.classList.add('content-container');
    content.append(contentContainer);
    
    // Home div
    const contentContainerHome = document.createElement('div');
    contentContainerHome.classList.add('home');
    contentContainer.append(contentContainerHome);
    
    const p1 = document.createElement('p');
    p1.textContent = "Welcome to our coffee realm. We're all about exceptional brews and straightforward service. From dark to light roasts, we cater to diverse tastes."
    contentContainerHome.append(p1);
    
    const p2 = document.createElement('p');
    p2.textContent = "Join us for a taste of the coffee world."
    contentContainerHome.append(p2);

    // Shop div
    const contentContainerShop = document.createElement('div');
    contentContainerShop.classList.add('shop', 'hide');
    contentContainer.append(contentContainerShop);
    
    const p3 = document.createElement('p');
    p3.textContent = "Donec nec aliquam elit. Donec vitae condimentum magna, in iaculis quam. Duis laoreet nibh vitae purus tincidunt iaculis."
    contentContainerShop.append(p3);
    
    const p4 = document.createElement('p');
    p4.textContent = "Sed posuere arcu ac lectus condimentum condimentum."
    contentContainerShop.append(p4);

    // About div
    const contentContainerAbout = document.createElement('div');
    contentContainerAbout.classList.add('about', 'hide');
    contentContainer.append(contentContainerAbout);
    
    const p5 = document.createElement('p');
    p5.textContent = "Etiam a mi quam."
    contentContainerAbout.append(p5);
    
    const p6 = document.createElement('p');
    p6.textContent = "Nullam vehicula ultrices nunc vitae condimentum. Sed scelerisque facilisis dolor, id semper magna bibendum ornare."
    contentContainerAbout.append(p6);

    // Contact Us div
    const contentContainerContactUs = document.createElement('div');
    contentContainerContactUs.classList.add('contact-us', 'hide');
    contentContainer.append(contentContainerContactUs);
    
    const p7 = document.createElement('p');
    p7.textContent = "Duis consequat tellus eu metus finibus, a posuere magna hendrerit."
    contentContainerContactUs.append(p7);
    
    const p8 = document.createElement('p');
    p8.textContent = "Vestibulum ullamcorper, augue rhoncus tempor sollicitudin, justo massa maximus orci, eget suscipit magna nulla nec mi. Mauris efficitur felis a suscipit posuere. Pellentesque efficitur diam odio, nec finibus dui blandit nec. Nulla quis nisi sit amet velit tincidunt volutpat eu vel ligula."
    contentContainerContactUs.append(p8);
}

function hideHome() {
    const home = document.querySelector('.home');
    home.classList.add('hide');
}

function showHome() {
    const home = document.querySelector('.home');
    home.classList.remove('hide');
}

function hideShop() {
    const home = document.querySelector('.shop');
    home.classList.add('hide');
}

function showShop() {
    const home = document.querySelector('.shop');
    home.classList.remove('hide');
}

function hideAbout() {
    const home = document.querySelector('.about');
    home.classList.add('hide');
}

function showAbout() {
    const home = document.querySelector('.about');
    home.classList.remove('hide');
}

function hideContactUs() {
    const home = document.querySelector('.contact-us');
    home.classList.add('hide');
}

function showContactUs() {
    const home = document.querySelector('.contact-us');
    home.classList.remove('hide');
}



export {generateDOM};