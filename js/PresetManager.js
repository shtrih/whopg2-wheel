class PresetManager {
    constructor() {
        this._presets = {
            implants: [
                new PresetImplantL1(),
                new PresetImplantL2(),
                new PresetImplantL3(),
                new PresetAll(true),
                new PresetNothing(),
            ],
            meetings: [
                new PresetMeetEZ(),
                new PresetMeetMedium(),
                new PresetMeetSemiHard(),
                new PresetMeetHard(),
                new PresetAll(true),
                new PresetNothing(),
            ],
            injuries: [
                new PresetAll(true, 'всё'),
                new PresetNothing(true),
            ],
            streamers: [
                new PresetAll(true),
            ],
        };
        this._nodes = {};
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
     */
    set activePreset(preset) {
        this._activePreset = preset
    }

    renderOptions(dataObject) {
        this._activePreset.renderOptions(dataObject);
    }
}