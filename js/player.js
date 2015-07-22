function Player(parentContainer, renderer, keyInput) {
	
	// private vars
	var keyboard = keyInput;
	var rotationLerp = 0.0;
	var speed = 5;
	

	Player.prototype.init = function() {
		// this.sprite = new PIXI.Sprite.fromImage("img/bunny.png");
		this.sprite = new PIXI.Sprite();

		// Init values
		this.sprite.anchor.x = 0.5;
		this.sprite.anchor.y = 0.5;
		this.sprite.position.x = renderer.width/2;
		this.sprite.position.y = renderer.height/2;

		parentContainer.addChild(this.sprite);
	}


	Player.prototype.update = function() {
		if (keyboard.up.isDown) {
			this.sprite.y -= speed;
		}
		else if (keyboard.down.isDown) {
			this.sprite.y += speed;
		}
		if (keyboard.left.isDown) {
			this.sprite.x -= speed;
			this.sprite.rotation -= 0.05;
		}
		else if (keyboard.right.isDown) {
			this.sprite.x += speed;
			this.sprite.rotation += 0.05;
		}

		if (this.sprite.rotation != 0) {
			rotationLerp = 0.0;
		}

		if (rotationLerp < 1.0) {
			rotationLerp += 0.1;
		}

		this.sprite.rotation = lerp(this.sprite.rotation, rotationLerp, 0);
	}

	function lerp(x, t, y) {
		return x * (1-t) + y*t;
	}

}