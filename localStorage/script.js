// Sample data array to store products
let products = [];

// Function to add a new product
function addProduct(event) {
    event.preventDefault(); // Prevent form submission
    
    // Get form values
    const productName = document.getElementById('productName').value;
    const categoryName = document.getElementById('categoryName').value;
    const brand = document.getElementById('brand').value;
    const modelName = document.getElementById('modelName').value;
    const productImage = document.getElementById('productImage').value;
    const price = parseFloat(document.getElementById('price').value);
    const discount = parseFloat(document.getElementById('discount').value);
    const rating = parseFloat(document.getElementById('rating').value);
    const dealDay = document.getElementById('dealDay').value;
    const color = document.getElementById('color').value;
    const userPurchase = parseInt(document.getElementById('userPurchase').value);
    const description = document.getElementById('description').value;
    
    // Create new product object
    const newProduct = {
        productName,
        categoryName,
        brand,
        modelName,
        productImage,
        price,
        discount,
        rating,
        dealDay,
        color,
        userPurchase,
        description
    };
    
    // Add new product to array
    products.push(newProduct);
    
    // Reset form
    document.getElementById('productForm').reset();
    
    // Refresh product list
    displayProducts();
}

// Function to display products in the table
function displayProducts() {
    const productList = document.getElementById('productList');
    productList.innerHTML = ''; // Clear existing data
    
    products.forEach(product => {
        const row = document.createElement('tr');
        
        // Fill in table cells with product data
        row.innerHTML = `
            <td>${product.productName}</td>
            <td>${product.categoryName}</td>
            <td>${product.brand}</td>
            <td>${product.modelName}</td>
            <td>$${product.price.toFixed(2)}</td>
            <td>
                <button onclick="editProduct('${product.modelName}')">Edit</button>
                <button onclick="deleteProduct('${product.modelName}')">Delete</button>
            </td>
        `;
        
        productList.appendChild(row);
    });
}

// Function to delete a product
function deleteProduct(modelName) {
    products = products.filter(product => product.modelName !== modelName);
    displayProducts();
}

// Function to edit a product
function editProduct(modelName) {
    const product = products.find(product => product.modelName === modelName);
    if (product) {
        // Fill form with product data for editing
        document.getElementById('productName').value = product.productName;
        document.getElementById('categoryName').value = product.categoryName;
        document.getElementById('brand').value = product.brand;
        document.getElementById('modelName').value = product.modelName;
        document.getElementById('productImage').value = product.productImage;
        document.getElementById('price').value = product.price;
        document.getElementById('discount').value = product.discount;
        document.getElementById('rating').value = product.rating;
        document.getElementById('dealDay').value = product.deal
    }
}

// Event listener for form submission
document.getElementById('productForm').addEventListener('submit', addProduct);

// Initial display of products
displayProducts();
