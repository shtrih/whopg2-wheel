function GifPlayer(p) {
    const
        width = 112,
        height = 112,
        gifList = [
            'ppOverheat',
            '3x',
            '3x_1',
            '3x_2',
            '3x_3',
            '3x_4',
            '3x_5',
        ]
    ;
    let image,
        isAnimated = false,
        animationsMap = new Map,
        animationDraw = (animation) => {
            animation();
        },
        imageIndex = 0,
        delay
    ;

    array_shuffle(gifList);

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
        p.randomizeImage();
    };
    p.setup = () => {
        const canvas = p.createCanvas(width, height);
        canvas.parent('canvas2');

        p.imageMode(p.CENTER);

        if (isDebug) {
            const
                rangeInput = p.createSlider(5, 255, 50, 5),
                button = p.createButton('Next gif')
            ;

            button.position(0, 130);
            button.mousePressed(function () {
                p.randomizeImage();
                image.delay(delay);
            });

            rangeInput.elt.setAttribute('title', 'Задержка между кадрами');
            rangeInput.style('transform', 'scaleX(-1)');
            rangeInput.position(0, 100);
            rangeInput.input(function () {
                delay = this.value();
                image.delay(delay);
            });

            p.moveAnimation = ()=>{};
        }
    };
    p.draw = () => {
        if (isAnimated) {
            p.clear();

            animationsMap.forEach(animationDraw);
            p.image(image, 56, 56);

            if (isDebug) {
                p.fill(255);
                p.textSize(20);
                p.text(delay + ' ms', 0, 20);
            }
        }
    };

    p.onStartWheel = (durationSec) => {
        isAnimated = true;

        p.randomizeImage();

        let drawCallback = (v) => {
            delay = v;
            image.delay(delay);
        };

        createAnimation(drawCallback, 200, 15, durationSec * 1000 / 2, () => {
            createAnimation(drawCallback, 15, 200, durationSec * 1000 / 2, () => {}, easeInOutSine)
        }, easeOutExpo);
    };
    p.setIsAnimated = (state) => {
        isAnimated = state;
        p.clear();
    };
    p.moveAnimation = (delta) => {
        delay = 10000;
        if (delta > 0) {
            delay = Math.ceil(p.map(delta, 0, 10, 200, 4, true));
            // image.delay(delay);
            // return;
        }

        image.delay(delay);
    };
    p.randomizeImage = () => {
        p.loadImage('images/frames/' + gifList[imageIndex] + '.gif', img => {
            image = img;
            image.delay(delay);
        });

        imageIndex++;
        if (imageIndex >= gifList.length) {
            imageIndex = 0;
        }
    };
}