const dataSets = {
    items: [
        'Стримбернар',
        'Выключенный ОБС',
        'Успешная вылазка',
        'Шуточное колесо',
        'КОКтейль бунтаря',
        'Щit',
        'Комбинезон химзащиты',
        'Респиратор',
        'Одноразовые перчатки',
        'Банка шпината',
        'Рука для фистинга имени Билли Херрингтона',
        'Кукла вуду',
        'Набор выживальщика',
        'Наперсток удачи',
        'Переносной телепорт',
        'Футляр',
        'Альпинистский трос',
        'Хакерский компьютер',
        'Корона короля петучей',
        'Порошок прозрения',
        'Мистер Ржавчик',
        'Скупщик гречи',
        'ОПЯТЬ НДИДИ',
        'Вор',
        'Тест на вирус',
        'Штаны за 40 хрывень',
        'Пустышка',
        'Конченное событие',
        'Комбо неудач',
        'Три топора',
        'Не та позиция тебе выпала',
        'Повязка Рэмбо',
        'Пиццианская башня',
        'Крышка от мусорного бака',
        'Сексуальные чулки',
        'Проклятая жилетка Вассермана',
        'Шиш кебаб',
        'Два по цене одного',
        'Интрига',
        'По магазинам с чатом',
        'Наелся и спит',
        'Факер опять переписывает правила',
        'В бухгалтерии все перепутали',
        'Ловушка Джокера',
        'Грабли',
        'Ультрамошна',
        'ВзрывОчка',
        'Сраное колдунье',
        'РокировОЧКА',
        'Полное свинство',
        'Открытая пачка сухариков',
        'Сырое мясо',
        'Кефир с замазанным сроком годности',
        'Таблетки без названия',
        'Сладкий рулет ХуПГ',
        'Сахарные бомбы',
    ],
    supeshiaru: [
        'Чуйка на говно',
        'Выбор Бумера',
        'Выбор Зумера',
        'Чат здесь закон',
        'Я здесь закон',
        'Never Lucky',
        'Четырёхлистный клевер',
    ],
    buffs: [
        'Стримбернар',
        'Выключенный ОБС',
        'Успешная вылазка',
        'Шуточное колесо',
        'КОКтейль бунтаря',
        'Щit',
        'Комбинезон химзащиты',
        'Респиратор',
        'Одноразовые перчатки',
        'Банка шпината',
        'Рука для фистинга имени Билли Херрингтона',
        'Кукла вуду',
        'Набор выживальщика',
        'Наперсток удачи',
        'Переносной телепорт',
        'Футляр',
        'Альпинистский трос',
        'Хакерский компьютер',
        'Корона короля петучей',
        'Порошок прозрения',
    ],
    debuffs: [
        'Мистер Ржавчик',
        'Скупщик гречи',
        'ОПЯТЬ НДИДИ',
        'Вор',
        'Тест на вирус',
        'Штаны за 40 хрывень',
        'Пустышка',
        'Конченное событие',
        'Комбо неудач',
        'Три топора',
        'Не та позиция тебе выпала',
        'Повязка Рэмбо',
        'Пиццианская башня',
        'Крышка от мусорного бака',
        'Сексуальные чулки',
        'Проклятая жилетка Вассермана',
        'Шиш кебаб',
    ],
    coin: [
        'Орёл',
        'Решка',
        'Орёл',
        'Решка',
        'Орёл',
        'Решка',
        'Орёл',
        'Решка',
        'Орёл',
        'Решка',
        'Ребро!',
    ],
    streamers: [
        'Balabama',
        'NAMVSEYASNO',
        'usachman',
        'Westmage',
    ],
    corona: [
        'Тест положительный',
        'Тест отрицательный',
    ]
};
let currentDataSet = 'inventory',
    editedDataSets = {};

