import NavBar from './nav.js';
import HomeDisplay from './home.js';
import Menu from './menu.js';

function pageLoad() {
    HomeDisplay();
    NavBar();

}
document.addEventListener('click', event => {
    console.log(event.target.textContent);
    if (event.target.textContent === 'Menu') {
        Menu();
    }
})
window.addEventListener('load', () => {
 pageLoad();
})
