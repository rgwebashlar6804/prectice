"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validationForm = void 0;
const script_1 = require("./script");
// selection elements end
function validationForm() {
    const name = script_1.nameInput.value.trim();
    const category = script_1.categoryInput.value.trim();
    const price = Number(script_1.priceInput.value.trim());
    const color = script_1.colorInput.value.trim();
    if (name === "") {
        script_1.nameError.innerHTML = "Please enter your name";
        // return false;
    }
    else {
        script_1.nameError.innerHTML = "";
    }
    if (category === "") {
        script_1.categoryError.innerHTML = " Please enter your Category";
        // return false;
    }
    else {
        script_1.categoryError.innerHTML = "";
    }
    if (isNaN(price) || price === 0) {
        script_1.priceError.innerHTML = " Please enter a valid price number that not start with zero";
        // return false;
    }
    else {
        script_1.priceError.innerHTML = "";
    }
    if (color === "") {
        script_1.colorError.innerHTML = " Please enter your color";
        // return false;
    }
    else {
        script_1.colorError.innerHTML = "";
    }
    // Validate description input
    if (script_1.descriptionInput.value.length > 10000) {
        script_1.discError.innerHTML = " Description can be maximum 50 characters";
        // return false;
    }
    else if (script_1.descriptionInput.value == "") {
        script_1.discError.innerHTML = " Please enter the Discription";
        // return false;
    }
    else {
        script_1.discError.innerHTML = "";
    }
    // const imageFilesLength: number = image.files ? image.files.length : 0;
    // if (imageFilesLength) {
    //     imageError.innerHTML = " Please attach an image";
    //     return false;
    // } else {
    //     imageError.innerHTML = ""
    // }
    const allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
    if (!script_1.image.files || script_1.image.files.length === 0 || !allowedExtensions.test(script_1.image.files[0].name)) {
        script_1.imageError.innerHTML = "Please attach a valid image file (jpg, jpeg, png, or gif)";
        script_1.image.value = ""; // Clear the input field
        // return false;
    }
    else {
        script_1.imageError.innerHTML = "";
    }
    let fileSize = script_1.image.files[0].size / 1024; // in KB
    if (fileSize > 1024) {
        script_1.imageError.innerHTML = " Please attach an image that is smaller than 1024KB";
        script_1.image.value = "";
        // return false;
    }
    else {
        script_1.imageError.innerHTML = "";
    }
    return true;
}
exports.validationForm = validationForm;
