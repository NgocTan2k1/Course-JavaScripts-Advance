const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// console.log($('#heading'));

const app = (()=> {
   const cars = ['BWM'];

   const root = $('#root');
   const input = $('#input');
   const submit = $('#submit');
   

   return {

      // add car
      add(car) {
         cars.push(car);
      },

      //delete car
      delete(index) {
         cars.splice(index, 1);
      },

      //reder UI
      render() {
         const html = cars.map((car, index) => `
         <li>
            ${car}
            <span class="delete" data-index="${index}">&times</span>
         </li>`
         ).join('');

         root.innerHTML = html;
      },


      handleDelete(event) {
         const deleteBtn = event.target.closest('.delete');

         if(deleteBtn) {
            const index = deleteBtn.getAttribute('data-index');
            this.delete(index);
            this.render();
         }
      },

      init() {
         //handle DOM event
         submit.onclick = () => {
            const car = input.value;
            this.add(car);
            this.render();

            input.value = null;
            input.focus();
         }

         root.onclick = this.handleDelete.bind(this);


         this.render();
      }
   };
})();

app.init();
