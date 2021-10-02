class Archer{
    constructor(X, Y, W, H, angle) {
        this.x = X;
        this.y = Y;
        this.w = W;
        this.h = H;
        this.angle = angle;
        this.img = loadImage("playerArcher.png");
    }
    show() {
        push();
        imageMode(CENTER);
        image(this.img, this.x, this.y, this.w, this.h);
        pop();
        noFill();
    }
}