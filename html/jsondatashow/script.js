fetch("products.json")
  .then(function(response){
      return response.json();
  })
  .then(function(products){
      let placeholder = document.querySelector("#data-output");
      let out = "";
      for(let product of products){
          out += `
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
              <td><img src='${product.thumbnail}' width="100" height="100"></td>
          </tr>
          `;
      }
      placeholder.innerHTML = out;
  })
  .catch(function(error){
      console.error("Error fetching data:", error);
  });
