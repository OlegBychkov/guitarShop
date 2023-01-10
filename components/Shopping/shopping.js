class Shopping{

    hendlerCloseShoppingPage(){
        ROOT_SHOPPING.innerHTML = '';
    }


    render(){
        const productsStroe = localStorageUtil.getProducts();
        let htmlCatalog = '';
        let sum = 0;

        CATALOG.forEach(({id, name, price}) => {
            
            if(productsStroe.indexOf(id) !== -1){
                sum += price;
                htmlCatalog += `
                <tr> 
                   <td class="shopping__elem__name">⚡️ ${name} </td>
                   <td class="shopping__elem__price"> ${price.toLocaleString()} USD </td>
                </tr>`
            }     
        });
        let htmlShopping = `
            <div class="shopping__container">
                <div class="shopping__close" onclick="shoppingPage.hendlerCloseShoppingPage()"> 
                    <span> </span>
                    <span> </span>
                </div>
                <table>
                    ${htmlCatalog}
                    <tr> 
                        <td class="shopping__elem__name">💰 СУММА: </td>
                        <td class="shopping__elem__price">  ${sum.toLocaleString()} USD </td>
                    </tr>
                </table>
            </div>     
        `;

        ROOT_SHOPPING.innerHTML = htmlShopping;
    }



}

const shoppingPage = new Shopping();