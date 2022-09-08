import html from '../js/core.js';
import { connect } from '../js/store.js';

const connector = connect(state => ({
    cars: state.cars
}));
function App({ cars }) {

    return html `
    <ul>
        ${cars.map(car => `<li>${car}</li>`)}
    </ul>

    <button onclick="dispatch('ADD', 'Porsche')">Add car</button>
    `
};

export default connector(App);