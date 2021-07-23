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
    },
    radioClickHandler = function () {
        currentDataSet = this.value;

        if (currentDataSet === 'custom') {
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

const DMCAPlaylistSwitcher = new CheckboxStateable('with-dmca', 'video-with-dmca-protection', CheckboxStateable.MODE_MERGE);
DMCAPlaylistSwitcher
    .setValues(videosProtected, videosFree)
    .onSwitch((value) => {
        p5Instance.setVideos(value);
    })
;

p5Instance.onAfterSetup = function () {
    p5Instance.setVideos(DMCAPlaylistSwitcher.value);
};

const image = document.querySelector('#item-image img');
p5Instance.onSelectItem = function(data, selectedKey) {
    let url = 'images/items/000.png';
    if (dataSets[currentDataSet]) {
        const imageIndex = dataSets[currentDataSet].indexOf(data[selectedKey]);
        if (imageIndex !== -1) {
            url = getImageURI(imageIndex);
        }
    }

    if (image.src !== url) {
        image.src = url;
    }
};

const customDialog = document.getElementById('custom-list'),
    customTextarea = customDialog.getElementsByTagName('textarea')[0],
    customButton = customDialog.getElementsByTagName('button')[0],
    saveCustomData = function (stringData) {
        const url = new URL(window.location);

        url.search = new URLSearchParams({custom: stringData});
        console.log(url.toString());
        history.pushState({}, '', url.toString());
    },
    loadCustomData = function () {
        const urlSearchParams = new URL(window.location).searchParams,
            list = urlSearchParams.get('custom')
        ;

        return list;
    },
    applyCustomData = function (customData) {
        const customRadio = document.querySelector('[name="list"][value="custom"]');
        customTextarea.value = customData;

        customButton.dispatchEvent(new Event('click'));
        customRadio.setAttribute('checked', true);
    },
    windowPopStateHandler = function (event) {
        applyCustomData(loadCustomData());
    }
;

customButton.addEventListener('click', function () {
    customDialog.style.display = 'none';

    p5Instance.setData(customTextarea.value.split('\n'));
    p5Instance.mouseDragEnable();

    saveCustomData(customTextarea.value);
});

let radios = document.querySelectorAll('[name="list"]');
for(let i = 0; i < radios.length; i++) {
    radios[i].addEventListener('click', radioClickHandler);

    // Выбираем начальный вариант при загрузке страницы
    if (radios[i].hasAttribute('checked')) {
        radios[i].dispatchEvent(new Event('click'));
    }
}

const customData = loadCustomData();
if (customData) {
    applyCustomData(customData);
}

window.onpopstate = windowPopStateHandler;