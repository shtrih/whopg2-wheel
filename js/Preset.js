class Preset {
    constructor(title, entries, isTurnOnEntries, isDefault, isReadOnly) {
        this._title = title;
        this._entries = entries;
        this._isTurnOn = Boolean(isTurnOnEntries);
        this._isDefault = Boolean(isDefault);
        this._isReadOnly = Boolean(isReadOnly);
    }

    set presetManager(presetManager) {
        this._presetManager = presetManager
    }

    get isDefault() {
        return this._isDefault;
    }

    getDOMNode(dataSetKey, index) {
        if (!this._node) {
            const
                container = document.createElement('span'),
                label = document.createElement('label'),
                radio = document.createElement('input')
            ;
            radio.setAttribute('type', 'radio');
            radio.setAttribute('name', dataSetKey);
            radio.setAttribute('id', dataSetKey + index);

            label.addEventListener('click', this.handleClick.bind(this));
            label.setAttribute('for', dataSetKey + index);
            label.appendChild(document.createTextNode(this._title));

            container.append(radio, label);

            this._node_radio = radio;
            this._node_label = label;
            this._node = container;
        }

        return this._node;
    }

    activate() {
        this._node_label.dispatchEvent(new Event('click'));
        this._node_radio.checked = true;
    }

    handleClick() {
        this._presetManager.setActivePreset(this, currentDataSet);

        resetEditedDataSet(!this._isTurnOn);

        let entryTitle;
        for(const i in this._entries) {
            entryTitle = this._entries[i].title || this._entries[i];
            if (editedDataSets[currentDataSet][entryTitle] !== undefined) {
                editedDataSets[currentDataSet][entryTitle] = this._isTurnOn;
            }
        }

        this.renderOptions(editedDataSets[currentDataSet], this._isReadOnly);

        return false;
    }

    renderOptions(dataObject, readOnly) {
        if (typeof readOnly === 'undefined') {
            readOnly = this._isReadOnly;
        }

        let options = '', i = 0;
        for (let title in dataObject) {
            options += `<input id="i${i}" type="checkbox" onchange="optionClick('${encodeURIComponent(title)}', this.checked)" 
                ${dataObject[title] ? 'checked' : ''} ${readOnly ? 'disabled' : ''} /><label for="i${i}">${title}</label><br />`;
            i++;
        }

        editOptions.innerHTML = options;
    }
}
