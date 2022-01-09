export default function Menu() {
    const content = document.getElementById('content');
    content.innerHTML = '';
    const menu = document.createElement('div');
    for (let i = 0; i < 10; i++) {
        const item = document.createElement('div');
        item.className ="menu-item";
        item.textContent = `Dish number ${i+1}`;
        menu.appendChild(item);
    }
    content.appendChild(menu);
    menu.className = "menu-list";

}