const editDialog = document.getElementById('dialog-edit'),
    editButton = document.getElementById('btn-edit'),
    editConfirmButton = editDialog.getElementsByClassName('apply')[0],
    editOptions = editDialog.getElementsByClassName('options')[0],
    editPresets = editDialog.getElementsByClassName('presets')[0],
    optionClick = function (option, checked) {
        editedDataSets[currentDataSet][option] = checked;
    },
    generateOptions = function (dataObject) {
        let options = '';
        for (let i in dataObject) {
            options += `<label><input type="checkbox" onchange="optionClick('${i}', this.checked)" ${dataObject[i] ? 'checked' : ''} />${i}</label><br />`;
        }

        return options;
    },
    resetEditedDataSet = function (toState = true) {
        editedDataSets[currentDataSet] = Object.fromEntries(dataSets[currentDataSet].map(v => v).sort().map(v => [v, toState]));
    },
    editedDataToArray = function () {
        let result = [];

        for (let [key, value] of Object.entries(editedDataSets[currentDataSet])) {
            if (value) {
                result.push(key)
            }
        }

        return result;
    }
;

editButton.addEventListener('click', function () {
    if (currentDataSet === 'custom') {
        p5Instance.mouseDragEnable(false);
        customDialog.style.display = 'block';

        return;
    }

    editDialog.style.display = 'block';
    p5Instance.mouseDragEnable(false);

    editPresets.innerHTML = '';
    editPresets.append(...presets.getNodes(currentDataSet));
    editOptions.innerHTML = generateOptions(editedDataSets[currentDataSet]);
});
editConfirmButton.addEventListener('click', function () {
    editDialog.style.display = 'none';
    p5Instance.mouseDragEnable();

    p5Instance.setData(editedDataToArray());
});

class Preset {
    constructor(title, entries, isTurnOnEntries, isDefault) {
        this._title = title;
        this._entries = entries;
        this._isTurnOn = Boolean(isTurnOnEntries);
        this._isDefault = Boolean(isDefault);
    }

    get isDefault() {
        return this._isDefault;
    }

    get domNode() {
        const el = document.createElement('a');

        el.setAttribute('href', '#');
        el.appendChild(document.createTextNode(this._title));
        el.addEventListener('click', this.handleClick.bind(this));

        return el;
    }

    handleClick() {
        resetEditedDataSet(!this._isTurnOn);

        for(const i in this._entries) {
            if (editedDataSets[currentDataSet][this._entries[i]] !== undefined) {
                editedDataSets[currentDataSet][this._entries[i]] = this._isTurnOn;
            }
        }

        editOptions.innerHTML = generateOptions(editedDataSets[currentDataSet]);

        return false;
    }
}

class PresetAll extends Preset {
    constructor(isDefault) {
        super('Выбрать всё', [], false, isDefault);
    }
}

class PresetWithoutSpecialRolls extends Preset {
    constructor(isDefault) {
        super(
            'Без спецроллов',
            [
                'Факер опять переписывает правила',
            ],
            false,
            isDefault
        );
    }
}

class PresetOnlyBuffs extends Preset {
    constructor(isDefault) {
        super(
            'Только баффы',
            [
                'Стримбернар',
                'Выключенный ОБС',
                'Успешная вылазка',
                'Шуточное колесо',
                'КОКтейль бунтаря',
                'Щit',
                'Комбинезон химзащиты',
                'Респиратор',
                'Одноразовые перчатки',
                'Банка шпината',
                'Рука для фистинга имени Билли Херрингтона',
                'Кукла вуду',
                'Набор выживальщика',
                'Наперсток удачи',
                'Переносной телепорт',
                'Футляр',
                'Альпинистский трос',
                'Хакерский компьютер',
                'Корона короля петучей',
                'Порошок прозрения',
            ],
            true,
            isDefault
        );
    }
}

class PresetOnlyDebuffs extends Preset {
    constructor(isDefault) {
        super(
            'Только дебаффы',
            [
                'Мистер Ржавчик',
                'Скупщик гречи',
                'ОПЯТЬ НДИДИ',
                'Вор',
                'Тест на вирус',
                'Штаны за 40 хрывень',
                'Пустышка',
                'Конченное событие',
                'Комбо неудач',
                'Три топора',
                'Не та позиция тебе выпала',
                'Повязка Рэмбо',
                'Пиццианская башня',
                'Крышка от мусорного бака',
                'Сексуальные чулки',
                'Проклятая жилетка Вассермана',
                'Шиш кебаб',
            ],
            true,
            isDefault
        );
    }
}

class Presets {
    constructor() {
        this._presets = {
            /*items: [
                new PresetAll(),
                new PresetOnlyBuffs(),
                new PresetOnlyDebuffs(),
                // new PresetWithoutSpecialRolls(),
            ],
            supeshiaru: [
                new PresetAll(),
            ],
            */
            streamers: [
                new PresetAll(),
            ],
        };
    }

