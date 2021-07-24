class PresetManager {
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
            implants: [
                new PresetAll(),
            ],
            meetings: [
                new PresetAll(),
            ],
            injuries: [
                new PresetAll(),
            ],
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