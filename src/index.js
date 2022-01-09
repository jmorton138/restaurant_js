import NavBar from './nav.js';
import HomeDisplay from './home.js';
import Menu from './menu.js';
import Contact from './contact.js';

function pageLoad() {
    HomeDisplay();
    NavBar();

}
document.addEventListener('click', event => {
    console.log(event.target.textContent);
    if (event.target.textContent === 'Menu') {
        Menu();
    }
    if (event.target.textContent === 'Contact') {
        Contact();
    }
    if (event.target.textContent === 'Home') {
        HomeDisplay();
    }
})
window.addEventListener('load', () => {
 pageLoad();
})
