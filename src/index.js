import './styles.css';

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