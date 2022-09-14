import html from '../js/core.js';
var day = new Date();

function Header() {
    return html `
        <header class="header">
            <h1>${day.getDay()}/${day.getMonth() + 1}/${day.getFullYear()}</h1>
            <input 
                class="new-todo" 
                placeholder="What needs to be done?" 
                autofocus
                onkeyup="event.keyCode === 13 && dispatch('add', this.value.trim())"
                >
        </header>
    `
}

export default Header;