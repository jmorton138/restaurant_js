import NavBar from './nav.js';

import HomeDisplay from './home.js';

function pageLoad() {
    HomeDisplay();
    NavBar();

}
window.addEventListener('load', () => {
 pageLoad();
})
