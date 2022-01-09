import display from './display.js';

function pageLoad() {
    display();
}
window.addEventListener('load', () => {
 pageLoad();
})
// function component() {
//     const element = document.createElement('div');
//     const btn = document.createElement('button');

 
//     btn.innerHTML = 'Click me and check the console!';
//     btn.onclick = display;
 
//     element.appendChild(btn);
//     return element;
    
// }

// document.body.appendChild(component());
