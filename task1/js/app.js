// const data = localStorage.getItem('ronak') ? JSON.parse(localStorage.getItem('ronak')) : [];
// let productDetail = document.querySelector("#productForm");
// console.log(productDetail);
// let saveData =()=>{
//     let productName = document.getElementById('productName').value;
//     let categoryName = document.getElementById('categoryName').value;
//     let brand = document.getElementById('brand').value;
//     let modelName = document.getElementById('modelName').value;
//     let productImage = document.getElementById('productImage').value;
//     let price = document.getElementById('price').value;
//     let discount = document.getElementById('discount').value;
//     let ratting = document.getElementById('ratting').value;
//     let dealDay = document.getElementById('dealDay').value;
//     let color = document.getElementById('color').value;
//     let userPurchase = document.getElementById('userPurchase').value;
//     let discription = document.getElementById('discription').value;
//     data.push({productName,categoryName,brand,modelName,productImage,price,discount,ratting,dealDay,color,userPurchase,discription});
//     localStorage.setItem('ronak',JSON.stringify(data));

// };
// // console.log(saveData);
// let html = "";
// data.forEach((val)=>{
//     html += `<div class="col-6 mb-2">
//                 <div class="card">
//                 <h5 class="card-header">#${val.productName}</h5>
//                 <div class="card-body">
//                     <h5 class="card-title">Name : ${val.productName}</h5>
//                     <p class="card-text">Category : ${val.categoryName}</p>
//                     <p class="card-text">brand : ${val.brand}</p>
//                     <p class="card-text">modelName : ${val.modelName}</p>
//                     <p class="card-text">price : ${val.price}</p>
//                     <p class="card-text">discount : ${val.discount}</p>
//                     <p class="card-text">ratting : ${val.ratting}</p>
//                     <p class="card-text">dealDay : ${val.dealDay}</p>
//                     <p class="card-text">color : ${val.color}</p>
//                     <p class="card-text">userPurchase : ${val.userPurchase}</p>
//                     <p class="card-text">discription : ${val.discription}</p>
//                     <a href="#" class="btn btn-warning">Edit</a>
//                     <a href="#" class="btn btn-danger">Delete</a>
//                 </div>
//                 </div>
//             </div>`;
//     let demo = document.getElementById('demo');
//     demo.innerHTML = html;
//     // console.log(demo);
//     // let productname = val.productName;
//     // let categoryName = val.categoryName;
//     // let productnameshow = 

//     // console.log(categoryName);
// });


// //form data clear cancle click 

// let clearForm = () => {
//     document.getElementById("productForm").reset(); 
// }


let productForm = document.getElementById("productForm"),
imgInput = document.querySelector(".img"),
submitBtn = document.querySelector(".submit"),
productName = document.getElementById("productName"),
categoryName = document.getElementById("categoryName"),
brand = document.getElementById('brand'),
modelName = document.getElementById('modelName'),
productImage = document.getElementById('productImage'),
price = document.getElementById('price'),
discount = document.getElementById('discount'),
rating = document.getElementById('rating'),
dealDay = document.getElementById('dealDay'),
color = document.getElementById('color'),
userPurchase = document.getElementById('userPurchase'),
description = document.getElementById('description');
console.log(submitBtn);

let getData = localStorage.getItem('productDetail') ? JSON.parse(localStorage.getItem('productDetail')) : [];
let isEdit = false, editId;

productImage.onchange = () =>{
    if (productImage.files[0].size < 1000000 ) {
        var fileReader = new FileReader();
        fileReader.onload = (e) => {
            imgUrl = e.target.result;
            imageInput.src = imgUrl;
            
        }
        fileReader.readAsDataURL(productImage.files[0]);
    }else{
        alert("Image is too large ...!");
    }
}

productImage.onchange = () =>{
    if (productImage.files[0].size < 1000000 ) {
        var fileReader = new FileReader();
        fileReader.onload = (e) => {
            imgUrl = e.target.result;
            productImage.src = imgUrl; // Change imageInput to productImage
        }
        fileReader.readAsDataURL(productImage.files[0]);
    }else{
        alert("Image is too large ...!");
    }
}

productForm.addEventListener('submit',(e) =>{
    e.preventDefault();
    const information = {
        productImage : productImage.src == undefined ? "enter valid url" : productImage.src,
        productName : productName.value,
        categoryName : categoryName.value,
        brand : brand.value,
        modelName : modelName.value,
        price : price.value,
        discount : discount.value,
        rating : rating.value,
        dealDay : dealDay.value,
        color : color.value,
        userPurchase : userPurchase.value,
        description : description.value,

    }
    if(!isEdit){
        getData.push(information);
    }else{
        isEdit = false;
        getData[editId] = information;
    }
    localStorage.setItem('productDetail',JSON.stringify(getData));
});