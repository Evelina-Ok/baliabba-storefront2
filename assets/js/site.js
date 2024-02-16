

const myFeaturedElement = document.getElementById('featuredProducts');
const myNavigation = document.getElementById('navigation');


// Make a variable "myProducts" to save all products data later and not call it every time
// Set "null" because "myProducts" has no data right now and without null, there will be more errors later when we work wth data
let myProducts = null

getProductData();
getCategoryData();


// Create function that receives data from the database:
function getProductData(){
    // Fetch the database:
    fetch('https://dummyjson.com/products?limit=100')


    // Convert fetched data to the usable JSON format:
    .then((response) => {
        return response.json()
    })
    // Send converted to JSON format data to  the function receiveProductData:
    .then(json => receiveProductData(json))
}








// controller code---------------------------

function receivedProductsByCategory(productData) {
    console.log(productData)
    let myProductArray = 
    createProductView(productData.products)
}



// Create a function that picks 3 featured products for landing page:
function receiveProductData(productData){

    // Create a variable for all 30 products the database holds:
    myProducts = productData.products;

    // Create a variable that becomes an empty array for adding the 3 products:
    let myFeaturedProducts = [];

    // Push 3 chosen products to the empty array "myFeaturedProducts" out of 30 products available in database:
    myFeaturedProducts.push(myProducts[2], myProducts[11], myProducts[27]);

    console.log(myFeaturedProducts);

    createProductView(myFeaturedProducts)
}



function getProductsByCategory(myCategoryURL) {
    fetch(myCategoryURL)
        .then((result) => {
            return result(json)
        })
        .then((json) => {
            productReceived(json)
        });
}   



function getCategoryData(){
    fetch('https://dummyjson.com/products/categories')
    .then((response) => {
        return response.json()
    })
    .then (json =>receiveCategoryData(json))
}


// After translating data to JSON format, we send it further and now naming it "categoryData"
function receiveCategoryData(categoryData){
    createNavBar(categoryData)
}


// `these are for template string use`

function createNavBar(myCategories) {
    let myNavHTML = `<button onclick = "navCallBack('all')">ALL</button>`

    myCategories.forEach(categoryName => {
        console.log(categoryName);
        
        myNavHTML += `button onclick="navCallBack('${categoryName}')">${categoryName}<button>`
    })
    navElement.innerHTM = myHTML
}



function navCallBack(categoryName) {
    console.log(categoryName);

    // let myCategoryProducts = []
    
    // myProducts.forEach(product => {
    //     if (product.category == categoryName) {
    //         mySelectedProducts.push(product)  
    //     }

    if (categoryName = "all") {
        createProductView(myProducts)
    }


    let mySelectedProducts = []

    myProducts.forEach(product => {
        console.log(product.category);

        if (categoryName == product.category) {
            console.log(product)
            mySelectedProducts.push(product)        
        }

    })
    console.log(mySelectedProducts)
    createProductView(mySelectedProducts)
}
    // let myCategoryURL = `https://dummyjson.com/products/categories/$(categoryName)`
    // getproductsByCategory(myCategoryURL)




function createProductView(myCards) {
    clearApp()
    myCards.forEach(product => {
        console.log(product);

        let myHTML = `<figure onclick="ProductCallback(${product.id})" ><h2>${product.title}</h2><img src="${product.thumbnail}"><h3>PRIS: ${product.price} rabat: ${product.discountPercentage}</h3><figure>`

        myFeaturedElement.innerHTML += myHTML
    })
}

function clearApp() {
    myFeaturedElement.innerHTML = ''
}





function productCallBack(myID) {
    console.log(myID);
    let myClickedProduct = null
}

