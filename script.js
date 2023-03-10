const data = {
  q: {
    sound: new Howl({
      src: ["sounds/bubbles.mp3"],
    }),
    color: "#1abc9c",
  },
  w: {
    sound: new Howl({
      src: ["sounds/clay.mp3"],
    }),
    color: "#2ecc71",
  },
  e: {
    sound: new Howl({
      src: ["sounds/confetti.mp3"],
    }),
    color: "#3498db",
  },
  r: {
    sound: new Howl({
      src: ["sounds/corona.mp3"],
    }),
    color: "#9b59b6",
  },
  t: {
    sound: new Howl({
      src: ["sounds/dotted-spiral.mp3"],
    }),
    color: "#34495e",
  },
  y: {
    sound: new Howl({
      src: ["sounds/flash-1.mp3"],
    }),
    color: "#16a085",
  },
  u: {
    sound: new Howl({
      src: ["sounds/flash-2.mp3"],
    }),
    color: "#27ae60",
  },
  i: {
    sound: new Howl({
      src: ["sounds/flash-3.mp3"],
    }),
    color: "#2980b9",
  },
  o: {
    sound: new Howl({
      src: ["sounds/glimmer.mp3"],
    }),
    color: "#8e44ad",
  },
  p: {
    sound: new Howl({
      src: ["sounds/moon.mp3"],
    }),
    color: "#2c3e50",
  },
  a: {
    sound: new Howl({
      src: ["sounds/pinwheel.mp3"],
    }),
    color: "#f1c40f",
  },
  s: {
    sound: new Howl({
      src: ["sounds/piston-1.mp3"],
    }),
    color: "#e67e22",
  },
  d: {
    sound: new Howl({
      src: ["sounds/piston-2.mp3"],
    }),
    color: "#e74c3c",
  },
  f: {
    sound: new Howl({
      src: ["sounds/prism-1.mp3"],
    }),
    color: "#95a5a6",
  },
  g: {
    sound: new Howl({
      src: ["sounds/prism-2.mp3"],
    }),
    color: "#f39c12",
  },
  h: {
    sound: new Howl({
      src: ["sounds/prism-3.mp3"],
    }),
    color: "#d35400",
  },
  j: {
    sound: new Howl({
      src: ["sounds/splits.mp3"],
    }),
    color: "#1abc9c",
  },
  k: {
    sound: new Howl({
      src: ["sounds/squiggle.mp3"],
    }),
    color: "#2ecc71",
  },
  l: {
    sound: new Howl({
      src: ["sounds/strike.mp3"],
    }),
    color: "#3498db",
  },
  z: {
    sound: new Howl({
      src: ["sounds/suspension.mp3"],
    }),
    color: "#9b59b6",
  },
  x: {
    sound: new Howl({
      src: ["sounds/timer.mp3"],
    }),
    color: "#34495e",
  },
  c: {
    sound: new Howl({
      src: ["sounds/ufo.mp3"],
    }),
    color: "#16a085",
  },
  v: {
    sound: new Howl({
      src: ["sounds/veil.mp3"],
    }),
    color: "#27ae60",
  },
  b: {
    sound: new Howl({
      src: ["sounds/wipe.mp3"],
    }),
    color: "#2980b9",
  },
  n: {
    sound: new Howl({
      src: ["sounds/zig-zag.mp3"],
    }),
    color: "#8e44ad",
  },
  m: {
    sound: new Howl({
      src: ["sounds/moon.mp3"],
    }),
    color: "#2c3e50",
  },
};

window.onload = function () {
  const sound = new Howl({
    src: ["./libs/howler.js-master/puk-v-ekho.mp3"],
  });
  paper.setup("myCanvas");
  paper.install(window);

  const circles = [];

  view.onKeyDown = function (event) {
    const maxPoint = new Point(view.size.width, view.size.height);
    // const maxPoint = new Point(window.innerWidth, window.innerHeight);
    const randomPoint = Point.random();
    const point = maxPoint.multiply(randomPoint);
    const newCircle = new Path.Circle(point, 200);
    if (data[event.key]) {
      data[event.key].sound.play();
      newCircle.fillColor = data[event.key].color;
      circles.push(newCircle);
      console.log(circles);
    }
  };

  view.onFrame = function (event) {
    for (let i = 0; i < circles.length; i++) {
      circles[i].fillColor.hue += 1;
      circles[i].scale(0.95);
      if (circles[i].area < 1) {
        circles[i].remove();
        circles.splice(i, 1);
      }
    }
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
