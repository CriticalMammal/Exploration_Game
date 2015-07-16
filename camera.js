function Camera(updateSpeedIn, worldContainer, renderer) {
	// private vars
	var xLerp = 0;
	var yLerp = 0;
	var lerpSpeed = 0.05;
	var x = 0;
	var y = 0;
	var xOffset = renderer.width/2;
	var yOffset = renderer.height/2;
	var updateSpeed = updateSpeedIn;
	var world = worldContainer;

	// public vars
	this.moveToX = x;
	this.moveToY = y;


	Camera.prototype.update = function() {
		// move camera to correct position
		if (x != this.moveToX) {
			xLerp = 0;
		}

		if (xLerp <= 1.0) {
			xLerp += lerpSpeed;
		}

		x = lerp(x, xLerp, this.moveToX);

		if (y != this.moveToY) {
			yLerp = 0;
		}

		if (yLerp <= 1.0) {
			yLerp += lerpSpeed;
		}

		y = lerp(y, yLerp, this.moveToY);

		world.position.x = -x + xOffset;
		world.position.y = -y + yOffset;

	}

	function lerp(x, t, y) {
		return x * (1-t) + y*t;
	}
}