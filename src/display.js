export default function display() {
    console.log('toodles');

    const content = document.getElementById('content');
    const hero = document.createElement('div')
    hero.className = 'hero';
    const title = document.createElement('h1');
    title.textContent = "Food Place";
    hero.appendChild(title)
    const body = document.createElement('div')
    body.textContent = "This is the best place for food.";
    content.appendChild(hero);
    content.appendChild(body);
}