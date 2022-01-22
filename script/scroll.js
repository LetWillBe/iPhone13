const scrollFunc = () => {
    /*получаем псевдомассив со ссылками из нав-меню*/
    const links = document.querySelectorAll('.header-menu__item a');

    /*ДЗ1 - ссылка на хар-ки*/
    const characteristics = document.querySelector('.card-details__link-characteristics');

    //ДЗ1- Массив со ссылками из навигации и ссылка на хар-ки
    const newarray = [...links, characteristics];

    /*Вызов полифила для поддержки кроссбарузерности(Сафари)*/
    seamless.polyfill();

    /*Перебираем псевдомассив*/
    newarray.forEach((element) => {
        /*вешаем обработчик события на клик по ссылке в нав-меню*/
        element.addEventListener('click', (event) => {
            /*отключаем действие по умолчанию на клик*/
            event.preventDefault();
            /*получаем id*/
            const id = element.getAttribute('href').substring(1);
            /*по полученному id получаем целевую область документа*/
            const section = document.getElementById(id);
            /*Проверка на наличие целевой области (id !== '#')*/
            if (section) {
                /*Скролл с помощью scrollIntoView (не работает в Сафари)*/
                section.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            } else {
                /*Скролл с помощью полифила*/
                seamless.elementScrollIntoView(document.querySelector("#characteristics"), {
                    behavior: "smooth",
                    block: "center",
                    inline: "center",
                });
            }
        });
    });
};

scrollFunc();

/*ДЗ1*/
/*получаем область документа по селектору*/
//const characteristics = document.querySelector('.card-details__link-characteristics');
/*вешаем на область обработчик события по клику*/
//characteristics.addEventListener('click', (event) => {
/*отключаем действие по умолчанию на событие*/
//event.preventDefault();
/*получаем id целевой области*/
//const id = characteristics.getAttribute('href').substring(1);
/*получаем саму целевую область из документа*/
//const target = document.getElementById(id);
/*скролл к целевой области с помощью полифила и проверкой на id !== '#'(мало ли что)*/
//    if (target) {
//        seamless.elementScrollIntoView(target, {
//            behavior: 'smooth',
//            block: 'start'
//        });
//    } else {
//        seamless.elementScrollIntoView(document.querySelector("#characteristics"), {
//            behavior: "smooth",
//            block: "center",
//            inline: "center",
//        });
//    }
//});