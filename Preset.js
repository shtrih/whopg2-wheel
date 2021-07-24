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
