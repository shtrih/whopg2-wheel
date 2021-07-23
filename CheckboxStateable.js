
class CheckboxStateable {
    static get MODE_SWITCH() {
        return 0;
    }
    static get MODE_MERGE() {
        return 1;
    }

    /**
     * Note: MODE_MERGE implies both values are arrays
     * @param checkboxId
     * @param stateKey
     * @param mode
     */
    constructor(checkboxId, stateKey, mode = CheckboxStateable.MODE_SWITCH) {
        this._element = document.getElementById(checkboxId);
        this._stateKey = stateKey;
        this._mode = mode;
    }

    setValues(valOnChecked, valOnUnchecked) {
        this._valOnChecked = valOnChecked;
        this._valOnUnchecked = valOnUnchecked;

        return this;
    }

    onSwitch(callback) {
        this._callback = callback;

        // load state before add change listener
        this._loadState();

        this._element.addEventListener('change', () => {
            this._saveState();
        });

        return this;
    }

    get value() {
        return this._getCurrentValue()
    }

    _getCurrentValue() {
        if (this._mode === CheckboxStateable.MODE_MERGE) {
            if (this._element.checked) {
                return this._valOnUnchecked.concat(this._valOnChecked);
            }

            return this._valOnUnchecked;
        }

        return this._element.checked ? this._valOnChecked : this._valOnUnchecked;
    }

    _loadState() {
        const checked = localStorage.getItem(this._stateKey);
        if (checked === "true") {
            this._element.click();
        }
    }

    _saveState() {
        localStorage.setItem(this._stateKey, this._element.checked);

        if (typeof this._callback === 'function') {
            this._callback(this._getCurrentValue());
        }
    }
}