function render(){

    const productsCounter = localStorageUtil.getProducts();

    headerPage.render(productsCounter.length);
    productsPage.render();
}

let CATALOG = [];
   
// https://api.jsonserve.com/bNWGAm
// server/catalog.json

fetch('server/catalog.json')
    .then(res => res.json())
    .then(body => {
            CATALOG = body;
            render();
    })
    .catch(error => {
        console.log(error)
    })