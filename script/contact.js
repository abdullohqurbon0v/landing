document.addEventListener('DOMContentLoaded', function () {
    const registrationForm = document.querySelector('.registration-form');

    if (registrationForm) {
        registrationForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const formData = new FormData(registrationForm);
            const formObject = {};
            formData.forEach((value, key) => {
                formObject[key] = value;
            });
            console.log('Форма отправлена:', formObject);
            alert('Ваша заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.');
            registrationForm.reset();
        });
    }
    console.log('Карта может быть инициализирована здесь');
});
