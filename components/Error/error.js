class Error{
    render(){
        const htmlError = `<div class="error__container">
            <h2 class="error__title"> Нет доступа!  😔 </h2>
            <p class="error__text"> Доступ будет восстановлен позже.</p>
        </div> `

        ROOT_ERROR.innerHTML = htmlError; 
    }
}

const errorPage = new Error();
