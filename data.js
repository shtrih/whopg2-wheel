function array_unique(value, index, self) {
    return self.indexOf(value) === index;
}

const subSets = {
    items: {
        ['Уровень 1']: {
            ['Голова']: [
                {
                    title: 'Кастомная маска',
                    image: '/hat/1.png'
                },
                {
                    title: 'Парик профессора',
                    image: '/hat/2.png'
                },
                {
                    title: 'Противогаз без фильтра',
                    image: '/hat/3.png'
                },
                {
                    title: 'Очки пофигиста',
                    image: '/hat/4.png'
                },
                {
                    title: 'Маска с экраном',
                    image: '/hat/5.png'
                },
                {
                    title: 'Балаклава с защитным стеклом',
                    image: '/hat/6.png'
                },
                {
                    title: 'Нейролептический дыхательный аппарат',
                    image: '/hat/7.png'
                },
                {
                    title: 'Очки просвечивающие одежду',
                    image: '/hat/8.png'
                },
                {
                    title: 'Бейсболка "Bubba Gump"',
                    image: '/hat/9.png'
                },
                {
                    title: 'Военная маска от "Кибердайн Систем"',
                    image: '/hat/10.png'
                },
            ],
            ['Тело']: [
                {title: 'Толстовка "Твич-сити"', image: '/body/31.png'},
                {title: 'Майка в сеточку', image: '/body/32.png'},
                {title: 'Поношенный плащ', image: '/body/33.png'},
                {title: 'Малиновый пиджак', image: '/body/34.png'},
                {title: 'Куртка с твердым воротником', image: '/body/35.png'},
                {title: 'Экзоскелет с моторчиком', image: '/body/36.png'},
                {title: 'Красная потертая куртка с синими вставками', image: '/body/37.png'},
                {title: 'Странный халат инженера', image: '/body/38.png'},
                {title: 'Бомбер "I hate Twitch City"', image: '/body/39.png'},
                {title: 'Костюм-двойка', image: '/body/40.png'},
            ],
            ['Оружие']: [],
            ['Ноги']: [],
            ['Аксессуар']: [],
        },
        ['Уровень 2']: {
            ['Голова']: [
                {title: '"Череп" робота-сутенёра', image: '/hat/11.png'},
                {title: 'Очки лёгкости «EZ-01»', image: '/hat/12.png'},
                {title: 'Маска Анимешника', image: '/hat/13.png'},
                {title: 'Боевой респиратор', image: '/hat/14.png'},
                {title: 'Лыжная маска внутренней циркуляции', image: '/hat/15.png'},
                {title: 'Красные линзы', image: '/hat/16.png'},
                {title: 'Светящийся Oni-респиратор', image: '/hat/17.png'},
                {title: 'Комплект монокля и накладных усов', image: '/hat/18.png'},
                {title: 'Поддельный нимб', image: '/hat/19.png'},
                {title: 'Мотоциклетный шлем', image: '/hat/20.png'},
            ],
            ['Тело']: [
                {title: 'Противокислотный костюм', image: '/body/41.png'},
                {title: 'Белый плащ со вставками', image: '/body/42.png'},
                {title: 'Нагрудник портативной зарядки', image: '/body/43.png'},
                {title: 'Бомбер с узором', image: '/body/44.png'},
                {title: 'Магнитный нагрудник', image: '/body/45.png'},
                {title: 'Кимоно киберсамурая', image: '/body/46.png'},
                {title: 'Желтый комбез', image: '/body/47.png'},
                {title: 'Бронежилет', image: '/body/48.png'},
                {title: 'Облегающая безрукавка', image: '/body/49.png'},
                {title: 'Спортивная ветровка свободного кроя', image: '/body/50.png'},
            ],
            ['Оружие']: [],
            ['Ноги']: [],
            ['Аксессуар']: [],
        },
        ['Уровень 3']: {
            ['Голова']: [
                {title: 'Гладкий обтекаемый шлем', image: '/hat/21.png'},
                {title: 'Изоляционные очки', image: '/hat/22.png'},
                {title: 'Маска дополнительной фильтрации', image: '/hat/23.png'},
                {title: 'Маска протеста', image: '/hat/24.png'},
                {title: 'Собирающая заколка', image: '/hat/25.png'},
                {title: 'Шлем увеличенного обзора', image: '/hat/26.png'},
                {title: 'Шлем текстовой проекции', image: '/hat/27.png'},
                {title: 'Очки для слежки', image: '/hat/28.png'},
                {title: 'Составной модульный шлем', image: '/hat/29.png'},
                {title: 'Челюстной протектор', image: '/hat/30.png'},
            ],
            ['Тело']: [],
            ['Оружие']: [],
            ['Ноги']: [],
            ['Аксессуар']: [],
        },
    },
    implants: {
        ['Уровень 1']: [
            // Нейрочипы
            {title: 'Интерфейс нейрочипов', image: '/imp/4.png'},
            {title: 'Нейрочип "Геркулес I"', image: '/imp/5.png'},
            {title: 'Нейрочип "Афина Паллада I"', image: '/imp/6.png'},
            {title: 'Нейрочип "Эрида I"', image: '/imp/7.png'},
            {title: 'Нейрочип "Гермес I"', image: '/imp/8.png'},
            // Разное
            {title: 'Имплантируемый экзоскелет "Геракл ver.1"', image: '/imp/19.png'},
            {title: 'Чип "DumbAss"', image: '/imp/20.png'},
            {title: 'Scratchers', image: '/imp/21.png'},
            {title: 'Кибер Гадюка', image: '/imp/22.png'},
            {title: 'Интерфейс подсчета случайных чисел', image: '/imp/23.png'},
            {title: 'Неоновые демонические рога', image: '/imp/24.png'},
            {title: 'Синтетическая кожа', image: '/imp/25.png'},
            {title: 'Интерфейс экстренной смены внешности', image: '/imp/26.png'},
            {title: 'Биологическое улучшение "Икар"', image: '/imp/27.png'},
            {title: 'Кевларовые ребра.', image: '/imp/28.png'},
            {title: 'Голографический модуль им.Селезневой.', image: '/imp/29.png'},
            // Конечности
            {title: 'Рука "1001 мелочь"', image: '/imp/51.png'},
            {title: 'Рука "Скрытый клинок"', image: '/imp/52.png'},
            {title: 'Рука "Гербера"', image: '/imp/53.png'},
            {title: 'Рука "Бич Дьявола"', image: '/imp/54.png'},
        ],
        ['Уровень 2']: [
            // Нейрочипы
            {title: 'Нейрочип "Эрот ver.1"', image: '/imp/9.png'},
            {title: 'Нейрочип "Геркулес II"', image: '/imp/10.png'},
            {title: 'Нейрочип "Афина Паллада II"', image: '/imp/11.png'},
            {title: 'Нейрочип "Минерва"', image: '/imp/12.png'},
            {title: 'Нейрочип "Гермес II"', image: '/imp/13.png'},
            // Разное
            {title: 'Детективное зрение', image: '/imp/30.png'},
            {title: 'Углеродно-тепловой сканер', image: '/imp/31.png'},
            {title: 'HARD RESET', image: '/imp/32.png'},
            {title: 'Аккумулятор Cumsung Galaxy Note 7', image: '/imp/33.png'},
            {title: 'Матрица перегрева', image: '/imp/34.png'},
            {title: 'Радарная система "Следопыт"', image: '/imp/35.png'},
            {title: 'Система контроля здоровья "Панакея"', image: '/imp/36.png'},
            {title: 'Кожный панцирь "Марат"', image: '/imp/37.png'},
            // Конечности
            {title: 'Рука "Один для всех"', image: '/imp/55.png'},
            {title: 'Рука "Неро"', image: '/imp/56.png'},
            {title: 'Рука "Наноклинок"', image: '/imp/57.png'},
            // Кибер-голова
            {title: 'Голова "Одержимый"', image: '/imp/58.png'},
            {title: 'Голова "Всемогущий"', image: '/imp/59.png'},
            {title: 'Голова "Чужой"', image: '/imp/60.png'},
            {title: 'Голова "Хищник"', image: '/imp/61.png'},
            // Личностные манипуляторы
            {title: 'Личностный манипулятор "Роланд"', image: '/imp/62.png'},
            {title: 'Личностный манипулятор "Икабод Крейн"', image: '/imp/63.png'},
            {title: 'Личностный манипулятор "Оливер Суэник"', image: '/imp/64.png'},
            {title: 'Личностный манипулятор "Сэмуайз Гэмджи"', image: '/imp/65.png'},
            {title: 'Личностный манипулятор "Мистер Хайд"', image: '/imp/66.png'},
            {title: 'Личностный манипулятор "Гамлет"', image: '/imp/67.png'},
            {title: 'Личностный манипулятор "Многоликий"', image: '/imp/68.png'},
            // Кибер-ноги
            {title: 'Ноги "Греческий-Сатир"', image: '/imp/69.png'},
            {title: 'Ноги "Лесной Болван"', image: '/imp/70.png'},
            {title: 'Ноги "A T-Train"', image: '/imp/71.png'},
            {title: 'Ноги "Призрак Курильских островов"', image: '/imp/72.png'},
            {title: 'Ноги "Сэм Портер Бриджес"', image: '/imp/73.png'},
            // Кибер-тело
            {title: 'Тело "No pain no gain"', image: '/imp/74.png'},
            {title: 'Тело "Намир"', image: '/imp/75.png'},
            {title: 'Тело "Риг-варл"', image: '/imp/76.png'},
            {title: 'Тело "Работяга"', image: '/imp/77.png'},
            {title: 'Тело "Гелиоцентризм"', image: '/imp/78.png'},
        ],
        ['Уровень 3']: [
            // Нейрочипы
            {title: 'Нейрочип "Геркулес III"', image: '/imp/14.png'},
            {title: 'Нейрочип "Афина Паллада III"', image: '/imp/15.png'},
            {title: 'Нейрочип "Гермес III"', image: '/imp/16.png'},
            {title: 'Нейрочип "Прометей"', image: '/imp/17.png'},
            {title: 'Нейрочип "Мельпомена"', image: '/imp/18.png'},
            // Разное
            {title: '"Каменная маска"', image: '/imp/38.png'},
            {title: '"Пасс-код Ботнета"', image: '/imp/39.png'},
            {title: '"Рециркулятор энергии"', image: '/imp/40.png'},
            {title: '"Синтетическое сердце"', image: '/imp/41.png'},
            {title: '"Микрофибральная мышечная ткань"', image: '/imp/42.png'},
            {title: 'Лёгочное протезирование "Хамон-Овердрайв"', image: '/imp/43.png'},
            {title: 'Улучшенная синтетическая кожа.', image: '/imp/44.png'},
            {title: 'Доступ в виртуальную реальность "НЭП"', image: '/imp/45.png'},
        ],
    },
    meetings: {
        ['Легкая']: [
            'Вечеринка братства',
            'Тупик',
            'Контрабандисты',
            'Неожиданная вписка',
            'Легенды не умирают',
            'Дегустационная минутка',
            'Шумная тусовка',
            'ТехноКон',
            'Где деньги, Кебабски?',
            'Война за граффити',
            'Ценная находка',
            'Распродажа для бедных',
            'Бар "Радужное пони"',
            'Помощь даме',
            'Элитный парикмахер',
            'Кулинарное шоу',
            'Какая-то карточная игра',
            'Новое поколение',
            'Испытание нового оружия',
            'Ответственный работник',
            'Перекаченный',
            '13 шотов',
            'Ночной звонок',
            'Прыжок с парашютом',
            'Знакомство с Каппаменом',
            // + повторки
            'Ленивый гоп-стоп',
            'Ловушка Клоуна',
            'Любимец толпы',
            'Свёрток под половицей',
            'Серьезная встреча',
            'Документы',
            'Ужин с Бейкерами',
            'Маскарад',
            'Уличный шулер',
            'Позитивный настрой',
            'Король Мошны',
            'Хороший вечер',
            'Сторублевый король',
            'Кварцевый король',
            'Аудиенция у Хакса',
        ],
        ['Средняя']: [
            'Встреча с таинственным незнакомцем',
            'Полицейский терминал.',
            'Голос из тьмы',
            'Подпольное казино 1Y-BIT',
            'Зов нужды',
            'Несправедливая драка',
            'Проблемы с получкой',
            'Странный торговый автомат',
            'Проблемы в магазине имплантов',
            'Милая зверушка',
            'Подпольный рынок',
            'Полоса неудач',
            'Свинья в баре',
            'Подлецы',
            'Выставка',
            'Подписи',
            'Много алкоголя',
            'Гневный комментарий',
            'Торговец таблетками',
            'Надоедливый Каппамен',
            // + повторки
            'Ленивый гоп-стоп',
            'Ловушка Клоуна',
            'Любимец толпы',
            'Свёрток под половицей',
            'Серьезная встреча',
            'Документы',
            'Ужин с Бейкерами',
            'Маскарад',
            'Уличный шулер',
            'Позитивный настрой',
            'Король Мошны',
            'Хороший вечер',
            'Сторублевый король',
            'Кварцевый король',
            'Аудиенция у Хакса',
            'Загадочный старец Чудерчу',
            'Форт "Хедер"',
            'Ошибка в VR симуляторе',
            'Последняя надежда',
            'Жестянка',
            'Фальшивые бриллианты',
            'Обещание',
            'Школьный друг',
        ],
        ['Выше среднего']: [
            'Чеканная монета',
            'Стая голодных собак',
            'Нарушаем?',
            'Концерт',
            'Загулявший шейх',
            'Проблема с клоном',
            'Место преступления',
            'Станция метро им. Нилликуха',
            'Панель управления',
            'Быстрая зачистка',
            'Новый герой для города',
            'Странная компания',
            'Наперсточник',
            'Проповедник',
            'Импостер',
            'Самооборона',
            'Выбор приставки',
            'Покушение в метро',
            'Мистер Майка',
            'Все из-за Каппамена',
            // + повторки
            'Тяжелый выбор',
            'Джентльмены обязаны помогать друг другу',
            'Сделка века',
            'Личный вертолет',
            'Жора и Варуда',
            'Ужин с Бейкерами',
            'Маскарад',
            'Уличный шулер',
            'Позитивный настрой',
            'Король Мошны',
            'Хороший вечер',
            'Сторублевый король',
            'Кварцевый король',
            'Аудиенция у Хакса',
            'Загадочный старец Чудерчу',
            'Форт "Хедер"',
            'Ошибка в VR симуляторе',
            'Последняя надежда',
            'Жестянка',
            'Фальшивые бриллианты',
            'Обещание',
            'Школьный друг',
        ],
        ['Высокая']: [
            'Осторожно, высокое напряжение!',
            'Подарок товарищу',
            'Квартал детей',
            'Слежка',
            'Правильный подход',
            'Платный вход',
            'Погоня за предателем',
            'Найти крысу',
            'Мартышкин труд',
            'Глобальный тест',
            'Вернуть должок',
            'Испачканные трусы',
            'Крупный заказ',
            'Разоблачение Каппамена',
            'Неприступный терминал',
            'Чужой среди своих',
            'Городской сумасшедший',
            'Мужик с горящим пенисом',
            'Постройка загородного дома у моря',
            'Постройка гипермаркета "AWAH"',
            'Одиночество на карантине',
            'Поединок чести',
            'Безумные ставки',
            'Торговля территориями',
            'Покушение местных группировок',
            'Очередное покушение',
            'Системный сбой',
            'Допрос',
            'Дикий медведь',
            'Вражеский снайпер',
            'Автомобильная авария',
            'Плотный огонь',
            'Совет от Биг Эфа',
            'Стычка футбольных фанатов',
            // + повторки
            'Тяжелый выбор',
            'Джентльмены обязаны помогать друг другу',
            'Сделка века',
            'Личный вертолет',
            'Жора и Варуда',
            'Король Мошны',
            'Хороший вечер',
            'Сторублевый король',
            'Кварцевый король',
            'Аудиенция у Хакса',
        ],
    },
};
const dataSets = {
    items: [
        'Кастомная маска',
        'Парик профессора',
        'Противогаз без фильтра',
        'Очки пофигиста',
        'Маска с экраном',
        'Балаклава с защитным стеклом',
        'Нейролептический дыхательный аппарат',
        'Очки просвечивающие одежду',
        'Бейсболка "Bubba Gump"',
        'Военная маска от "Кибердайн Систем"',
    ],
    implants: [].concat(subSets.implants["Уровень 1"], subSets.implants["Уровень 2"], subSets.implants["Уровень 3"]),
    meetings: [].concat(subSets.meetings["Легкая"], subSets.meetings["Средняя"], subSets.meetings["Выше среднего"], subSets.meetings["Высокая"])
        .filter(array_unique),
    injuries: [
        {title: 'Голова', image: '/hat/5.png'},
        {title: 'Тело', image: '/items/01.png'},
        {title: 'Ноги', image: '/accessory/170.png'},
        {title: 'Левая рука', image: '/accessory/167.png'},
        {title: 'Правая рука', image: '/accessory/156.png'},
    ],
    coin: [
        {title: 'Орёл',  image: '/coins/russia-100-rubles-1993-ob.png'},
        {title: 'Решка', image: '/coins/russia-100-rubles-1993-rev.png'},
        {title: 'Орёл',  image: '/coins/russia-100-rubles-1993-ob.png'},
        {title: 'Решка', image: '/coins/russia-100-rubles-1993-rev.png'},
        {title: 'Орёл',  image: '/coins/russia-100-rubles-1993-ob.png'},
        {title: 'Решка', image: '/coins/russia-100-rubles-1993-rev.png'},
        {title: 'Орёл',  image: '/coins/russia-100-rubles-1993-ob.png'},
        {title: 'Решка', image: '/coins/russia-100-rubles-1993-rev.png'},
        {title: 'Орёл',  image: '/coins/russia-100-rubles-1993-ob.png'},
        {title: 'Решка', image: '/coins/russia-100-rubles-1993-rev.png'},
        {title: 'Ребро', image: '/coins/coin-gurt.png'},
    ],
    streamers: [
        {title: '???', image: '/items/012.png'},
        {title: '???', image: '/items/050.png'},
        {title: '???', image: '/items/023.png'},
        {title: '???', image: '/items/027.png'},
        {title: '???', image: '/items/028.png'},
    ],
};