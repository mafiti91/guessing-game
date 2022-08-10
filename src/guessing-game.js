class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min;
        this.max = max;

    }

    guess() {
        return this.result = Math.round((this.min + this.max) / 2);
    }

    lower() {
        return this.max = this.result;
    }

    greater() {
        return this.min = this.result;
    }
}

module.exports = GuessingGame;