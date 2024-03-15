let form = document.getElementById('productForm');
let productImage = document.querySelector(".img");
let file = document.getElementById("productImage");
let productName = document.getElementById('productName');
let categoryName = document.getElementById('categoryName');
let brand = document.getElementById('brand');
let price = document.getElementById('price');
let discription = document.getElementById('discription');
let submitBtn = document.querySelector(".submit");
let modal = document.getElementById("productDetail");
let modalTitle = document.querySelector("#productDetail .modal-title");
let newProductBtn = document.querySelector(".newproduct");
// console.log(submitBtn);
let productInfo = document.getElementById("productInfo");

let getData = localStorage.getItem('productInformation') ? JSON.parse(localStorage.getItem('productInformation')) : [] ;
console.log(getData);
let isEdit = false, editId
// showInfo();

newProductBtn.addEventListener('click',()=>{
    submitBtn.innerText = 'Submit',
    modalTitle.innerText = "Fill the Form",
    isEdit = false,
    productImage.src = "profile.webp",
    form.reset()
})

file.onchange = () =>{
    if (file.files[0].size < 1000000) {
        var fileReader = new FileReader;
        
        fileReader.onload = (e) =>{
            imgUrl = e.target.result;
            productImage.src = imgUrl;
        }
        fileReader.readAsDataURL(file.files[0]) 
    }else{
        alert("This file is too large!")
    }
}

//show info
function showInfo(){
    document.querySelectorAll('.productDetails').forEach(info => info.remove());
    getData.forEach((val, index) => {
        let createElement = `        
        <div class="col-6 mb-2 productDetails">
                <div class="card">
                <h5 class="card-header">#${index + 1} ${val.product_Name}</h5>
                <div class="card-body">
                    <h5 class="card-title">Name : ${val.product_Name}</h5>
                    <img src="${val.picture}" alt="" width="50" height="50">
                    <p class="card-text">Category : ${val.product_categoryName}</p>
                    <p class="card-text">brand : ${val.product_brand}</p>
                    <p class="card-text">price : ${val.product_price}</p>
                    <p class="card-text">discription : ${val.product_discription}</p>

                    <button class="btn btn-success" onclick="readInfo('${val.picture}', '${val.product_Name}', '${val.product_categoryName}', '${val.product_brand}', '${val.product_price}', '${val.product_discription}')" data-bs-toggle="modal" data-bs-target="#readData"><i class="bi bi-eye">View</i></button>
                    <button class="btn btn-primary" onclick="editInfo('${index}','${val.picture}', '${val.product_Name}', '${val.product_categoryName}', '${val.product_brand}', '${val.product_price}', '${val.product_discription}')" data-bs-toggle="modal" data-bs-target="#productDetail"><i class="bi bi-pencil-square">Edit</i></button>
                    <button class="btn btn-danger" onclick="deleteInfo(${index})"><i class="bi bi-trash">Delete</i></button>
                </div>
                </div>
            </div>
        `

        productInfo.innerHTML += createElement;
    })
}
showInfo()


//delete data
function deleteInfo(index){
    if(confirm("Are you sure want to delete?")){
        getData.splice(index, 1)
        localStorage.setItem("productInformation", JSON.stringify(getData))
        showInfo()
    }
}


//add data 

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const information = {
        picture : productImage.src == undefined ? "alert('image is not valid')" : productImage.src,
        product_Name : productName.value,
        product_categoryName : categoryName.value,
        product_brand : brand.value,
        product_price : price.value,
        product_discription : discription.value
    }
    if(!isEdit){
        getData.push(information)
    }
    else{
        isEdit = false
        getData[editId] = information;
    }
    localStorage.setItem('productInformation', JSON.stringify(getData));
    submitBtn.innerText = "Submit"
    modalTitle.innerHTML = "Fill The Form"
    showInfo()
    form.reset()
    productImage.src = "profile.webp"

    let bootstrapModal = bootstrap.Modal.getInstance(modal);
    if (bootstrapModal) {
        bootstrapModal.hide();
    }
})



//clear form

let clearForm = () => {
    document.getElementById("productForm").reset(); 
}

//readInfo(view feature)

let readInfo = (pic, name, category,brand,price,details) => {
    document.querySelector('.showImg').src = pic,
    document.querySelector('#showName').value = name,
    document.querySelector("#showCategory").value = category,
    document.querySelector("#showbrand").value = brand,
    document.querySelector("#showprice").value = price,
    document.querySelector("#showdiscription").value = details
}

//edit feature 

let editInfo = (index, pic, name, category,brnd,prs,details) => {
    
    isEdit = true

    editId = index
    // productImage.src = pic
    productName.value = name
    categoryName.value = category
    brand.value =brnd
    price.value = prs,
    discription.value = details,

    submitBtn.innerText = "Update"
    modalTitle.innerText = "Update The Form"
}
