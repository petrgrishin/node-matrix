const should = require('should');
const { Matrix } = require('./index');

describe('Matrix', () => {

    describe('create', () => {
        it ('matrix to matrix', () => {
            const matrix = new Matrix([[1, 11],[2, 22]]);
            const matrix2 = new Matrix(matrix);
            should(matrix).deepEqual(matrix2);
        });

        it ('array to matrix', () => {
            const matrix = new Matrix([[1, 11],[2, 22]]);
            should([...matrix]).deepEqual([[1, 11],[2, 22]]);
        });
    });
});
