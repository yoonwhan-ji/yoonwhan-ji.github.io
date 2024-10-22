document.getElementById('submit-btn').addEventListener('click', function() {
      const checkboxes = document.querySelectorAll('.product-checkbox');
      const selectedProducts = [];
      
      checkboxes.forEach(checkbox => {
          if (checkbox.checked) {
              const productLabel = checkbox.nextElementSibling.querySelector('span').innerText;
              selectedProducts.push(productLabel);
          }
      });
  
      document.getElementById('selected-products').innerText = 
          selectedProducts.length > 0 ? '선택한 상품: ' + selectedProducts.join(', ') : '선택한 상품이 없습니다.';
  });
  