
const api = document.querySelector(".api");
const productsContainer = document.querySelector("#products");

api.innerHTML = "Loading...";

fetch("https://fakestoreapi.com/products")

.then(function(response) {
    return response.json();
})

.then(function(products) {

    api.innerHTML = "API data successfully loaded!";

    // Display first 5 products only
    products.slice(0, 5).forEach(function(product) {

        // Display all product titles in console
        console.log(product.title);

        // Create separate card
        const card = document.createElement("div");

        card.className = "card";

        card.innerHTML = `

            <!-- 1. Product title inside h1 -->
            <h1>${product.title}</h1>

            <!-- 2. Product ID and title inside h2 -->
            <h2>ID: ${product.id} - ${product.title}</h2>

            <!-- 3. First 30 characters of title -->
            <p>Short Title: ${product.title.slice(0, 30)}</p>

            <!-- 4. First 100 characters of description -->
            <p>${product.description.slice(0, 100)}</p>

            <!-- 5. Image inside a div -->
            <div>
                <img src="${product.image}" width="200px">
            </div>

            <!-- 6. Title, description and image inside one div -->
            <div>
                <h2>${product.title}</h2>
                <p>${product.description}</p>
                <img src="${product.image}" width="200px">
            </div>

            <!-- 7. Product price inside p -->
            <p>Price: $${product.price}</p>

            <!-- 8. Product category inside h3 -->
            <h3>${product.category}</h3>

            <!-- 9. Product title uppercase -->
            <p>${product.title.toUpperCase()}</p>

            <!-- 10. Title and character count -->
            <p>Title: ${product.title}</p>
            <p>Character Count: ${product.title.length}</p>

            <!-- 12. Product ID, title and price -->
            <p>ID: ${product.id}</p>
            <p>Title: ${product.title}</p>
            <p>Price: $${product.price}</p>

            <!-- 13. Image width 200px -->
            <img src="${product.image}" width="200px">

            <!-- 15. Description limited to 50 characters -->
            <p>${product.description.slice(0, 50)}</p>

            <!-- 16. Product title on webpage -->
            <p>Product Title: ${product.title}</p>

            <!-- 17. Title and category in same div -->
            <div>
                <h3>${product.title}</h3>
                <p>${product.category}</p>
            </div>

        `;

        // Add card to webpage
        productsContainer.appendChild(card);

    });

})

.catch(function(error) {

    api.innerHTML = `
        <p style="color: red;">
            Error: ${error.message}
        </p>
    `;

})

.finally(function() {

    // 20. Request completed message
    api.innerHTML += "<p>API request completed</p>";

});
