class PresetManager {
    constructor() {
        this._presets = {
            implants: [
                new PresetImplantL1(true),
                new PresetImplantL2(),
                new PresetImplantL3(),
                new PresetAll(),
                new PresetNothing(),
            ],
            meetings: [
                new PresetMeetEZ(),
                new PresetMeetMedium(),
                new PresetMeetSemiHard(true),
                new PresetMeetHard(),
                new PresetAll(),
                new PresetNothing(),
            ],
            injuries: [
                new PresetInjuries(true),
            ],
            streamers: [
                new PresetAll(true),
            ],
            pvp: [
                new PresetPvp(true)
            ],
        };
        this._nodes = {};
        this._activePresets = {};
    }

    hasPreset(dataSetKey) {
        return !!this._presets[dataSetKey];
    }

    getNodes(dataSetKey) {
        if (!this._nodes[dataSetKey]) {
            this._nodes[dataSetKey] = [];

            this._presets[dataSetKey].forEach((preset, i) => {
                this._nodes[dataSetKey].push(document.createTextNode(', '));
                this._nodes[dataSetKey].push(preset.getDOMNode(dataSetKey, i));
            });

            this._nodes[dataSetKey].shift();

            this.applyDefaults(dataSetKey);
        }

        return this._nodes[dataSetKey];
    }

    applyDefaults(dataSetKey) {
        this._presets[dataSetKey].forEach(preset => {
            preset.presetManager = this;
            if (preset.isDefault) {
                preset.activate();
            }
        });
    }

    /**
     * @param {Preset} preset
     * @param {string} dataSetKey
     */
    setActivePreset(preset, dataSetKey) {
        this._activePresets[dataSetKey] = preset;
    }

    renderOptions(dataObject, dataSetKey) {
        this._activePresets[dataSetKey].renderOptions(dataObject);
    }
}