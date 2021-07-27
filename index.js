
let currentDataSet = 'inventory',
    editedDataSets = {};

const editDialog = document.getElementById('dialog-edit'),
    editButton = document.getElementById('btn-edit'),
    editConfirmButton = editDialog.getElementsByClassName('apply')[0],
    editOptions = editDialog.getElementsByClassName('options')[0],
    editPresets = editDialog.getElementsByClassName('presets')[0],
    presetManager = new PresetManager,
    optionClick = function (option, checked) {
        option = decodeURIComponent(option);
        editedDataSets[currentDataSet][option] = checked;
    },
    resetEditedDataSet = function (toState = true) {
        editedDataSets[currentDataSet] = Object.fromEntries(
            dataSets[currentDataSet]
                .map(v => v)
                .sort((a, b) => (a.title || a).localeCompare(b.title || b))
                .map(v => [v.title || v, toState])
        );
    },
    editedDataToArray = function () {
        let result = [];

        for (let [key, value] of Object.entries(editedDataSets[currentDataSet])) {
            if (value) {
                for (let i = 0; i < dataSets[currentDataSet].length; i++) {
                    if ((dataSets[currentDataSet][i].title || dataSets[currentDataSet][i]) === key) {
                        result.push(dataSets[currentDataSet][i])
                    }
                }
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

        if (presetManager.hasPreset(currentDataSet)) {
            if (!editedDataSets[currentDataSet]) {
                editPresets.innerHTML = '';
                editPresets.append(...presetManager.getNodes(currentDataSet));
            }

            p5Instance.setData(editedDataToArray());

            this.parentElement.append(editButton);
            editButton.className = '';

            if (this.getAttribute('data-show-edit-dialog')) {
                editButton.dispatchEvent(new Event('click'));
            }
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
    editPresets.append(...presetManager.getNodes(currentDataSet));
    presetManager.renderOptions(editedDataSets[currentDataSet]);
});
editConfirmButton.addEventListener('click', function () {
    editDialog.style.display = 'none';
    p5Instance.mouseDragEnable();

    p5Instance.setData(editedDataToArray());
});

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
let currentUrl = window.location.href;
currentUrl = currentUrl.substring(0, currentUrl.lastIndexOf("/"));

const p5image = new p5((p) => {
    let image,
        isAnimated = false,
        animationsMap = new Map,
        animationDraw = (animation) => {
            animation();
        }
    ;

    function createAnimation(tickHook, startNum, endNum, durationMs, callback, easingEq) {
        easingEq = easingEq || easeInOutSine;
        const changeInNum = endNum - startNum,
            startTime = Date.now(),
            engine = function () {
                const now = Date.now(),
                    timeSpent = now - startTime,
                    timeNorm = timeSpent / durationMs,
                    completionNorm = easingEq(timeNorm),
                    newNum = startNum + completionNorm * changeInNum;

                if (timeSpent > durationMs) {
                    animationsMap.delete(`${startNum},${endNum},${durationMs}`);
                    if (callback) {
                        callback();
                    }
                }
                else {
                    tickHook(newNum);
                }
            }
        ;

        animationsMap.set(`${startNum},${endNum},${durationMs}`, engine);
    }

    p.preload = () => {
        image = p.loadImage('images/frames/ppOverheat.gif');
    };
    p.setup = () => {
        const canvas = p.createCanvas(112, 112);
        canvas.parent('canvas2');
    };
    p.draw = () => {
        p.clear();

        if (isAnimated) {
            animationsMap.forEach(animationDraw);
            p.image(image, 0, 0);
        }
    };

    p.onStartWheel = (durationSec) => {
        isAnimated = true;
        let drawCallback = (v) => {
            image.delay(v);
        };

        createAnimation(drawCallback, 200, 20, durationSec * 1000 / 2, () => {
            createAnimation(drawCallback, 20, 200, durationSec * 1000 / 2, () => {}, easeInOutSine)
        }, easeOutExpo);
    };
    p.setIsAnimated = (state) => {
        isAnimated = state;
    };
    p.moveAnimation = (delta) => {
        if (delta > 0) {
            let delay = Math.ceil(p.map(delta, 0, 10, 200, 4, true));
            image.delay(delay);
            return;
        }

        image.delay(10000);
    };
});

p5Instance.onStartWheel = (durationSec) => {
    if (currentDataSet === 'meetings') {
        p5image.onStartWheel(durationSec);
    }
};
p5Instance.onStopWheel = () => {
    // p5image.startAnimation(false);
};

let deltas = [];
setInterval(() => {
    if (currentDataSet === 'meetings') {
        p5image.setIsAnimated(true);

        let max = deltas.reduce(function(a, b) {
            return Math.max(a, b);
        }, 0);
        deltas = [];

        p5image.moveAnimation(max);
    }
    else {
        p5image.setIsAnimated(false);
    }
}, 500);

p5Instance.onMoveWheel = (delta) => {
    if (currentDataSet === 'meetings') {
        deltas.push(Math.abs(delta));
    }
};

p5Instance.onSelectItem = function(data, selectedKey) {
    let url = currentUrl + '/images/000.png';
    // if (dataSets[currentDataSet]) {
    //     const imageIndex = dataSets[currentDataSet].indexOf(data[selectedKey]);
    //     if (imageIndex !== -1) {
    //         url = getImageURI(imageIndex);
    //     }
    // }

    if (data[selectedKey] && typeof data[selectedKey].image === 'string') {
        url = currentUrl +'/images'+ data[selectedKey].image;
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

        document.title = 'Колесо WhoPG2 (' + stringData.substring(0, 30) + '…)';

        url.search = new URLSearchParams({custom: stringData});
        // console.log(url.toString());
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
    },
    customSubmitHandler = function () {
        customDialog.style.display = 'none';

        p5Instance.setData(customTextarea.value.split('\n'));
        p5Instance.mouseDragEnable();

        saveCustomData(customTextarea.value);
    }
;

customButton.addEventListener('click', customSubmitHandler);

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