
function setup() {
  createCanvas(1920,1080);

  background(255);

	for (var x = 0; x < width-10; x += 214.33) {
		for (var y = 0; y < height-5; y += 135) {
			stroke(0);
			strokeWeight(0.5);
			line(x, 0, x, height);
			line(0, y, width, y);
		}
	}

}
