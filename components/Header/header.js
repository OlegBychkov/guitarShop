class Header{

    handlerOpenShoppingPage(){
        shoppingPage.render();
    }

    render(count){
        
        let htmlHeader = `<div class="header__container"> 
            <div class="header__counter" onclick="headerPage.handlerOpenShoppingPage();"> 💳 <span class="counter"> ${count} </span> </div>
        </div>`
        

        ROOT_HEADER.innerHTML = htmlHeader;
    }
}

const headerPage = new Header();


