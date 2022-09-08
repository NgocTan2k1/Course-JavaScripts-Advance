import html from '../js/core.js';
import { connect } from '../js/store.js';
import TodoItem from './TodoItem.js';


function TodoList({ todos }) {
    return html `
        <section class="main">
            <input id="toggle-all" class="toggle-all" type="checkbox">
            <label for="toggle-all">Mark all as complete</label>
            <ul class="todo-list">
                ${todos.map(todo => TodoItem({ todo }))}
            </ul>
        </section>
    `
}

export default connect()(TodoList);