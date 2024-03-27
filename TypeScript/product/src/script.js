"use strict";
// import Swal from "sweetalert2";
var Swal;
let productList = localStorage.getItem("productList") ? JSON.parse(localStorage.getItem("productList")) : [];
// selection elements start
const nameInput = document.getElementById("name");
const categoryInput = document.getElementById("category");
const priceInput = document.getElementById("price");
const colorInput = document.getElementById("color");
const descriptionInput = document.getElementById("description");
const image = document.getElementById("inputGroupFile01");
const closeBtn = document.getElementById("close-btn");
const nameError = document.getElementById("name-error-msg");
const categoryError = document.getElementById("category-error-msg");
const priceError = document.getElementById("price-error-msg");
const colorError = document.getElementById("color-error-msg");
const discError = document.getElementById("disc-error-msg");
const imageError = document.getElementById("image-error-msg");
const formselect = document.getElementById("addDataModal");
const curdTable = document.querySelector("#curd-table");
const sortTable = document.querySelector("#sort-table");
// const viewMore = document.querySelectorAll('.view-more') as HTMLSelectElement;
// console.log(sortTable);
const imageEdit = document.getElementById("image-edit");
const update = document.querySelector("#update");
const idEditInput = document.getElementById("id-edit");
const nameEditInput = document.getElementById("name-edit");
const categoryEditInput = document.getElementById("category-edit");
const priceEditInput = document.getElementById("price-edit");
const colorEditInput = document.getElementById("color-edit");
const descriptionEditInput = document.getElementById("description-edit");
const selectElem = document.querySelector("#sort-select");
// const searchvalue = document.querySelector("#serachProductText") as HTMLInputElement;
// selection elements end
function validationForm() {
    const name = nameInput.value.trim();
    const category = categoryInput.value.trim();
    const price = Number(priceInput.value.trim());
    const color = colorInput.value.trim();
    if (name === "") {
        nameError.innerHTML = "Please enter your name";
        // return false;
    }
    else {
        nameError.innerHTML = "";
    }
    if (category === "") {
        categoryError.innerHTML = " Please enter your Category";
        // return false;
    }
    else {
        categoryError.innerHTML = "";
    }
    if (isNaN(price) || price === 0) {
        priceError.innerHTML = " Please enter a valid price number that not start with zero";
        // return false;
    }
    else {
        priceError.innerHTML = "";
    }
    if (color === "") {
        colorError.innerHTML = " Please enter your color";
        return false;
    }
    else {
        colorError.innerHTML = "";
    }
    // Validate description input
    if (descriptionInput.value.length > 10000) {
        discError.innerHTML = " Description can be maximum 50 characters";
        return false;
    }
    else if (descriptionInput.value == "") {
        discError.innerHTML = " Please enter the Discription";
        return false;
    }
    else {
        discError.innerHTML = "";
    }
    // const imageFilesLength: number = image.files ? image.files.length : 0;
    // if (imageFilesLength) {
    //     imageError.innerHTML = " Please attach an image";
    //     return false;
    // } else {
    //     imageError.innerHTML = ""
    // }
    const allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
    if (!image.files || image.files.length === 0 || !allowedExtensions.test(image.files[0].name)) {
        imageError.innerHTML = "Please attach a valid image file (jpg, jpeg, png, or gif)";
        image.value = ""; // Clear the input field
        return false;
    }
    else {
        imageError.innerHTML = "";
    }
    let fileSize = image.files[0].size / 1024; // in KB
    if (fileSize > 1024) {
        imageError.innerHTML = " Please attach an image that is smaller than 1024KB";
        image.value = "";
        return false;
    }
    else {
        imageError.innerHTML = "";
    }
    return true;
}
function clearForm() {
    let formselect = document.getElementById("addDataModal");
    formselect.addEventListener('hidden.bs.modal', function () {
        let form = formselect.querySelector('form');
        // Reset the form
        if (form) {
            form.reset();
            let clearError = document.querySelectorAll('.clearError');
            clearError.forEach((element) => {
                element.innerHTML = "";
            });
        }
    });
}
function AddData() {
    if (validationForm() == true) {
        let name = nameInput.value;
        let category = categoryInput.value;
        let price = Number(priceInput.value);
        let color = colorInput.value;
        let description = descriptionInput.value;
        let image = document.getElementById("inputGroupFile01");
        let reader = new FileReader();
        let id = 1;
        if (productList.length > 0) {
            let ids = productList.map((product) => product.id);
            id = Math.max(...ids) + 1;
        }
        // console.log(name);
        reader.readAsDataURL(image.files[0]);
        reader.addEventListener("load", () => {
            productList.push({
                id: id,
                name: name,
                category: category,
                price: price,
                color: color,
                description: description,
                image: reader.result
            });
            localStorage.setItem("productList", JSON.stringify(productList));
            // location.reload();
            showData();
            Swal.fire({
                // position: "top-end",
                icon: "success",
                title: "Product Add SuccessFully",
                showConfirmButton: false,
                timer: 1000
            }).then(() => {
                location.reload();
            });
        });
    }
}
//show data
function showData() {
    cart(productList);
    // console.log(productList); 
}
//load all product data
showData();
function cart(productList) {
    let html = "";
    // console.log("filterData", productList);
    if (productList.length === 0) {
        html += `<div class="card-body">
        <div class="row gx-2">
          <div class="col">
            <div class="p-3">
              <img src="img/no-data-found.png" class="img-fluid rounded mx-auto d-block" alt="No Products">
              <p class="text-center">No products to display</p>
            </div>
          </div>
        </div>
      </div>`;
    }
    else {
        productList.forEach(function (element) {
            // Truncate description to two lines initially
            let truncatedDescription = element.description.split('\n').slice(0, 1).join('\n');
            let reminingDescriptions = element.description.split('\n').slice(1).join('\n');
            html +=
                `<div>
                <div class='row gx-2'>
                <div class='col'>
                <div class='p-3'>
                <div class='card d-flex card-all'>
                <div class='card-body'style=" height: 11rem; width: 16rem;">
                <h5 class='card-title text-center'><strong>Product Id.-</strong> ${element.id} </h5>
                <img src="${element.image}" class="card-img-top" alt='Image' style=" height: 7rem; width: 14rem;">
                </div>
                <ul class='list-group list-group-flush'>
                <li class='list-group-item'><strong>Product -</strong>  ${element.name}  </li>
                <li class='list-group-item'><strong>category -</strong>  ${element.category}  </li>
                <li class='list-group-item h-25 description'><strong>Description -</strong>  ${truncatedDescription}  <span class="more" style="display: none">${reminingDescriptions}</span> <button class="btn btn-link view-more">View More</button></li>
                <li class='list-group-item'><strong> Price -</strong>  ₹ ${element.price}</li>
                <li class='list-group-item'><strong> Color -</strong>  ${element.color}</li>
                </ul>
                <div class='card-body text-center'>
                 <button onclick='editData("${element.id}")' type='button' data-bs-toggle='modal' data-bs-target='#exampleModal-2' class='btn btn-success' style="width: 49%">Edit</button>
                 <button onclick='deleteData("${element.id}")' type='button' class='btn btn-danger' style="width: 49%">Delete</button>
                </div>
                </div>
                </div>
                </div>
                </div>
                </div>`;
        });
    }
    curdTable.classList.add("d-none");
    sortTable.innerHTML = html;
    // Add event listeners for "View More" buttons
    document.querySelectorAll('.view-more').forEach(button => {
        button.addEventListener('click', () => {
            let descriptionSpan = button.parentNode?.querySelector('.more');
            if (descriptionSpan.style.display === 'none') {
                descriptionSpan.style.display = 'inline';
                button.innerText = 'View Less';
            }
            else {
                descriptionSpan.style.display = 'none';
                button.innerText = 'View More';
            }
        });
    });
}
//delete functionality start
function deleteData(id) {
    const index = productList.findIndex(product => product.id == id);
    // console.log(id);
    if (index >= 0) {
        // if (confirm("Are you sure you want to delete this item?")) {
        //     productList.splice(index, 1);
        //     localStorage.setItem("productList", JSON.stringify(productList));
        //     showData();
        //     // location.reload(); // Reload the current page
        // }
        Swal.fire({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this item!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                // User confirmed deletion
                productList.splice(index, 1);
                localStorage.setItem("productList", JSON.stringify(productList));
                showData();
                // location.reload(); // Reload the current page
                Swal.fire('Deleted!', 'delete successfully', 'success');
            }
        });
    }
    else {
        Swal.fire('Delete invalid!', 'Product Data Does not Exists', 'warning');
        alert("Delete invalid!");
    }
}
//delete functionality end
function editData(id) {
    const index = productList?.findIndex(product => product.id == id);
    // console.log("index " + index);
    if (index !== undefined && index !== -1 && productList && productList.length > 0) {
        if (idEditInput && nameEditInput && categoryEditInput && priceEditInput && colorEditInput && descriptionEditInput) {
            idEditInput.value = productList[index].id;
            nameEditInput.value = productList[index].name;
            categoryEditInput.value = productList[index].category;
            priceEditInput.value = productList[index].price;
            colorEditInput.value = productList[index].color;
            descriptionEditInput.value = productList[index].description;
        }
        const imagePreview = document.getElementById("image-div");
        const imageDiv = document.getElementById("image-div");
        const imageEdit = document.getElementById("image-edit");
        if (imagePreview && imageDiv && imageEdit) {
            imagePreview.src = productList[index].image;
            imageDiv.innerHTML = `<img src="${productList[index].image}" width="100%" height="100%">`;
            imageEdit.onchange = function (event) {
                const file = event.target.files[0];
                const reader = new FileReader();
                reader.onload = function () {
                    productList[index].image = reader.result;
                    imagePreview.src = reader.result;
                };
                reader.readAsDataURL(file);
            };
        }
        update.onclick = function () {
            if (index !== undefined && index !== -1) {
                productList[index].id = idEditInput.value;
                productList[index].name = nameEditInput.value;
                productList[index].category = categoryEditInput.value;
                productList[index].price = priceEditInput.value;
                productList[index].color = colorEditInput.value;
                productList[index].description = descriptionEditInput.value;
                localStorage.setItem("productList", JSON.stringify(productList));
                // location.reload();
                showData();
                Swal.fire({
                    // position: "top-end",
                    icon: "success",
                    title: "Product Updated Successfully",
                    showConfirmButton: false,
                    timer: 1000
                }).then(() => {
                    location.reload();
                });
                idEditInput.value = "";
                nameEditInput.value = "";
                categoryEditInput.value = "";
                priceEditInput.value = "";
                colorEditInput.value = "";
                descriptionEditInput.value = "";
                document.getElementById("close-btn")?.click();
            }
        };
    }
}
function searchBar() {
    const searchvalue = document.querySelector("#serachProductText").value;
    // console.log(searchvalue1);
    commonSearchBar(searchvalue);
}
function searchCategory() {
    let searchvalue = document.querySelector("#serachProductcategory").value;
    console.log(searchvalue);
    commonSearchBar(searchvalue);
}
function commonSearchBar(searchvalue) {
    let sortedItem = [];
    let sortedProduct = JSON.parse(localStorage.getItem("productList") || '[]');
    for (let element of sortedProduct) {
        // const searchvalue = (document.querySelector("#serachProductText") as HTMLInputElement).value;
        let regex = new RegExp(searchvalue, "i");
        if (regex.test(element.color)) {
            sortedItem.push(element);
        }
    }
    console.log(sortedItem);
    // Assuming searchProduct is a function that takes sortedItem as input and performs further processing
    searchProduct(sortedItem);
}
function searchProduct(sortedItem) {
    cart(sortedItem);
}
function filterProduct(sortvalue) {
    console.log(sortvalue);
    let productList = JSON.parse(localStorage.getItem("productList")) ?? null;
    let sortedProduct = JSON.parse(localStorage.getItem("sortedProduct")) ?? null;
    sortedProduct = productList;
    console.log(sortedProduct);
    localStorage.setItem("sortedProduct", JSON.stringify(sortedProduct));
    //filter Description    
    if (sortvalue == "desc") {
        let desc = true;
        sortedProduct = sortedProduct.sort((a, b) => desc ? b.id - a.id : a.id - b.id);
        desc = !desc;
        console.log("descending", sortedProduct);
        return filteredData(sortedProduct); // Assuming filteredData function is defined elsewhere
    }
    else if (sortvalue == "asc") {
        let desc = false;
        sortedProduct = sortedProduct.sort((a, b) => desc ? b.id - a.id : a.id - b.id);
        console.log("Asc", sortedProduct);
        return filteredData(sortedProduct); // Assuming filteredData function is defined elsewhere
    }
    else if (sortvalue == "name") {
        sortedProduct = sortedProduct.sort((a, b) => a.name.localeCompare(b.name));
        console.log("name", sortedProduct);
        return filteredData(sortedProduct); // Assuming filteredData function is defined elsewhere
    }
    else if (sortvalue == "name-desc") {
        sortedProduct = sortedProduct.sort((a, b) => b.name.localeCompare(a.name));
        console.log("name", sortedProduct);
        return filteredData(sortedProduct); // Assuming filteredData function is defined elsewhere
    }
    else if (sortvalue == "color") {
        sortedProduct = sortedProduct.sort((a, b) => a.color.localeCompare(b.color));
        console.log("color", sortedProduct);
        return filteredData(sortedProduct); // Assuming filteredData function is defined elsewhere
    }
    else if (sortvalue == "color-desc") {
        sortedProduct = sortedProduct.sort((a, b) => b.color.localeCompare(a.color));
        console.log("color", sortedProduct);
        return filteredData(sortedProduct); // Assuming filteredData function is defined elsewhere
    }
    else if (sortvalue == "category") {
        sortedProduct = sortedProduct.sort((a, b) => a.category.localeCompare(b.category));
        console.log("category", sortedProduct);
        return filteredData(sortedProduct); // Assuming filteredData function is defined elsewhere
    }
    else if (sortvalue == "price-desc") {
        sortedProduct = sortedProduct.sort((a, b) => a.price - b.price);
        console.log("Price", sortedProduct);
        return filteredData(sortedProduct); // Assuming filteredData function is defined elsewhere
    }
    else if (sortvalue == "price") {
        sortedProduct = sortedProduct.sort((a, b) => b.price - a.price);
        console.log("Price", sortedProduct);
        return filteredData(sortedProduct); // Assuming filteredData function is defined elsewhere
    }
    else {
        return false;
    }
}
function filteredData(sortedProduct) {
    cart(sortedProduct);
}
selectElem.addEventListener("change", (event) => {
    let sortBy = event.target.value;
    filterProduct(sortBy);
    if (sortBy == "refresh-btn") {
        location.reload();
    }
});
function searchColor() {
    const searchvalue = document.querySelector("#serachProductcolor").value;
    console.log(searchvalue);
    commonSearchBar(searchvalue);
}
function filterCategories() {
    const checked = document.querySelectorAll('input[name="category"]:checked');
    const selectedCategories = Array.from(checked).map((checkbox) => checkbox.value);
    if (selectedCategories.length === 0) {
        displayCategories(productList);
    }
    else {
        const filteredProducts = productList.filter(product => selectedCategories.includes(product.category));
        displayCategories(filteredProducts);
    }
}
function displayCategories(productList) {
    cart(productList);
}
