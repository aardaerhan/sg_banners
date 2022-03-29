async function getData() {
    let url = "./db/product-list.json";
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

async function renderDataSpecial() {
    var products = await getData();
    var html = '';
    const special = Object.entries(products.responses[0][0].params.recommendedProducts)[0][1];
    special.map(item => {
        var htmlSegment = `<div class="product-list">
        <div class="product">
    <img src=${item.image} class="product-img" loading="lazy"></img>
    <h3 class="title">${item.name}</h3>
    <h4 class="price">${item.priceText}</h4>
    <p>${item.params.shippingFee === "FREE" ? "Ücretsiz Kargo" : ""}</p>
    <button class="add-to-basket">Sepete Ekle</button>
    </div>
    </div>
`;

        html += htmlSegment;
    })
    var container = document.querySelector('.container');
    container.innerHTML = html;

}

renderDataSpecial();

async function renderDataRepair() {
    var products = await getData();
    var html = '';
    const special = Object.entries(products.responses[0][0].params.recommendedProducts)[1][1];
    special.map(item => {
        var htmlSegment = `<div class="product-list">
    <div class="product">
    <img src=${item.image} class="product-img" loading="lazy"></img>
    <h3 class="title">${item.name}</h3>
    <h4 class="price">${item.priceText}</h4>
    <p>${item.params.shippingFee === "FREE" ? "Ücretsiz Kargo" : ""}</p>
    <button class="add-to-basket">Sepete Ekle</button>
    </div>
    </div> `;

        html += htmlSegment;
    })
    var container = document.querySelector('.container');
    container.innerHTML = html;

}

async function renderDataFurniture() {
    var products = await getData();
    var html = '';
    const special = Object.entries(products.responses[0][0].params.recommendedProducts)[2][1];
    special.map(item => {
        var htmlSegment = `<div class="product-list">
        <div class="product">
        <img src=${item.image} class="product-img" loading="lazy"></img>
        <h3 class="title">${item.name}</h3>
        <h4 class="price">${item.priceText}</h4>
        <p>${item.params.shippingFee === "FREE" ? "Ücretsiz Kargo" : ""}</p>
        <button class="add-to-basket">Sepete Ekle</button>
        </div>
        </div> `;

        html += htmlSegment;
    })
    var container = document.querySelector('.container');
    container.innerHTML = html;
}

async function renderDataMedical() {
    var products = await getData();
    var html = '';
    const special = Object.entries(products.responses[0][0].params.recommendedProducts)[3][1];
    special.map(item => {
        var htmlSegment = `<div class="product-list">
        <div class="product">
        <img src=${item.image} class="product-img" loading="lazy"></img>
        <h3 class="title">${item.name}</h3>
        <h4 class="price">${item.priceText}</h4>
        <p>${item.params.shippingFee === "FREE" ? "Ücretsiz Kargo" : ""}</p>
        <button class="add-to-basket">Sepete Ekle</button>
        </div>
        </div> `;

        html += htmlSegment;
    })
    var container = document.querySelector('.container');
    container.innerHTML = html;
}

async function renderDataTechnology() {
    var products = await getData();
    var html = '';
    const special = Object.entries(products.responses[0][0].params.recommendedProducts)[4][1];
    special.map(item => {
        var htmlSegment = `<div class="product-list">
        <div class="product">
        <img src=${item.image} class="product-img" loading="lazy"></img>
        <h3 class="title">${item.name}</h3>
        <h4 class="price">${item.priceText}</h4>
        <p>${item.params.shippingFee === "FREE" ? "Ücretsiz Kargo" : ""}</p>
        <button class="add-to-basket">Sepete Ekle</button>
        </div>
        </div> `;

        html += htmlSegment;
    })
    var container = document.querySelector('.container');
    container.innerHTML = html;
}

async function renderDataSystem() {
    var products = await getData();
    var html = '';
    const special = Object.entries(products.responses[0][0].params.recommendedProducts)[5][1];
    special.map(item => {
        var htmlSegment = `<div class="product-list">
        <div class="product">
        <img src=${item.image} class="product-img" loading="lazy"></img>
        <h3 class="title">${item.name}</h3>
        <h4 class="price">${item.priceText}</h4>
        <p>${item.params.shippingFee === "FREE" ? "Ücretsiz Kargo" : ""}</p>
        <button class="add-to-basket">Sepete Ekle</button>
        </div>
        </div> `;

        html += htmlSegment;
    })
    var container = document.querySelector('.container');
    container.innerHTML = html;
}