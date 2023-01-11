function render(){

    const productsCounter = localStorageUtil.getProducts();

    headerPage.render(productsCounter.length);
    productsPage.render();
}

preloaderPage.render();

let CATALOG = [];
   
// https://api.jsonserve.com/bNWGAm
// server/catalog.json

fetch('https://gist.githubusercontent.com/OlegBychkov/9da6cb46fbbab98b4fd55270f3c949b3/raw/dc9aa4ed154a086a74db6f1b6eb1fe6a7fd818bc/guitar-shop.json')
    .then(res => res.json())
    .then(body => {
        CATALOG = body; 

        // preloaderPage.handlerClearPreloader()
        // render();  
        
        setTimeout(()=> {
            preloaderPage.handlerClearPreloader()
            render();  
        },1000);

    })
    .catch(error => {
        preloaderPage.handlerClearPreloader()
        errorPage.render();
    })
