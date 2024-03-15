let parentDiv = document.getElementById('result');

// Function to validate form data
function validateForm(name, description, price, image) {
    // Add your validation logic here
    // Example: Check if required fields are empty
    if (name.trim() === "" || description.trim() === "" || isNaN(price) || !image) {
        alert("Please fill in all fields correctly");
        return false;
    }
    return true;
}

// Function to display products
function showProducts() {
    parentDiv.innerHTML = ''; // Clear previous products
    const productList = JSON.parse(localStorage.getItem("productList")) || [];
    productList.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.innerHTML = `
            <p>Name: ${product.name}</p>
            <p>Description: ${product.description}</p>
            <p>Price: $${product.price}</p>
            <img src="images/${product.image}" alt="${product.name}">
            <button onclick="deleteProduct(${product.id})">Delete</button>
        `;
        parentDiv.appendChild(productDiv);
    });
}

// Function to add a product
function addProduct(name, description, price, image) {
    const productList = JSON.parse(localStorage.getItem("productList")) || [];
    const id = productList.length > 0 ? productList[productList.length - 1].id + 1 : 1;
    const newProduct = {
        id,
        name,
        description,
        price,
        image
    };
    productList.push(newProduct);
    localStorage.setItem("productList", JSON.stringify(productList));
    showProducts();
}

// Function to delete a product
function deleteProduct(id) {
    let productList = JSON.parse(localStorage.getItem("productList")) || [];
    productList = productList.filter(product => product.id !== id);
    localStorage.setItem("productList", JSON.stringify(productList));
    showProducts();
}

// Event listener for form submission
document.getElementById('form').addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const description = document.getElementById('description').value;
    const price = document.getElementById('price').value;
    const image = document.getElementById('image').files[0];

    if (validateForm(name, description, price, image.name)) {
        const reader = new FileReader();
        reader.onload = function () {
            const imagePath = `images/${image.name}`;
            addProduct(name, description, price, imagePath);
            // Save the image to the "images" folder in local storage
            localStorage.setItem(imagePath, reader.result);
            alert("Product added successfully");
        };
        reader.readAsDataURL(image);
    }
});

// Display existing products when the page loads
showProducts();
