class Video {
    static get KEY_URL() {
        return 0;
    }
    static get KEY_START_TIME() {
        return 1;
    }
    static get KEY_DURATION() {
        return 2;
    }

    /**
     * @type Array videoURLs
     */
    constructor(videoURLs) {
        this._current_index = null;
        this._current_video = null;
        this._urls = videoURLs;
        /**@type HTMLVideoElement */
        this._video = document.querySelector('video');
        /**@type HTMLSourceElement*/
        this._source = this._video.firstElementChild;
        this._range = document.getElementById('volume-control');
        this._loadVolume();
        this._range.addEventListener('change', () => {
            this.setVolume(this._range.value);
            this._saveVolume();
        });
        Video._shuffle(this._urls);
        this.changeVideo(0);
    }

    async play() {
        this._resetCurrentTime();
        this._video.volume = this.volume;
        await this._video.play();
    }

    pause() {
        this._video.pause();
        this.changeVideo();
    }

    setVolume(number) {
        this._video.volume = number;
    }

    get volume() {
        return Number(this._range.value);
    }

    changeVideo(forceIndex) {
        if (Number.isInteger(forceIndex)) {
            this._current_index = forceIndex;
        }
        else {
            this._current_index++;
        }

        if (this._current_index >= this._urls.length) {
            Video._shuffle(this._urls);
            this._current_index = 0;
        }

        this._duration = 0;

        let video = this._urls[ this._current_index ];
        if (typeof(video) === 'function') {
            video = this._urls[ this._current_index ]();
        }

        this._source.src = video;
        if (Array.isArray(video)) {
            this._source.src = video[ Video.KEY_URL ];
            this._duration = video[ Video.KEY_DURATION ] || 0;
        }
        this._current_video = video;

        this._video.load();
    }

    getDuration() {
        return this._duration;
    }

    _getRandomIndex() {
        return Math.floor(Math.random() * this._urls.length);
    }

    _saveVolume() {
        localStorage.setItem('volume', this._range.value);
    }

    _loadVolume() {
        const vol = localStorage.getItem('volume');
        if (vol) {
            this._range.value = vol;
        }
    }

    _resetCurrentTime() {
        this._video.currentTime = 0;
        if (Array.isArray(this._current_video)) {
            this._video.currentTime = this._current_video[ Video.KEY_START_TIME ] || 0;
        }
    }

    static _shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
}
