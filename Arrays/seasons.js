function seasons(month) {
    let winter = ['Декабрь', 'Январь', 'Февраль'];
    let spring = ['Март', 'Апрель', 'Май'];
    let summer = ['Июнь', 'Июль', 'Август'];
    let autumn = ['Сентябрь', 'Октябрь', 'Ноябрь'];

    for (let index = 0; index < 3; index++) {
        const winterElement = winter[index]
        const springElement = spring[index]
        const summerElement = summer[index]
        const autumnElement = autumn[index];
        if (month == winterElement) {
            console.log('Зима');
        }

        else if (month == springElement) {
            console.log('Весна');
        }

        else if (month == summerElement) {
            console.log('Лето');
        }

        else if (month == autumnElement) {
            console.log('Осень')
        }
    }
}
seasons('Июль')


// Функция, которая по месяцу будет определять время года ✓
// То же самое с использованием switch
// То же самое с использованием объекта