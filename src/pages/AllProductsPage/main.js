//ioanes filter
(function () {

   let products = document.querySelector('.items');
   let product = Array.from(products.children);

   function Filter() {
      let types = document.querySelector('.prd_types').children;

      for (let i of product) {
         const name = i.querySelector('strong');
         const x = name.textContent;
         i.setAttribute("data-category", x);
      }

      this.run = function () {
         for (let m = 0; m < types.length; m++) {
            types[m].onclick = function () {
               this.classList.add('active');
               const displayProducts = this.getAttribute('data-filter');

               for (let j = 0; j < types.length; j++) {
                  types[j].classList.remove('active');
               }

               for (let k = 0; k < product.length; k++) {
                  product[k].style.display = "none";

                  if ((product[k].getAttribute('data-category') == displayProducts) || displayProducts == "all") {
                     product[k].style.display = "block";
                  }
               }
            };
         }
      }
   }

   function Sorter() {
      let select = document.getElementById('select');
      let arr = [];

      for (let i of product) {
         const last = i.lastElementChild;
         const j = last.textContent.trim();
         const k = Number(j.substring(1));
         i.setAttribute("data-price", k);
         arr.push(i);
      }

      this.run = () => { addevent(); }

      function addevent() {
         select.onchange = sortingValue;
      }

      function sortingValue() {
         if (this.value === 'Default') {
            while (products.firstChild) {
               products.removeChild(products.firstChild);
            }
            products.append(...arr);
         }
         if (this.value === 'LowToHigh') {
            SortElem(products, product, true);
         }
         if (this.value === 'HighToLow') {
            SortElem(products, product, false);
         }
      }

      function SortElem(products, product, bool) {
         let x, sortprd;
         x = bool ? 1 : -1;
         sortprd = product.sort((a, b) => {
            const ax = a.getAttribute('data-price');
            const bx = b.getAttribute('data-price');
            return ax > bx ? (1 * x) : (-1 * x);
         });

         while (products.firstChild) {
            products.removeChild(products.firstChild);
         }

         products.append(...sortprd);
      }
   }

   new Filter().run();
   new Sorter().run();
})();


function register() {
   location.href = "http://localhost:3000/register"
}

function login() {
   location.href = "http://localhost:3000/login"
}

