getProductData();

// Create function that receives data from the database:
function getProductData(){
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
    let myFeaturedProducts = [];

    // Push 3 chosen products to the empty array "myFeaturedProducts" out of 30 products available in database:
    myFeaturedProducts.push(products[2], products[11], products[27]);

    console.log(myFeaturedProducts);

    createProductView(myFeaturedProducts)
}

function createProductView(myCards) {

    myCards.forEach(product => {
        console.log(product);

        let myHTML = `<figure onclick="ProductCallback(${product.id})" ><h2>${product.title}</h2><img src="${product.thumbnail}"><h3>PRIS: ${product.price} rabat: ${product.discountPercentage}</h3><figure>`

        myFeaturedElement.innerHTML += myHTML
    })
}

