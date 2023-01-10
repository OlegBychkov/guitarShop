function render(){

    const productsCounter = localStorageUtil.getProducts();

    headerPage.render(productsCounter.length);
    productsPage.render();
}

preloaderPage.render();

let CATALOG = [];
   
// https://api.jsonserve.com/bNWGAm
// server/catalog.json

fetch('https://api.jsonserve.com/bNWGAm')
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