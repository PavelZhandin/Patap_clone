window.onload = function () {
  paper.setup("myCanvas");
  paper.install(window);

  const animatedCircle = new Path.Circle(new Point(300, 300), 100);
  animatedCircle.fillColor = "powderblue";

  const circles = [];

  view.onKeyDown = function (event) {
    const maxPoint = new Point(view.size.width, view.size.height);
    const randomPoint = Point.random();
    const point = maxPoint.multiply(randomPoint);
    const circle = new Path.Circle(point, 50);

    circle.fillColor = "yellow";
    circles.push(circle);
  };

  view.onFrame = function (event) {
    for (let i = 0; i < circles.length; i++) {
      circles[i].fillColor.hue += 1;
      circles[i].scale(0.9);
    }
    animatedCircle.fillColor.hue += 2;
  };

  view.draw();
};

function drawCircles() {
  for (let x = 0; x < 1000; x += 100) {
    for (let y = 0; y < 1000; y += 100) {
      new paper.Path.Circle({
        center: new paper.Point(x + 30, y + 30),
        radius: 30,
        fillColor: "yellow",
      });
    }
  }
  paper.view.draw();
}
