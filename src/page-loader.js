function generateDOM() {
    const body = document.querySelector('body');

    const main = document.createElement('div');
    main.id = 'main';
    body.append(main);
    
    const menu = document.createElement('div');
    menu.classList.add('menu');
    main.append(menu);
    
    const content = document.createElement('div');
    content.classList.add('content');
    main.append(content);
    
    const backgroundImage = document.createElement('div');
    backgroundImage.classList.add('background-image');
    main.append(backgroundImage);
    
    const menuLogo = document.createElement('div');
    menuLogo.classList.add('menu-logo');
    content.append(menuLogo);
    
    const contentContainer = document.createElement('div');
    contentContainer.classList.add('content-container');
    content.append(contentContainer);
    
    const contentContainerHome = document.createElement('div');
    contentContainerHome.classList.add('home');
    contentContainer.append(contentContainerHome);
    
    
    const p1 = document.createElement('p');
    p1.textContent = "Welcome to our coffee realm. We're all about exceptional brews and straightforward service. From dark to light roasts, we cater to diverse tastes."
    contentContainerHome.append(p1);
    
    const p2 = document.createElement('p');
    p2.textContent = "Join us for a taste of the coffee world."
    contentContainerHome.append(p2);
    
    const menuItems = document.createElement('div');
    menuItems.classList.add('menu-items');
    menu.append(menuItems);
    
    const menuBackgroundPattern = document.createElement('div');
    menuBackgroundPattern.classList.add('menu-background-pattern');
    menu.append(menuBackgroundPattern);
    
    const menuItem1 = document.createElement('a');
    menuItem1.setAttribute('href', '/');
    menuItem1.classList.add('menu-item');
    menuItem1.textContent = 'Home';
    menuItems.append(menuItem1);
    
    const menuItem2 = document.createElement('a');
    menuItem2.setAttribute('href', '/');
    menuItem2.classList.add('menu-item');
    menuItem2.textContent = 'Shop';
    menuItems.append(menuItem2);
    
    const menuItem3 = document.createElement('a');
    menuItem3.setAttribute('href', '/');
    menuItem3.classList.add('menu-item');
    menuItem3.textContent = 'About';
    menuItems.append(menuItem3);
    
    const menuItem4 = document.createElement('a');
    menuItem4.setAttribute('href', '/');
    menuItem4.classList.add('menu-item');
    menuItem4.textContent = 'Contact Us';
    menuItems.append(menuItem4);
    
    Array.from(document.getElementsByClassName('menu-item')).forEach((item, index) => {
        item.onmouseover = () => {
            menu.dataset.activeIndex = index;
        }
    })
}

export {generateDOM};