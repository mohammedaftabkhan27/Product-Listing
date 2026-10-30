const api = document.querySelector(".api");
const productsContainer = document.querySelector("#products");

api.innerHTML = "Loading...";

fetch("https://fakestoreapi.com/products")

.then(function(response){
    return response.json();
})

.then(function(products){
    api.innerHTML = "API data successfully loaded!";

    products.forEach(function(product){

        const card = document.createElement("div");

        card.className = "card";

        card.innerHTML = `<h2>Product ID:${product.id}</h2>
                         <h3>${product.title.slice(0,50)}</h3>
                         <p>Price :${product.price}</p>
                         <p>${product.description.slice(0,100)}</p>
                         <img src="${product.image}"width="200px">`;

                         productsContainer.appendChild(card);
    });
})

.catch(function(error){

    api.innerHTML = `<p style="color:red;">
                        Error:${error.message}
                        </p>`;
})

.finally(function(){

    api.innerHTML += "<p>API request completed</p>"
});