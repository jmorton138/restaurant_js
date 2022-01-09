import Picture from './picture.jpg';
import './style.css';

export default function display() {
    console.log('toodles');

    const content = document.getElementById('content');
    const hero = document.createElement('div')
    hero.className = 'hero';

    const title = document.createElement('h1');
    title.textContent = "Food Place";

    hero.appendChild(title);
    
    const pic = new Image();
    pic.className = "image";
    pic.src = Picture;
    hero.appendChild(pic);

    const body = document.createElement('div');
    body.textContent = "This is the best place for food.";

    content.appendChild(hero);
    content.appendChild(pic)
    content.appendChild(body);
}