    hasPreset(dataSetKey) {
        return !!this._presets[dataSetKey];
    }

    getNodes(dataSetKey) {
        let result = [];

        for(const i in this._presets[dataSetKey]) {
            result.push(document.createTextNode(', '));
            result.push(this._presets[dataSetKey][i].domNode);
        }

        result.shift();

        return result;
    }

    applyDefaults(dataSetKey) {
        for(const i in this._presets[dataSetKey]) {
            if (this._presets[dataSetKey][i].isDefault) {
                this._presets[dataSetKey][i].handleClick();
            }
        }
    }
}

const presets = new Presets;

function getImageURI(index) {
    let result = 'images/items/000.png',
        mapping = []
    ;
    switch (currentDataSet) {
        case "buffs":
            mapping = [
                5,
                9,
                17,
                11,
                24,
                51,
                52,
                54,
                55,
                56,
                60,
                63,
                64,
                65,
                66,
                67,
                71,
                72,
                73,
                75,
            ];
            result = 'images/items/0' + ('0' + (mapping[index])).slice(-2) + '.png';
            break;

        case "debuffs":
            mapping = [
                1,
                7,
                10,
                12,
                16,
                18,
                20,
                21,
                22,
                31,
                45,
                23,
                49,
                57,
                61,
                68,
                70,
            ];
            result = 'images/items/0' + ('0' + (mapping[index])).slice(-2) + '.png';
            break;

        case "items":
            mapping = [
                5,
                9,
                17,
                11,
                24,
                51,
                52,
                54,
                55,
                56,
                60,
                63,
                64,
                65,
                66,
                67,
                71,
                72,
                73,
                75,
                1,
                7,
                10,
                12,
                16,
                18,
                20,
                21,
                22,
                31,
                45,
                23,
                49,
                57,
                61,
                68,
                70,
                33,
                34,
                36,
                47,
                26,
                6,
                3,
                8,
                14,
                19,
                32,
                35,
                50,
                37,
                38,
                40,
                41,
                42,
                46,
            ];
            result = 'images/items/0' + ('0' + (mapping[index])).slice(-2) + '.png';
            break;

        case "supeshiaru":
            mapping = [
                25,
                27,
                28,
                13,
                30,
                45,
                62,
            ];
            result = 'images/items/0' + ('0' + (mapping[index])).slice(-2) + '.png';
            break;

        case "coin":
            result = 'images/coins/russia-100-rubles-1993-ob.png';
            if (index === 1) {
                result = 'images/coins/russia-100-rubles-1993-rev.png';
            }
            if (index === 10) {
                result = 'images/coins/coin-gurt.png';
            }
            break;

        case "streamers":
            result = 'images/streamers/'+ dataSets[currentDataSet][index] +'.png';
            break;

        case "corona":
            result = 'images/items/016.png';
            break;
    }

    return result;
}

const p5Instance = new p5(WheelSketch);

