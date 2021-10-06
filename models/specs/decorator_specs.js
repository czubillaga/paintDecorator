const assert = require('assert');
const Decorator = require('../decorator.js');
const Room = require('../room.js');
const PaintCan = require('../paintCan.js');

describe('Decorator', function() {
    let decorator;
    let room;

    this.beforeEach(function() {
        room = new Room(20);
        decorator = new Decorator(room);
    });

    it('should start with an empty paint stock', function() {
        const actual = decorator.stock;
        assert.deepStrictEqual(actual, []);
    });

    it('should be able to add a can to stock', function() {
        let paintCan = new PaintCan(15);
        decorator.addCan(paintCan);
        const actual = decorator.stock;
        assert.deepStrictEqual(actual, [paintCan]);
    });

    it('should be able to calculate total liters in stock', function() {
        let paintCan1 = new PaintCan(15);
        let paintCan2 = new PaintCan(20);
        decorator.addCan(paintCan1);
        decorator.addCan(paintCan2);
        const actual = decorator.calculateTotalLiters();
        assert.strictEqual(actual, 35);
    });

    it('should be able to calculate if it has enough paint for a room (false)', function() {
        let paintCan1 = new PaintCan(15);
        decorator.addCan(paintCan1);
        const actual = decorator.hasEnoughPaint();
        assert.strictEqual(actual, false);
    });

    it('should be able to calculate if it has enough paint for a room (true)', function() {
        let paintCan1 = new PaintCan(10);
        let paintCan2 = new PaintCan(10);
        decorator.addCan(paintCan1);
        decorator.addCan(paintCan2);
        const actual = decorator.hasEnoughPaint();
        assert.strictEqual(actual, true);
    });

    it('should be able to paint a room if it has enough paint (true)', function() {
        let paintCan1 = new PaintCan(10);
        let paintCan2 = new PaintCan(10);
        decorator.addCan(paintCan1);
        decorator.addCan(paintCan2);
        decorator.paint();
        const actual = decorator.room.painted;
        assert.strictEqual(actual, true);
    });

    it('should be able to paint a room if it has enough paint (false)', function() {
        let paintCan1 = new PaintCan(8);
        let paintCan2 = new PaintCan(10);
        decorator.addCan(paintCan1);
        decorator.addCan(paintCan2);
        decorator.paint();
        const actual = decorator.room.painted;
        assert.strictEqual(actual, false);
    });

    it('should be able to decrease stock when painting a room', function() {
        let paintCan1 = new PaintCan(10);
        let paintCan2 = new PaintCan(10);
        decorator.addCan(paintCan1);
        decorator.addCan(paintCan2);
        decorator.paint();
        const actual = decorator.calculateTotalLiters();
        assert.strictEqual(actual, 0);
    });

    it('should be able to remove empty paint cans from stock', function() {
        let paintCan1 = new PaintCan(10);
        let paintCan2 = new PaintCan(10);
        decorator.addCan(paintCan1);
        decorator.addCan(paintCan2);
        decorator.paint();
        decorator.removeEmptyCans();
        const actual = decorator.stock;
        assert.deepStrictEqual(actual, []);
    });
});