const Decorator = function(room) {
    this.room = room;
    this.stock = [];
};

Decorator.prototype.addCan = function(can) {
    this.stock.push(can);
};

Decorator.prototype.calculateTotalLiters = function() {
    let totalLiters = 0;
    for (let currentCan of this.stock) {
        totalLiters += currentCan.liters;
    };
    return totalLiters;
};

Decorator.prototype.hasEnoughPaint = function() {
    let totalLiters = this.calculateTotalLiters();
    return totalLiters >= this.room.area;
}

Decorator.prototype.paint = function() {
    if (this.hasEnoughPaint()) {
        this.room.paint();
        let paintUsed = 0;
        let i = 0;
        while (paintUsed < this.room.area) {
            let currentCan = this.stock[i];
            if(currentCan.liters <= (this.room.area - paintUsed)) {
                paintUsed += currentCan.liters;
                currentCan.empty();
            } else {
                currentCan.liters -= (this.room.area - paintUsed);
                paintUsed += (this.room.area - paintUsed);
            };
            i++;
        };
    };
    
};

Decorator.prototype.removeEmptyCans = function() {
    const cansWithPaint = this.stock.filter(can => {
        !can.isEmpty();
    });

    this.stock = cansWithPaint;
}



module.exports = Decorator;