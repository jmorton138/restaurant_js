import Picture from './picture.jpeg';
import './style.css';

export default function HomeDisplay() {

    const content = document.getElementById('content');
    content.innerHTML = '';

    const hero = document.createElement('div')
    hero.className = 'hero';

    const title = document.createElement('h1');
    title.textContent = "A very good restaurant";

    hero.appendChild(title);
    
    const pic = new Image();
    pic.className = "image";
    pic.src = Picture;
    hero.appendChild(pic);

    const body = document.createElement('div');
    body.textContent = "This is the premier restaurant in serving food that's edible.";

    content.appendChild(hero);
    content.appendChild(body);
}