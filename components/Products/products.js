class Products {
    constructor(){
        this.classNameActive = 'products-item__btn_active';
        this.lableAdd = 'add to basket';
        this.lableRemove = 'remove to basket';
    }

    handleSetLocationStorage(element, id) {
        const {pushProduct, products} = localStorageUtil.putProducts(id)
    
        if(pushProduct){
            element.classList.add(this.classNameActive);
            element.innerHTML = this.lableRemove;
        }else{
            element.classList.remove(this.classNameActive);
            element.innerHTML = this.lableAdd;
        }

        headerPage.render(products.length)
    }

    render() {
        const productsStroe = localStorageUtil.getProducts();
        let htmlCatalog = '';

        CATALOG.forEach(({id, name, price, img}) => {
            let activeClass = '';
            let activeText = '';

            if(productsStroe.indexOf(id) === -1 ){
                activeText = this.lableAdd;
            }else{
                activeText = this.lableRemove;
                activeClass = ' ' + this.classNameActive;
            }

            htmlCatalog += `
                <li class="products-item"> 
                    <span class="products-item__name"> ${name} </span>
                    <img class="products-item__img" src="${img}"/> 
                    <span class="products-item__price" > ⚡️ ${price.toLocaleString()} USD </span>
                    <button class="products-item__btn${activeClass}" onclick="productsPage.handleSetLocationStorage(this, '${id}')"> ${activeText} </button>
                </li>
            `;
        });

        const  html = `
            <ul class="products-list"> ${htmlCatalog} </ul>
        `;

        ROOT_PRODUCTS.innerHTML = html;
    }   
}

const productsPage = new Products();
