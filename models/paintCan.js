const PaintCan = function(liters) {
    this.liters = liters;
}

PaintCan.prototype.isEmpty = function() {
    return this.liters === 0;
};

PaintCan.prototype.empty = function() {
    this.liters = 0;
};

module.exports = PaintCan;