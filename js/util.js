
/**
 * @see https://easings.net/#easeOutElastic
 * @param x
 * @return {number}
 */
function easeOutElastic(x) {
    const c4 = (2 * Math.PI) / 3;

    return x === 0 ?
           0 :
           x === 1 ?
           1 :
           Math.pow(2, -10 * x) * Math.sin((x * 10 - 0.75) * c4) + 1;
}

function easeLinear(x) {
    return x;
}

/**
 * @see https://easings.net/#easeInOutCubic
 * @param x
 * @return {number}
 */
function easeInOutCubic(x) {
    return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
}

/**
 * @see https://easings.net/#easeOutBack
 * @param x
 * @return {number}
 */
function easeOutBack(x) {
    const c1 = 1.70158;
    const c3 = c1 + 1;

    return 1 + c3 * Math.pow(x - 1, 3) + c1 * Math.pow(x - 1, 2);
}

/**
 * @see https://easings.net/#easeOutExpo
 * @param x
 * @return {number}
 */
function easeOutExpo(x) {
    return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
}

/**
 * @see https://easings.net/#easeInOutExpo
 * @param x
 * @return {number}
 */
function easeInOutExpo(x) {
    return x === 0
           ? 0
           : x === 1
             ? 1
             : x < 0.5 ? Math.pow(2, 20 * x - 10) / 2
                       : (2 - Math.pow(2, -20 * x + 10)) / 2;
}

/**
 * @see https://easings.net/#easeInOutSine
 * @param x
 * @return {number}
 */
function easeInOutSine(x) {
    return -(Math.cos(Math.PI * x) - 1) / 2;
}

/**
 * @see https://easings.net/#easeInCirc
 * @param x
 * @return {number}
 */
function easeInCirc(x) {
    return 1 - Math.sqrt(1 - Math.pow(x, 2));
}

/**
 * @see https://easings.net/#easeInOutCirc
 * @param x
 * @return {number}
 */
function easeInOutCirc(x) {
    return x < 0.5
           ? (1 - Math.sqrt(1 - Math.pow(2 * x, 2))) / 2
           : (Math.sqrt(1 - Math.pow(-2 * x + 2, 2)) + 1) / 2;
}

function array_shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function array_unique(value, index, self) {
    return self.indexOf(value) === index;
}