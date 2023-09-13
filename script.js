const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ys = [];

let x = 300;
let y = canvas.height / 2;

let angle = 0;
const loop = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < 7; i++) {
        let n = i * 2 + 1;
        let radius = 100 * (4 / (n * Math.PI));
        circle(ctx, x, y, radius, "rgba(255,255,255,0.2)");
        line(ctx, x, y, x + radius * Math.cos(n * angle), y + radius * Math.sin(n * angle), "rgba(255, 255, 255, 1)");
        x += radius * Math.cos(n * angle);
        y += radius * Math.sin(n * angle);
    }

    line(ctx, x, y, 600, y, "red");
    ys.unshift(y);

    for (let i = 0; i < ys.length; i++) circle(ctx, 600 + i, ys[i], 1, "red");

    if (ys.length > 600)
        while (ys.length >= 600) ys.pop();

    angle += 0.025;
    x = 300;
    y = canvas.height / 2;

    window.requestAnimationFrame(loop);
}

loop();