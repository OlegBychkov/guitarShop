class Preloader {
    handlerClearPreloader(){
        ROOT_PRELOADER.innerHTML =  '';
    }
    

    render(){
        let htmlPreloader = `
            <div class="preloader__container"> 
                <img class="preloader__img" src="components/Preloader/img/preloader.svg" />
            <div>
        `;   

        ROOT_PRELOADER.innerHTML = htmlPreloader;
    }
}

const preloaderPage = new Preloader();

