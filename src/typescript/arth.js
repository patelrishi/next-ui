var arth = /** @class */ (function () {
    function arth() {
        this.n1 = 10;
        this.n2 = 20;
    }
    arth.prototype.add = function () {
        console.log(this.n1 + this.n2);
    };
    return arth;
}());
