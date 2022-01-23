const accordeon = () => {
    //получаем со страницы элементы списка
    const charItem = document.querySelectorAll('.characteristics__item');
    charItem.forEach((item) => {
        const charButton = item.querySelector('.characteristics__title');
        const charContent = item.querySelector('.characteristics__description');
        //обработчик события на клик по разделу меню
        charButton.addEventListener('click', () => {
            //Авто-закрытие открытых табов
            const closeContent = () => {
                const activeButton = document.querySelector('.characteristics__title.active');
                const openContent = document.querySelector('.characteristics__description.open');
                if (activeButton) {
                    activeButton.classList.remove('active');
                }
                if (openContent) {
                    openContent.classList.remove('open');
                    openContent.style.height = '';
                }
            };
            closeContent();
            //проверка открыт или закрыт блок при клике
            if (charContent.classList.contains('open')) {
                //закрытие блока
                //charContent.classList.remove('open');
                charContent.style.height = '';
            } else {
                //открытие блока
                //charContent.classList.add('open');
                //по свойству charContent.scrollHeight определяем размер выпадающего меню
                //и задаём его значение как высоту блока
                charContent.style.height = charContent.scrollHeight + 'px';
            }
            //открытие-закрытие  блока
            charButton.classList.toggle('active');
            charContent.classList.toggle('open');
        });
    });
};
accordeon();