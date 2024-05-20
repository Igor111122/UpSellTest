document.addEventListener('DOMContentLoaded', function() {
  var addToCartForms = document.querySelectorAll('.add-to-cart-form');
  addToCartForms.forEach(function(form) {
    form.addEventListener('submit', function(event) {
      event.preventDefault();

      var button = form.querySelector('.add-to-cart-btn');
      var spinner = document.createElement('span');
      spinner.classList.add('spinner');
      button.textContent = '';
      button.appendChild(spinner);

      var formData = new FormData(form);
      fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
          'X-Requested-With': 'XMLHttpRequest'
        }
      })
      .then(response => response.json())
      .then(data => {
        button.textContent = 'Add to cart';
        button.removeChild(spinner);
      })
      .catch(error => {
        console.error('Error:', error);
        button.textContent = 'Add to cart';
        button.removeChild(spinner);
      });
    });
  });
});