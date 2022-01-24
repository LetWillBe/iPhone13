const sendFrom = () => {
    const btnOpenModal = document.querySelector('.card-details__button_delivery');
    const modal = document.querySelector('.modal');
    const cardDetailsTitle = document.querySelector('.card-details__title');
    const modalTitle = modal.querySelector('.modal__title');
    const modalClose = modal.querySelector('.modal__close');
    const modalForm = modal.querySelector('form');

    //открытие модального окна
    btnOpenModal.addEventListener('click', () => {
        //делаем видимым модальное окно
        modal.style.display = 'flex';
        //меняем заголовок модального окна
        modalTitle.textContent = cardDetailsTitle.textContent;
    });
    //кнопка закрытия модального окна
    modalClose.addEventListener('click', () => {
        modal.style.display = 'none';
    });
    //обработчик события на кнопку отправки формы
    modalForm.addEventListener('submit', (event) => {
        const spanClear = () => {
            labels.forEach((label) => {
                const span = label.querySelector("span");

                span.textContent = "";
            });
        };
        //очищаем действие по умолчанию
        event.preventDefault();
        //находим три поля формы
        const labels = modal.querySelectorAll('.modal_label');

        const sendMesage = {};

        //заполняем три поля формы (Куда, кому, телефон)
        labels.forEach(label => {
            const span = label.querySelector('span');
            const input = label.querySelector('input');
            sendMesage[span.textContent] = input.value;
        });
        //POST-запрос
        fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify(sendMesage),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
            .then(() => {
                console.log('Отправлено!');
                //Очистка формы и закрытие окна
                event.target.reset();
                modal.style.display = 'none';
            });
    });
};
sendFrom();