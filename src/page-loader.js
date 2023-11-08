function generateDOM() {

    // Body and main div
    const body = document.querySelector('body');
    const main = document.createElement('div');
    main.id = 'main';
    body.append(main);

    // Menu div
    const menu = document.createElement('div');
    menu.classList.add('menu');
    main.append(menu);
    
    // Background image
    const backgroundImage = document.createElement('div');
    backgroundImage.classList.add('background-image');
    main.append(backgroundImage);

    const menuBackgroundPattern = document.createElement('div');
    menuBackgroundPattern.classList.add('menu-background-pattern');
    menu.append(menuBackgroundPattern);

    const placeholder = document.createElement('div');
    placeholder.classList.add('placeholder');
    menu.append(placeholder);

    const menuItems = document.createElement('div');
    menuItems.classList.add('menu-items');
    menu.append(menuItems);
    
    const menuItem1 = document.createElement('div');
    menuItem1.classList.add('menu-item');
    menuItem1.textContent = 'Home';
    menuItems.append(menuItem1);
    menuItem1.addEventListener('click', () => {
        createHomeDiv();
    })
    
    const menuItem2 = document.createElement('div');
    menuItem2.classList.add('menu-item');
    menuItem2.textContent = 'Menu';
    menuItems.append(menuItem2);
    menuItem2.addEventListener('click', () => {
        createShopDiv();
    })
    
    const menuItem3 = document.createElement('div');
    menuItem3.classList.add('menu-item');
    menuItem3.textContent = 'About';
    menuItems.append(menuItem3);
    menuItem3.addEventListener('click', () => {
        createAboutDiv();
    })
    
    const menuItem4 = document.createElement('div');
    menuItem4.classList.add('menu-item');
    menuItem4.textContent = 'Contact Us';
    menuItems.append(menuItem4);
    menuItem4.addEventListener('click', () => {
        createContactUsDiv();
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
    
    createHomeDiv();

    function createHomeDiv() {
        const contentContainerHome = document.querySelector('.home');
        if (!contentContainerHome) {
            const contentContainerHome = document.createElement('div');
            contentContainerHome.classList.add('home', 'hide');
            contentContainer.append(contentContainerHome);
            
            const p1 = document.createElement('p');
            p1.textContent = "Welcome to our coffee realm"
            contentContainerHome.append(p1);

            const p2 = document.createElement('p');
            p2.textContent = "Working hours:"
            contentContainerHome.append(p2);

            const p3 = document.createElement('p');
            p3.textContent = "Monday - Friday: 6am - 5pm"
            contentContainerHome.append(p3);

            const p4 = document.createElement('p');
            p4.textContent = "Saturday - Sunday 8am - 4pm"
            contentContainerHome.append(p4);

            deleteShopDiv();
            deleteAboutDiv();
            deleteContactUsDiv();

            setTimeout(() => {
                contentContainerHome.classList.remove('hide');
            }, 0);
        }
    }

    function createShopDiv() {
        const contentContainerShop = document.querySelector('.shop');
        if (!contentContainerShop) {
            const contentContainerShop = document.createElement('div');
            contentContainerShop.classList.add('shop', 'hide');
            contentContainer.append(contentContainerShop);
            
            const p1 = document.createElement('p');
            p1.textContent = "Donec nec aliquam elit. Donec vitae condimentum magna, in iaculis quam. Duis laoreet nibh vitae purus tincidunt iaculis. Donec nec aliquam elit. Donec vitae condimentum magna, in iaculis quam. Duis laoreet nibh vitae purus tincidunt iaculis. Donec nec aliquam elit. Donec vitae condimentum magna, in iaculis quam. Duis laoreet nibh vitae purus tincidunt iaculis. Donec nec aliquam elit. Donec vitae condimentum magna, in iaculis quam. Duis laoreet nibh vitae purus tincidunt iaculis. Donec nec aliquam elit. Donec vitae condimentum magna, in iaculis quam. Duis laoreet nibh vitae purus tincidunt iaculis. Donec nec aliquam elit. Donec vitae condimentum magna, in iaculis quam. Duis laoreet nibh vitae purus tincidunt iaculis. Donec nec aliquam elit. Donec vitae condimentum magna, in iaculis quam. Duis laoreet nibh vitae purus tincidunt iaculis. Donec nec aliquam elit. Donec vitae condimentum magna, in iaculis quam. Duis laoreet nibh vitae purus tincidunt iaculis. Donec nec aliquam elit. Donec vitae condimentum magna, in iaculis quam. Duis laoreet nibh vitae purus tincidunt iaculis. Donec nec aliquam elit. Donec vitae condimentum magna, in iaculis quam. Duis laoreet nibh vitae purus tincidunt iaculis. Donec nec aliquam elit. Donec vitae condimentum magna, in iaculis quam. Duis laoreet nibh vitae purus tincidunt iaculis. Donec nec aliquam elit. Donec vitae condimentum magna, in iaculis quam. Duis laoreet nibh vitae purus tincidunt iaculis. Donec nec aliquam elit. Donec vitae condimentum magna, in iaculis quam. Duis laoreet nibh vitae purus tincidunt iaculis. Donec nec aliquam elit. Donec vitae condimentum magna, in iaculis quam. Duis laoreet nibh vitae purus tincidunt iaculis. Donec nec aliquam elit. Donec vitae condimentum magna, in iaculis quam. Duis laoreet nibh vitae purus tincidunt iaculis."
            contentContainerShop.append(p1);
            
            const p2 = document.createElement('p');
            p2.textContent = "Sed posuere arcu ac lectus condimentum condimentum."
            contentContainerShop.append(p2);

            deleteHomeDiv();
            deleteAboutDiv();
            deleteContactUsDiv();

            setTimeout(() => {
                contentContainerShop.classList.remove('hide');
            }, 0);
        }
    }

    function createAboutDiv() {
        const contentContainerAbout = document.querySelector('.about');
        if (!contentContainerAbout) {
            const contentContainerAbout = document.createElement('div');
            contentContainerAbout.classList.add('about', 'hide');
            contentContainer.append(contentContainerAbout);
            
            const p1 = document.createElement('p');
            p1.textContent = "Etiam a mi quam."
            contentContainerAbout.append(p1);
            
            const p2 = document.createElement('p');
            p2.textContent = "Donec nec aliquam elit. Donec vitae condimentum magna, in iaculis quam. Duis laoreet nibh vitae purus tincidunt iaculis. Donec nec aliquam elit. Donec vitae condimentum magna, in iaculis quam. Duis laoreet nibh vitae purus tincidunt iaculis. Donec nec aliquam elit. Donec vitae condimentum magna, in iaculis quam. Duis laoreet nibh vitae purus tincidunt iaculis. Donec nec aliquam elit. Donec vitae condimentum magna, in iaculis quam. Duis laoreet nibh vitae purus tincidunt iaculis. Donec nec aliquam elit. Donec vitae condimentum magna, in iaculis quam. Duis laoreet nibh vitae purus tincidunt iaculis. Donec nec aliquam elit. Donec vitae condimentum magna, in iaculis quam. Duis laoreet nibh vitae purus tincidunt iaculis. Donec nec aliquam elit. Donec vitae condimentum magna, in iaculis quam. Duis laoreet nibh vitae purus tincidunt iaculis. Donec nec aliquam elit. Donec vitae condimentum magna, in iaculis quam. Duis laoreet nibh vitae purus tincidunt iaculis. Donec nec aliquam elit. Donec vitae condimentum magna, in iaculis quam. Duis laoreet nibh vitae purus tincidunt iaculis. Donec nec aliquam elit. Donec vitae condimentum magna, in iaculis quam. Duis laoreet nibh vitae purus tincidunt iaculis. Donec nec aliquam elit. Donec vitae condimentum magna, in iaculis quam. Duis laoreet nibh vitae purus tincidunt iaculis. Donec nec aliquam elit. Donec vitae condimentum magna, in iaculis quam. Duis laoreet nibh vitae purus tincidunt iaculis. Donec nec aliquam elit. Donec vitae condimentum magna, in iaculis quam. Duis laoreet nibh vitae purus tincidunt iaculis. Donec nec aliquam elit. Donec vitae condimentum magna, in iaculis quam. Duis laoreet nibh vitae purus tincidunt iaculis. Donec nec aliquam elit. Donec vitae condimentum magna, in iaculis quam. Duis laoreet nibh vitae purus tincidunt iaculis."
            contentContainerAbout.append(p2);

            deleteHomeDiv();
            deleteShopDiv();
            deleteContactUsDiv();

            setTimeout(() => {
                contentContainerAbout.classList.remove('hide');
            }, 0);
        }
    }

    function createContactUsDiv() {
        const contentContainerContactUs = document.querySelector('.contact-us');
        if (!contentContainerContactUs) {
            const contentContainerContactUs = document.createElement('div');
            contentContainerContactUs.classList.add('contact-us', 'hide');
            contentContainer.append(contentContainerContactUs);
            
            const p2 = document.createElement('p');
            p2.textContent = "Sev Leo"
            contentContainerContactUs.append(p2);

            const p3 = document.createElement('p');
            p3.textContent = "seva.leonov@hotmail.com"
            contentContainerContactUs.append(p3);

            const p4 = document.createElement('p');
            p4.textContent = "https://github.com/sevleo"
            contentContainerContactUs.append(p4);

            deleteHomeDiv();
            deleteShopDiv();
            deleteAboutDiv();

            setTimeout(() => {
                contentContainerContactUs.classList.remove('hide');
            }, 0);
        }

    }

    function deleteHomeDiv() {
        const contentContainerHome = document.querySelector('.home');
        if (contentContainerHome) {
            contentContainerHome.remove();
        }
    }

    function deleteShopDiv() {
        const contentContainerShop = document.querySelector('.shop');
        if (contentContainerShop) {
            contentContainerShop.remove();
        }
    }

    function deleteAboutDiv() {
        const contentContainerAbout = document.querySelector('.about');
        if (contentContainerAbout) {
            contentContainerAbout.remove();
        }
    }

    function deleteContactUsDiv() {
        const contentContainerContactUs = document.querySelector('.contact-us');
        if (contentContainerContactUs) {
            contentContainerContactUs.remove();
        }
    }
}



export {generateDOM};