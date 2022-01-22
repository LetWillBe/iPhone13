const tabsFunc = () => {
    // Поля с характеристиками (табы)
    const tabs = document.querySelectorAll('.card-detail__change');
    //Заголовок табов
    const tabsTitle = document.querySelector('.card-details__title');
    //Цена
    const tabsPrice = document.querySelector('.card-details__price');
    //картинка
    const tabsImage = document.querySelector('.card__image_item');
    //тектовый конент табов
    const tabsOptions = [{
            name: 'Graphite',
            memory: '128',
            price: '59900',
            image: 'img/iPhone-graphite.webp'
        },
        {
            name: 'Silver',
            memory: '256',
            price: '79990',
            image: 'img/iPhone-silver.webp'
        },
        {
            name: 'Sierra Blue',
            memory: '512',
            price: '99999',
            image: 'img/iPhone-sierra_blue.webp'
        }
    ];

    //ф-ция смены текстового контента таба
    //index - идентификатор таба
    const changeContent = (index) => {
        tabsTitle.textContent = `Смартфон Apple iPhone 13 Pro ${tabsOptions[index].memory}GB ${tabsOptions[index].name}`;
        tabsPrice.textContent = `${tabsOptions[index].price}₽`;
        tabsImage.setAttribute('src', tabsOptions[index].image);

        //Домашнее Задание №2
        //v1
        //const tabBrowser = document.querySelector('title');
        //tabBrowser.textContent = tabsOptions[index].name;
        //v2
        document.title = tabsOptions[index].name;
    };

    //функция на смену активного таба
    const changeActiveTabs = (indexClickedTab) => {
        tabs.forEach((tab, index) => {
            //убираем class = 'active' у всех табов
            tab.classList.remove('active');
            //добавляем active элементу по которому будет сделан click
            if (index == indexClickedTab) {
                tab.classList.add('active');
            }
        });
        //смена текста в заголовке у таба
        changeContent(indexClickedTab);
    };

    //перебор массива с табами
    tabs.forEach((tab, index) => {
        //обработчик события на клик по табу
        tab.addEventListener('click', () => {
            //добавляем табу active по событию click
            changeActiveTabs(index);
        });
    });

    //По умолчанию в табах выводится информация о первой модели, вместо той что в верстке
    changeContent(0);
};

tabsFunc();