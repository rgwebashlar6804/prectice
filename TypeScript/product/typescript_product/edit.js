"use strict";
function editData1(id) {
    const index = productList === null || productList === void 0 ? void 0 : productList.findIndex(product => product.id == id);
    console.log("index " + index);
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
            var _a;
            const isValid = validationForm();
            if (isValid === true) {
                if (index !== undefined && index !== -1) {
                    productList[index].id = idEditInput.value;
                    productList[index].name = nameEditInput.value;
                    productList[index].category = categoryEditInput.value;
                    productList[index].price = priceEditInput.value;
                    productList[index].color = colorEditInput.value;
                    productList[index].description = descriptionEditInput.value;
                    localStorage.setItem("productList", JSON.stringify(productList));
                    location.reload();
                    showData();
                    // Swal.fire({
                    //     // position: "top-end",
                    //     icon: "success",
                    //     title: "Product Updated Successfully",
                    //     showConfirmButton: false,
                    //     timer: 1000
                    // }).then(() => {
                    //     location.reload();
                    // });
                    // Clear form inputs and close modal
                    idEditInput.value = "";
                    nameEditInput.value = "";
                    categoryEditInput.value = "";
                    priceEditInput.value = "";
                    colorEditInput.value = "";
                    descriptionEditInput.value = "";
                    (_a = document.getElementById("close-btn")) === null || _a === void 0 ? void 0 : _a.click();
                }
            }
            else {
                if (isValid.nameEditInput == false) {
                    nameError.innerHTML = "Please enter your name";
                }
                else {
                    nameError.innerHTML = "";
                }
                if (isValid.categoryEditInput === false) {
                    categoryError.innerHTML = "Please enter your Category";
                }
                else {
                    categoryError.innerHTML = "";
                }
                if (isValid.price === false) {
                    priceError.innerHTML = "Please enter a valid price number that does not start with zero";
                }
                else {
                    priceError.innerHTML = "";
                }
                if (isValid.color === false) {
                    colorError.innerHTML = "Please enter your color";
                }
                else {
                    colorError.innerHTML = "";
                }
                if (isValid.description === false) {
                    discError.innerHTML = "Description can be maximum 50 characters and cannot be empty";
                }
                else {
                    discError.innerHTML = "";
                }
                if (isValid.imageEdit === false) {
                    imageError.innerHTML = "Please attach a valid image file (jpg, jpeg, png, or gif) smaller than 1024KB";
                }
                else {
                    imageError.innerHTML = "";
                }
            }
        };
    }
}
