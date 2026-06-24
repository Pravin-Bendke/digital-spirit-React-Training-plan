function checkAuth() {

    const token =
        localStorage.getItem("token");

    if (!token) {
        window.location.href =
            "login.html";
            alert("log in first and then access this page")
    }
}
checkAuth()
//Add Product Data :
async function addItem() {
    
    const productName = document.getElementById("productName").value;
    const Quantity    = document.getElementById("Quantity").value;
    const Price    = document.getElementById("Price").value;

    const products ={
        productName,Quantity,Price
    };
    let cart = JSON.parse(localStorage.getItem("cart"))||[];
    cart.push(products);

    localStorage.setItem("cart",JSON.stringify(cart));

    alert("Product Added Successfully")

    document.getElementById("productForm").reset();
    window.location.href = "products.html";
}

function productCartCount() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    document.getElementById("cartCount").innerText = cart.length;
}

async function displayProduct() {

    console.log("Display Function Called");
    
    let cart =JSON.parse(localStorage.getItem("cart"))||[];

    console.log(cart);
    
    const container = document.getElementById("productContainer")

    container.innerHTML="";
    cart.forEach((product,index) => {

        container.innerHTML+=`
        <div class="card">

            <h3>${product.productName}</h3>
        
            <p> Quantity : ${product.Quantity}</p>
        
            <p>Price :${product.Price}</p>
        
            <button onclick="AddToCart(${index})"> Add to Cart </button>
        
            <button onclick="removeProduct(${index})"> Remove </button>
        </div>
            `
    });
    productCartCount();
    
}
displayProduct();


function removeProduct(index) {
    let cart =
        JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1);
    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );
    displayProduct();
}



function AddToCart(index) {

    let products =
        JSON.parse(localStorage.getItem("products")) || [];

    let cart =
        JSON.parse(localStorage.getItem("cart")) || [];

    cart.push(products[index]);

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    productCartCount();

   
}


