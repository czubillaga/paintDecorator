const assert = require('assert');
const PaintCan = require('../paintCan.js');

describe('Paint Can', function(){
    let paintCan;

    this.beforeEach(function(){
        paintCan = new PaintCan(15);
    });

    it('should have a number of liters', function() {
        const actual = paintCan.liters;
        assert.strictEqual(actual, 15);
    });

    it('should be able to check if it is empty (false)', function() {
        const actual = paintCan.isEmpty();
        assert.strictEqual(actual, false);
    });

    it('should be able to check if it is empty (true)', function() {
        paintCan.liters = 0;
        const actual = paintCan.isEmpty();
        assert.strictEqual(actual, true);
    });

    it('should be able to empty itself of paint', function() {
        paintCan.empty();
        const actual = paintCan.isEmpty();
        assert.strictEqual(actual, true);
    });
});