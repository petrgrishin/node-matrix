'use strict';

/**
 * Matrix object
 */
class Matrix {
    constructor(matrix = []) {
        this.matrix = [...matrix];
    }

    *[Symbol.iterator]() {
        for (const row of this.matrix) {
            yield row;
        }
    }
}

module.exports = {
    Matrix,
};
