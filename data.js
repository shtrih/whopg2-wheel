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
            ['Оружие']: [
                {title: 'Руки-ножницы', image: '/gun/61.png'},
                {title: 'Джедайский бутафорский меч', image: '/gun/62.png'},
                {title: 'Скейтборд с антигравитацией', image: '/gun/63.png'},
                {title: 'Плазменный Томми-Ган', image: '/gun/64.png'},
                {title: 'Protecta с распятием', image: '/gun/65.png'},
                {title: 'СВД', image: '/gun/66.png'},
                {title: 'Beretta M9', image: '/gun/67.png'},
                {title: 'Пустынный орёл', image: '/gun/68.png'},
                {title: 'Нож Керамбит', image: '/gun/69.png'},
                {title: 'Короткая катана "Сабимара"', image: '/gun/70.png'},
            ],
            ['Ноги']: [
                {title: 'Кожаные штаны "YummyBoy"', image: '/leg/91.png'},
                {title: 'Носки и Кибер-сандали "WhiteWolf"', image: '/leg/92.png'},
                {title: 'Кроссовки с автошнуровкой', image: '/leg/93.png'},
                {title: 'Семейники с сердечками', image: '/leg/100.png'},
                {title: 'Ботинки "Hermes"', image: '/leg/94.png'},
                {title: 'Шорты тысячи карманов', image: '/leg/95.png'},
                {title: 'Классические брюки', image: '/leg/96.png'},
                {title: 'Штаны для гольфа', image: '/leg/97.png'},
                {title: 'Ботинки на два размера меньше', image: '/leg/98.png'},
                {title: 'Джинсы с кобурой', image: '/leg/99.png'},
            ],
            ['Аксессуар']: [
                {title: 'Портативная Атомная Станция - 1 (ПАС-1)', image: '/accessory/121.png'},
                {title: 'Ключ-карта от качалки (КОК)', image: '/accessory/122.png'},
                {title: 'Хакерский калькулятор', image: '/accessory/123.png'},
                {title: 'Старенький телефон Siaomi', image: '/accessory/124.png'},
                {title: 'Фитнес-браслет Siaomi', image: '/accessory/125.png'},
                {title: 'Генератор Имён', image: '/accessory/126.png'},
                {title: 'Ошейник для утех', image: '/accessory/127.png'},
                {title: 'Внешний ремешковый карман', image: '/accessory/128.png'},
                {title: 'Значок Комедианта', image: '/accessory/129.png'},
                {title: 'Серьга с записывающим устройством', image: '/accessory/130.png'},
                {title: 'Колода игральных карт по порядку', image: '/accessory/131.png'},
                {title: 'Поддельный преобразователь отпечатков пальцев', image: '/accessory/132.png'},
                {title: 'Кроличья лапка', image: '/accessory/133.png'},
                {title: 'Плотный тканевый карман', image: '/accessory/134.png'},
                {title: 'Станция голографической реальности', image: '/accessory/135.png'},
                {title: 'ИИ "Гладия"', image: '/accessory/136.png'},
                {title: 'Сигареты Red Apple', image: '/accessory/137.png'},
                {title: 'Упаковка таблеток "Глицин"', image: '/accessory/138.png'},
                {title: 'Защитная система СкайКом', image: '/accessory/139.png'},
                {title: 'Карманный компьютер', image: '/accessory/140.png'},
            ],
        },
        ['Уровень 2']: {
            ['Голова']: [
                {title: '"Череп" робота-сутенёра', image: '/hat/11.png'},
                {title: 'Очки лёгкости "EZ-01"', image: '/hat/12.png'},
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
            ['Оружие']: [
                {title: 'Лазерная указка "L-1.05"', image: '/gun/71.png'},
                {title: 'Бита с гвоздями', image: '/gun/72.png'},
                {title: 'Игрушечный меч анимешника', image: '/gun/73.png'},
                {title: 'Позолоченный мульти-кастет', image: '/gun/74.png'},
                {title: 'Катана Кибер Самурая', image: '/gun/75.png'},
                {title: 'Однозарядный плазменный револьвер', image: '/gun/76.png'},
                {title: 'Сломанный рекламный щит 17-ого района', image: '/gun/77.png'},
                {title: 'Охотничий карабин', image: '/gun/78.png'},
                {title: 'LED-0 shield (Ледощит)', image: '/gun/79.png'},
                {title: 'Нож со спусковым механизмом', image: '/gun/80.png'},
            ],
            ['Ноги']: [
                {title: 'Штаны за 40 у.е.', image: '/leg/101.png'},
                {title: 'Антигравитационные махровые тапочки', image: '/leg/102.png'},
                {title: 'Светодиодные кроссовки Аджей', image: '/leg/103.png'},
                {title: 'Туфли без шнурков', image: '/leg/104.png'},
                {title: 'Штаны изменяемого цвета', image: '/leg/105.png'},
                {title: 'Переобувочная обувь', image: '/leg/106.png'},
                {title: 'Тактические военные штаны', image: '/leg/107.png'},
                {title: 'Носки салатового цвета', image: '/leg/108.png'},
                {title: 'Традиционные Гэта', image: '/leg/109.png'},
                {title: 'Старые брюки с подтяжками', image: '/leg/110.png'},
            ],
            ['Аксессуар']: [
                {title: 'Печатная манга "Один мир"', image: '/accessory/141.png'},
                {title: 'Кольцо с шокером', image: '/accessory/142.png'},
                {title: 'Серебряная кнопка MeTube', image: '/accessory/143.png'},
                {title: 'Пакет бессмертного кефира', image: '/accessory/144.png'},
                {title: 'Импортная бестабачная сигара', image: '/accessory/145.png'},
                {title: 'Самовосстанавливающаяся батарейка', image: '/accessory/146.png'},
                {title: 'Портативная мед. Станция', image: '/accessory/147.png'},
                {title: 'Модифицированное платежное кольцо', image: '/accessory/148.png'},
                {title: 'Нашейный помощник Индекс-1', image: '/accessory/149.png'},
                {title: 'Глитч-преображатель', image: '/accessory/150.png'},
                {title: 'Карманный Chat reader', image: '/accessory/151.png'},
                {title: 'Бездонный отсек для рюкзака фирмы "Вассер"', image: '/accessory/152.png'},
                {title: 'Брелок на оружие', image: '/accessory/153.png'},
                {title: 'Обруч дополненной реальности', image: '/accessory/154.png'},
                {title: 'Карманные кнопки выбора', image: '/accessory/155.png'},
                {title: 'Металлические перчатки', image: '/accessory/156.png'},
                {title: 'Белые перчатки поджигателя', image: '/accessory/157.png'},
                {title: 'Затяжной разгрузочный пояс', image: '/accessory/158.png'},
                {title: 'Беспроводные наушники', image: '/accessory/159.png'},
                {title: 'Термокружка-станция для кофе', image: '/accessory/160.png'},
            ],
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
            ['Тело']: [
                {title: 'Байка с китайским символом', image: '/body/51.png'},
                {title: 'Ветровка с множеством карманов', image: '/body/52.png'},
                {title: 'Оверсайз LED-футболка', image: '/body/53.png'},
                {title: 'Тактический костюм', image: '/body/54.png'},
                {title: 'Хитрая рубашка', image: '/body/55.png'},
                {title: 'Рукава с татуировками', image: '/body/56.png'},
                {title: 'Дополнительный позвоночник', image: '/body/57.png'},
                {title: 'Мимикрирующая куртка', image: '/body/58.png'},
                {title: 'Байкерская джинсовка', image: '/body/59.png'},
                {title: 'Информационная куртка', image: '/body/60.png'},
            ],
            ['Оружие']: [
                {title: 'Штурмовая винтовка', image: '/gun/81.png'},
                {title: 'Клинок ассасина', image: '/gun/82.png'},
                {title: 'Фаерболлер', image: '/gun/83.png'},
                {title: 'Полуавтоматический лазерный пистолет', image: '/gun/84.png'},
                {title: 'Наспинный контейнер с гранатами', image: '/gun/85.png'},
                {title: 'Коса с ускорителем полёта', image: '/gun/86.png'},
                {title: 'Странный саксофон', image: '/gun/57.png'},
                {title: '"Малютка"', image: '/gun/88.png'},
                {title: 'Ручная турель', image: '/gun/89.png'},
                {title: 'Плазменный дробовик', image: '/gun/90.png'},
            ],
            ['Ноги']: [
                {title: 'Укрепленные берцы', image: '/leg/111.png'},
                {title: 'Беззвучные чешки', image: '/leg/112.png'},
                {title: 'Удобные брюки с подтяжками', image: '/leg/113.png'},
                {title: 'Джинсы с цепью', image: '/leg/114.png'},
                {title: 'Ботинки с гидравликой', image: '/leg/115.png'},
                {title: 'Спортивные штаны местных авторитетов', image: '/leg/116.png'},
                {title: 'Штаны химзащиты', image: '/leg/117.png'},
                {title: 'Футбольные гетры "Гладиатор"', image: '/leg/118.png'},
                {title: 'Гипнотические мокасины', image: '/leg/119.png'},
                {title: 'Ослепительный саронг', image: '/leg/120.png'},
            ],
            ['Аксессуар']: [
                {title: 'Нашивка "Стримушка"', image: '/accessory/161.png'},
                {title: 'Кольцо-спутник "Чмутник"', image: '/accessory/162.png'},
                {title: 'Шея дракона', image: '/accessory/163.png'},
                {title: 'Гача-сфера из автомата', image: '/accessory/164.png'},
                {title: 'Брелок неудачника', image: '/accessory/165.png'},
                {title: 'Умная татуировка', image: '/accessory/166.png'},
                {title: 'Перчатка Эбису', image: '/accessory/167.png'},
                {title: 'Серьга ветерана запретов', image: '/accessory/168.png'},
                {title: 'Наручные часы "Roflex"', image: '/accessory/169.png'},
                {title: 'Умные ортопедические стельки', image: '/accessory/170.png'},
                {title: 'Военный наркотик "V-03"', image: '/accessory/171.png'},
                {title: 'Браслет разработчика', image: '/accessory/172.png'},
                {title: 'Карманные WR-часы', image: '/accessory/173.png'},
                {title: 'Генератор неприятностей', image: '/accessory/174.png'},
                {title: 'Знамя', image: '/accessory/175.png'},
                {title: 'Базовый набор выживальщика "Гриллз"', image: '/accessory/176.png'},
                {title: 'Наушники "DWCV"', image: '/accessory/177.png'},
                {title: 'Книга Фан Фика', image: '/accessory/178.png'},
                {title: 'PowerBank "Uzya"', image: '/accessory/179.png'},
                {title: 'Флаер "VIP XXX"', image: '/accessory/180.png'},
            ],
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
            {title: 'Кевларовые ребра', image: '/imp/28.png'},
            {title: 'Голографический модуль им.Селезневой', image: '/imp/29.png'},
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
            {title: 'Улучшенная синтетическая кожа', image: '/imp/44.png'},
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
            'Полицейский терминал',
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
    items: [].concat(
        subSets.items["Уровень 1"]["Голова"],
        subSets.items["Уровень 1"]["Тело"],
        subSets.items["Уровень 1"]["Оружие"],
        subSets.items["Уровень 1"]["Ноги"],
        subSets.items["Уровень 1"]["Аксессуар"],
        subSets.items["Уровень 2"]["Голова"],
        subSets.items["Уровень 2"]["Тело"],
        subSets.items["Уровень 2"]["Оружие"],
        subSets.items["Уровень 2"]["Ноги"],
        subSets.items["Уровень 2"]["Аксессуар"],
        subSets.items["Уровень 3"]["Голова"],
        subSets.items["Уровень 3"]["Тело"],
        subSets.items["Уровень 3"]["Оружие"],
        subSets.items["Уровень 3"]["Ноги"],
        subSets.items["Уровень 3"]["Аксессуар"],
    ),
    implants: [].concat(subSets.implants["Уровень 1"], subSets.implants["Уровень 2"], subSets.implants["Уровень 3"]),
    meetings: [].concat(subSets.meetings["Легкая"], subSets.meetings["Средняя"], subSets.meetings["Выше среднего"], subSets.meetings["Высокая"])
        .filter(array_unique),
    injuries: [
        {title: 'Голова', image: '/hat/5.png'},
        {title: 'Тело', image: '/items/01.png'},
        {title: 'Ноги', image: '/accessory/170.png'},
        {title: 'Левая рука', image: '/accessory/167.png'},
        {title: 'Правая рука', image: '/accessory/156.png'},
        {title: 'Избежать ранения (Серебрян1к)', image: '/mates/23.png'},
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
        {title: 'liz0N', image: '/streamers/liz0n.png'},
        {title: 'NAMVSEYASNO', image: '/streamers/NAMVSEYASNO.png'},
        {title: 'praden', image: '/streamers/Praden.png'},
        {title: 'RoadHouse', image: '/streamers/roadhouse.png'},
        {title: 'SgtGrafoyni', image: '/streamers/SgtGrafoyni.png'},
        {title: 'usachman', image: '/streamers/usachman.png'},
    ],
    pvp: [
        'Brawlhalla',
        'Golf With Your Friends',
        'Duck Game',
        'Worms',
        'Robot Roller-Derby Disco Dodgeball',
        'Ratz Instagib',

        'Gang Beasts',
        'Pummel Party',
        'Battle Royale - GeoGuessr',
        'Poker',
        'The Jackbox Party Pack 3 (смертельная вечеринка)',
        'BombTag',
        'Alias',
        'Table Top Racing: World Tour',
        'Garfield Kart - Furious Racing',
        'Wild Animal Racing',
    ],
};