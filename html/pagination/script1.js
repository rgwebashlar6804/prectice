fetch("products.json")
  .then(function(response){
    return response.json();
  })
  .then(function(products){
    const itemsPerPage = 10; 
    let currentPage = 1;

    // Function to display products for the current page
    function displayProducts(page) {
      const startIndex = (page - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      const displayedProducts = products.slice(startIndex, endIndex);

      let tableBody = document.getElementById('tableBody');
      tableBody.innerHTML = "";

      for (let product of displayedProducts) {
        tableBody.innerHTML += `
          <tr>
            <td>${product.id}</td>
            <td>${product.title}</td>
            <td>${product.description}</td>
            <td>${product.price}</td>
            <td>${product.discountPercentage}</td>
            <td>${product.rating}</td>
            <td>${product.stock}</td>
            <td>${product.brand}</td>
            <td>${product.category}</td>
            <td><img src='${product.thumbnail}' width='50' height='50'></td>
          </tr>
        `;
      }
    }

    // Function to create pagination controls
    function createPaginationControls() {
      const totalPages = Math.ceil(products.length / itemsPerPage);
      let pagination = document.getElementById('pagination');
      pagination.innerHTML = "";

      for (let i = 1; i <= totalPages; i++) {
        let button = document.createElement('button');
        button.textContent = i;
        button.addEventListener('click', function() {
          currentPage = i;
          displayProducts(currentPage);
        });
        pagination.appendChild(button);
      }
    }

    // Initial display
    displayProducts(currentPage);
    createPaginationControls();
  })
  .catch(function(error){
    console.error("Error fetching data:", error);
  });