p5Instance.onAfterSetup = function () {
    p5Instance.setVideos([
        ['videos/Папич-марш  прощание славянки .9мая.mp4', 7],
        p5Instance.random([
            ['videos/Putin walking meme (Full version).mp4', 32],
            'videos/wide-cj.mp4',
        ]),
        ['videos/BASSBOOSTED   Смешарики-От винта.mp4', 14, 28],
        // ['videos/BASSBOOSTED   Смешарики-От винта.mp4', 44, 34],
        ['videos/BASSBOOSTED   Смешарики-От винта.mp4', 73, 29],
        ['videos/JOJO\'S BIZARRE MAKEUP TUTORIAL.mp4', 6],
        // ['videos/Пузантос - Бумаги [Morrowind].mp4', 129],
        ['videos/Сыновья России. Кто пчелок уважает.mp4', 26],
        ['videos/Мэддисон - Shooting Stars.mp4', 13],
        ['videos/All Star but they don\'t stop coming pitch corrected.mp4', 20],
        ['videos/U GOT THAT   LASQA EDITION.mp4', 9],
        ['videos/Pinoki - Pingana (Havana by Camila Cabello ft. Young Thug Remix).mp4', 54],
        ['videos/Noisestorm - Crab Rave (Official Music Video).mp4', p5Instance.random([75, 136])],
        ['videos/HOOD NARUTO  pt.3 (full video) naruto vs sasuke.mp4', 38, 26],
        ['videos/HOOD NARUTO  pt.4 (full video) naruto vs pain.mp4', 23, 32],
        'videos/14686000376951.webm',
        'videos/6 отвлекающих кадров.mp4',
        'videos/[Re-upload] [1080p] HONK HONK.mp4',
        ['videos/CHIKA VIBES   Kaguya-sama Love is War.mp4', 0, 28],
        'videos/best Chika meme ever   anime characters in Chika dance MV.mp4',
        ['videos/Не Твое Дело - Я буду рядом.mp4', 0, 30],
        'videos/Music make you lose control triangle.mp4',
        'videos/Танец под волчок из  Что Где Когда.mp4',
        ['videos/Мэддисон дрифтит под Фонк.mp4', 0, 25],
        'videos/La Cumbia Del Coronavirus.mp4',
        ['videos/usachman - Привет из 3182.mp4', 0, 26],
        'videos/namvseyasno-shrekophone.mp4',
        ['videos/Новая заставка для Дмитрия Гордона.mp4', 0, 17],
        ['videos/liz0N - Пятница (песенка про Minecraft).mp4', 31, 32],
        ['videos/ХРЮШЕНЬКИНЫ САПОГИ.mp4', 0, 30],
        ['videos/а нал Проокофьев (карантиновидение).mp4', 0, 30],
        ['videos/Dj Eban.mp4', 48],
        // ['videos/RONDONDON  (official music video) Lil John & Eastside boyz- Get Low (cover).mp4', 0, 30],
        ['videos/blinding-lights.mp4', 0, 31],
        ['videos/Sailor Moon OP1.mp4', 0, 32],
        ['videos/Antonio Banderas, Los Lobos • Desperado.mp4', 0, 30],
        'videos/faina.mp4',
        'videos/Enjoykin — Ламповая Няша.mp4',
        // 'videos/01.mp4',
        'videos/02.mp4',
        // 'videos/03.mp4',
        // 'videos/04.mp4',
        'videos/06.mp4',
        // 'videos/08.mp4',
        // 'videos/09.mp4',
        // 'videos/10.mp4',
        'videos/12.mp4',
        // 'videos/13.mp4',
        'videos/14.mp4',
        // 'videos/16.mp4', // banned
        // 'videos/17.mp4',
        'videos/18.mp4',
        'videos/19.mp4',
        // 'videos/20.mp4',
        // 'videos/21.mp4',
    ]);
};

const image = document.querySelector('#item-image img');
p5Instance.onSelectItem = function(data, selectedKey) {
    if (dataSets[currentDataSet]) {
        image.src = getImageURI(dataSets[currentDataSet].indexOf(data[selectedKey]));
    }
    else {
        image.src = 'images/items/000.png';
    }
};

const customDialog = document.getElementById('custom-list'),
    customTextarea = customDialog.getElementsByTagName('textarea')[0],
    customButton = customDialog.getElementsByTagName('button')[0]
;

customButton.addEventListener('click', function () {
    customDialog.style.display = 'none';

    p5Instance.setData(customTextarea.value.split('\n'));
    p5Instance.mouseDragEnable();
});

let radios = document.querySelectorAll('[name="list"]');
for(let i = 0; i < radios.length; i++) {
    radios[i].addEventListener('click', function () {
        currentDataSet = this.value;

        if (this.value === 'custom') {
            p5Instance.mouseDragEnable(false);
            customDialog.style.display = 'block';

            return;
        }

        customDialog.style.display = 'none';
        p5Instance.mouseDragEnable();

        if (presets.hasPreset(currentDataSet)) {
            if (!editedDataSets[currentDataSet]) {
                resetEditedDataSet();
                presets.applyDefaults(currentDataSet);
            }

            p5Instance.setData(editedDataToArray());

            this.parentElement.append(editButton);
            editButton.className = '';
        }
        else {
            p5Instance.setData(dataSets[currentDataSet]);
            editButton.className = 'hide';
        }
    });

    // Выбираем начальный вариант при загрузке страницы
    if (radios[i].hasAttribute('checked')) {
        radios[i].dispatchEvent(new Event('click'));
    }
}
