class FPSCounter {
    constructor(x, y, width, height, p5) {
        let posX = 0,
            maxX = width,
            percentile,
            fontSize = 12,
            numberOffset = fontSize + 2,
            bottomPosY = height - numberOffset,
            backgroundColor = 0,

            graphicsBuffer = p5.createGraphics(width, height),
            drawGraphics = (graphics, rate) => {
                posX++;
                if (posX > maxX) {
                    posX = 0;
                }

                // clean old number
                graphics.noStroke();
                graphics.fill(backgroundColor);
                graphics.rect(0, bottomPosY + 1, maxX, numberOffset);

                // FPS number
                graphics.textAlign(graphics.CENTER, graphics.TOP);
                graphics.textSize(fontSize);
                graphics.fill(255 - rate * 3, rate * 3, 0);
                graphics.text(rate.toFixed(1), width / 2, bottomPosY + 3);

                // colored FPS lines
                percentile = (height - numberOffset) / 70 * rate;
                graphics.stroke(255 - rate * 3, rate * 3, 0);
                graphics.line(posX, bottomPosY, posX, bottomPosY - percentile);

                // clear old longer lines
                graphics.stroke(backgroundColor);
                graphics.line(posX, 0, posX, bottomPosY - percentile - 1);

                // and show a leading empty line
                graphics.stroke(backgroundColor);
                graphics.line(posX + 1, 0, posX + 1, bottomPosY);
            }
        ;

        this._draw = () => {
            drawGraphics(graphicsBuffer, p5.frameRate());
            p5.image(graphicsBuffer, x, y);
        };
    }

    draw() {
        this._draw();
    }
}