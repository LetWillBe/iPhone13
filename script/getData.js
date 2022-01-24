const getData = () => {
    //получаем карточки товара
    const list = document.querySelector('.cross-sell__list');
    //кнопка
    const btn = document.querySelector('.cross-sell__add');
    //количество карточек товара в группе
    let stack = 4;
    //счётчик групп товаров
    let count = 1;

    const render = (data) => {
        //очищаем карточки товара
        list.innerHTML = '';
        //отрисовка карточек товара
        data.forEach(item => {
            list.insertAdjacentHTML('beforeend', `
                <li>
                    <article class="cross-sell__item">
                        <img class="cross-sell__image" src="./${item.photo}" alt="${item.id}">
                        <h3 class="cross-sell__title">${item.name}</h3>
                        <p class="cross-sell__price">${item.price}₽</p>
                        <button type="button" class="button button_buy cross-sell__button">Купить</button>
                    </article>
                </li>
                    `);
        });
    };

    //выбираем из массива data нужное количество товаров
    const sliceArray = (data, index) => {
        return data.slice(0, index);
    };
    //делим массив data на группы
    const changeData = (data) => {
        //определяем размер стека показываемых товаров
        const newStack = stack * count;
        //массив со стеком товаров
        render(sliceArray(data, newStack));
        //проверка: если в data ещё остаются товары - кнопка не убирается
        if (data.length > newStack) {
            count++;
        } else {
            //убираем кнопку
            btn.style.display = 'none';
        }
    };

    const getGoods = () => {
        //получаем данные из json
        fetch('../cross-sell-dbase/dbase.json')
            //обработка запроса
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Данные получены с ошибкой!');
                }
            })
            //отправка массива data в функцию changeData
            .then((data) => {
                changeData(data);
            })
            .catch((error) => {
                console.error(error.message);
            });
    };
    //обработчик события на кнопку "Показать ещё"
    btn.addEventListener('click', getGoods);

    getGoods();
};
getData();