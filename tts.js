class TTS {
    #_speechSynthesis;
    #_speechSynthesisUtterance;

    constructor() {
        if (typeof speechSynthesis === "undefined") {
            throw new Error("SpeechSynthesis is not supported!");
        }
    }

    initializeAsync() {
        this.#_speechSynthesis = speechSynthesis;
        this.#_speechSynthesisUtterance = new SpeechSynthesisUtterance();

        return new Promise((resolve, reject) => {
            let timerId, attempts = 0;
            timerId = setInterval(() => {
                if (++attempts > 20) {
                    clearInterval(timerId);
                    reject();
                } else {
                    if (this.getVoices().length > 0) {
                        clearInterval(timerId);
                        resolve();
                    }
                }
            }, 100);
        });
    }

    get paused() {
        return this.#_speechSynthesis?.paused ?? false
    }

    get pending() {
        return this.#_speechSynthesis?.pending ?? false
    }

    get speaking() {
        return this.#_speechSynthesis?.speaking ?? false
    }

    cancel() {
        this.#_speechSynthesis?.cancel()
    }

    getVoices() {
        return this.#_speechSynthesis?.getVoices() ?? []
    }

    pause() {
        this.#_speechSynthesis?.pause()
    }

    resume() {
        this.#_speechSynthesis?.resume()
    }

    speak() {
        if (this.#_speechSynthesis) {
            this.#_speechSynthesis.speak(this.#_speechSynthesisUtterance)
        }
    }

    onVoicesChanged(callback) {
        this.#_speechSynthesis.addEventListener("voiceschanged", callback)
    }

    offVoicesChanged(callback) {
        this.#_speechSynthesis.removeEventListener("voiceschanged", callback)
    }

    get lang() {
        return this.#_speechSynthesisUtterance?.lang ?? '';
    }

    set lang(val) {
        if (this.#_speechSynthesisUtterance) {
            this.#_speechSynthesisUtterance.lang = val;
        }
    }

    get pitch() {
        return this.#_speechSynthesisUtterance?.pitch ?? 0;
    }

    set pitch(val) {
        if (this.#_speechSynthesisUtterance) {
            this.#_speechSynthesisUtterance.pitch = val;
        }
    }

    get rate() {
        return this.#_speechSynthesisUtterance?.rate ?? 0;
    }

    set rate(val) {
        if (this.#_speechSynthesisUtterance) {
            this.#_speechSynthesisUtterance.rate = val;
        }
    }

    get text() {
        return this.#_speechSynthesisUtterance?.text ?? '';
    }

    set text(val) {
        if (this.#_speechSynthesisUtterance) {
            this.#_speechSynthesisUtterance.text = val;
        }
    }

    get voice() {
        return this.#_speechSynthesisUtterance?.voice ?? null;
    }

    set voice(val) {
        if (this.#_speechSynthesisUtterance) {
            this.#_speechSynthesisUtterance.voice = val;
        }
    }

    get volume() {
        return this.#_speechSynthesisUtterance?.volume;
    }

    set volume(val) {
        if (this.#_speechSynthesisUtterance) {
            this.#_speechSynthesisUtterance.volume = val;
        }
    }

    onBoundary(callback) {
        if (this.#_speechSynthesisUtterance) {
            this.#_speechSynthesisUtterance.addEventListener("boundary", callback)
        }
    }

    offBoundary(callback) {
        if (this.#_speechSynthesisUtterance) {
            this.#_speechSynthesisUtterance.removeEventListener("boundary", callback)
        }
    }

    onEnd(callback) {
        if (this.#_speechSynthesisUtterance) {
            this.#_speechSynthesisUtterance.addEventListener("end", callback)
        }
    }

    offEnd(callback) {
        if (this.#_speechSynthesisUtterance) {
            this.#_speechSynthesisUtterance.removeEventListener("end", callback)
        }
    }

    onError(callback) {
        if (this.#_speechSynthesisUtterance) {
            this.#_speechSynthesisUtterance.addEventListener("error", callback)
        }
    }

    offError(callback) {
        if (this.#_speechSynthesisUtterance) {
            this.#_speechSynthesisUtterance.removeEventListener("error", callback)
        }
    }

    onMark(callback) {
        if (this.#_speechSynthesisUtterance) {
            this.#_speechSynthesisUtterance.addEventListener("mark", callback)
        }
    }

    offMark(callback) {
        if (this.#_speechSynthesisUtterance) {
            this.#_speechSynthesisUtterance.removeEventListener("mark", callback)
        }
    }

    onPause(callback) {
        if (this.#_speechSynthesisUtterance) {
            this.#_speechSynthesisUtterance.addEventListener("pause", callback)
        }
    }

    offPause(callback) {
        if (this.#_speechSynthesisUtterance) {
            this.#_speechSynthesisUtterance.removeEventListener("pause", callback)
        }
    }

    onResume(callback) {
        if (this.#_speechSynthesisUtterance) {
            this.#_speechSynthesisUtterance.addEventListener("resume", callback)
        }
    }

    offResume(callback) {
        if (this.#_speechSynthesisUtterance) {
            this.#_speechSynthesisUtterance.removeEventListener("resume", callback)
        }
    }

    onStart(callback) {
        if (this.#_speechSynthesisUtterance) {
            this.#_speechSynthesisUtterance.addEventListener("start", callback)
        }
    }

    offStart(callback) {
        if (this.#_speechSynthesisUtterance) {
            this.#_speechSynthesisUtterance.removeEventListener("start", callback)
        }
    }
}

export default TTS
