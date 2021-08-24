
class PresetAll extends Preset {
    constructor(isDefault, title = 'выбрать всё') {
        super(title, [], false, isDefault);
    }
}

class PresetNothing extends Preset {
    constructor(isDefault) {
        super('ничего', [], true, isDefault);
    }
}

class PresetMeetEZ extends Preset {
    constructor(isDefault) {
        super(
            'лёгкая сложность',
            subSets.meetings.Легкая,
            true,
            isDefault,
            true
        );
    }
}

class PresetMeetMedium extends Preset {
    constructor(isDefault) {
        super(
            'средняя',
            subSets.meetings.Средняя,
            true,
            isDefault,
            true
        );
    }
}

class PresetMeetSemiHard extends Preset {
    constructor(isDefault) {
        super(
            'выше среднего',
            subSets.meetings["Выше среднего"],
            true,
            isDefault,
            true
        );
    }
}

class PresetMeetHard extends Preset {
    constructor(isDefault) {
        super(
            'высокая',
            subSets.meetings["Высокая"],
            true,
            isDefault,
            true
        );
    }
}

class PresetImplantL1 extends Preset {
    constructor(isDefault) {
        super(
            'уровень 1',
            subSets.implants["Уровень 1"],
            true,
            isDefault,
            true
        );
    }
}

class PresetImplantL2 extends Preset {
    constructor(isDefault) {
        super(
            'уровень 2',
            subSets.implants["Уровень 2"],
            true,
            isDefault,
            true
        );
    }
}

class PresetImplantL3 extends Preset {
    constructor(isDefault) {
        super(
            'уровень 3',
            subSets.implants["Уровень 3"],
            true,
            isDefault,
            true
        );
    }
}

class PresetInjuries extends Preset {
    constructor(isDefault) {
        const presetInjuries = [].concat(dataSets.injuries);
        // ласт елемент должен быть отжат
        presetInjuries.pop();

        super(
            'все',
            presetInjuries,
            true,
            isDefault,
            false
        );
    }
}

class PresetPvp extends Preset {
    constructor(isDefault) {
        const sliceFrom = 6; // сколько отжать
        super(
            'все',
            [].concat(dataSets.pvp.slice(sliceFrom, dataSets.pvp.length)),
            true,
            isDefault,
            false
        );
    }
}

class PresetGroup extends Preset {
    constructor(title) {
        super(
            title,
            [],
            true,
            false,
            true
        );
    }

    getDOMNode(dataSetKey, index) {
        if (!this._node) {
            const container = document.createElement('div');
            container.setAttribute('style', 'margin-top: 0.6em');
            container.appendChild(document.createTextNode(this._title));

            this._node = container;
        }

        return this._node;
    }

    renderOptions(dataObject, readOnly) {
        const title = document.createElement('div');
        title.appendChild(document.createTextNode(this._title));

        editOptions.append(title);
    }
}

class PresetItems extends Preset {
    /**
     * @param title
     * @param entries {header_title: {group_title: [{title: '', image: ''}...], ...}, ...}
     * @param isDefault
     */
    constructor(title, entries, isDefault) {
        super(
            title,
            entries,
            true,
            isDefault,
            true
        );

        this._optionsContainer = document.createElement('div');
    }

    getDOMNode(dataSetKey, index) {
        // if (!this._node) {
            const
                container = document.createElement('span'),
                label = document.createElement('label'),
                input = document.createElement('input')
            ;
            input.setAttribute('type', 'checkbox');
            input.setAttribute('name', dataSetKey);
            input.setAttribute('id', dataSetKey + index);
            input.addEventListener('click', this.handleClick.bind(this));

            label.setAttribute('for', dataSetKey + index);
            label.appendChild(document.createTextNode(this._title));

            container.append(input, label);

            this._node = container;
        // }

        return this._node;
    }

    handleClick(e) {
        let entryTitle;
        for(const i in this._entries) {
            entryTitle = this._entries[i].title || this._entries[i];
            if (editedDataSets[currentDataSet][entryTitle] !== undefined) {
                editedDataSets[currentDataSet][entryTitle] = e.target.checked; // this._isTurnOn;
            }
        }

        // console.log(this._optionsContainer.querySelectorAll(':checked'));
        // this.renderOptions(editedDataSets[currentDataSet], this._isReadOnly);

        return false;
    }

    renderOptions(dataObject, readOnly = true) {
        if (!this._optionsContainer.hasChildNodes()) {
            let options = '<div>'+ this._title + '</div>',
                i = 0
            ;
            for (const title in dataObject) {
                options += `<input id="i${i}" type="checkbox" onchange="optionClick('${encodeURIComponent(title)}', this.checked)" 
                ${dataObject[title] ? 'checked' : ''} ${readOnly ? 'disabled' : ''} /><label for="i${i}">${title}</label><br />`;
                i++;
            }

            this._optionsContainer.innerHTML = options;
        }

        if (this._optionsContainer.parentElement !== editOptions) {
            editOptions.append(this._optionsContainer);
        }
    }
}
