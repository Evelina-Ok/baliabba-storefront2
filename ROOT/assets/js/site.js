getProductsData();

// Create function that receives data from the database:
function getProductsData(){
    // Fetch the database:
    fetch('https://dummyjson.com/products')

    // Convert fetched data to the usable JSON format:
    .then(response => response.json())

    // Send converted to JSON format data to  the function receiveProductData:
    .then(json => receiveProductData)
}


// Create a function that picks 3 featured products for landing page:
function receiveProductData(productData){

    // Create a variable for all 30 products the database holds:
    let products = productData.products;

    // Create a variable that becomes an empty array for adding the 3 products:
    let productList = [];

    // Push 3 chosen products to the empty array "productList" out of 30 products available in database:
    productList.push(products[2], products[11], products[27]);

    console.log(productList);
}