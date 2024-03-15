const productInfo = {
    name : "Parket Jotter Standard CT Ball Pen",
    color : "Black",
    ratting : 4,
    image : "./images/image1.png",
    price : 270,
    MRP : 285,
    discount : 5,
    deal : "deal of the day",
    userPurchase : 7002
}
console.log(productInfo);
console.log("Product Name :" + productInfo["name"]);
console.log(productInfo["image"]);
console.log(typeof(productInfo));




//instagram profile

const instaProfile = {
    userName : "Ronak gadhiya",
    idName : "ronakgadhiya",
    idThread : "@rgadhiya",
    profile : "./images/photo.png",
    blueTick : true,
    isFollow : true,
    posts : 195,
    followers : 569000,
    following : 4,
    type : "Entrepreneur",
    bio : "code with Ronak || Ex-Google, DRDO"
}

console.log(instaProfile);
console.log(typeof(instaProfile));
console.log(typeof(instaProfile["userName"]));