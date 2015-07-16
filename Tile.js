function Tile(parentContainer, xPos, yPos, width, height) {
	// test geometry to represent the "world" background
	var texture = PIXI.Texture.fromImage("bunny.png");
	this.sprite = new PIXI.Sprite(texture);

	this.sprite.position.x = xPos;
	this.sprite.position.y = yPos;
	this.sprite.width = width;
	this.sprite.height = height;

	parentContainer.addChild(this.sprite);

	Tile.prototype.update = function() {

	}

	function getRandomColor() {
	    var letters = '0123456789ABCDEF'.split('');
	    var color = '';
	    for (var i = 0; i < 6; i++ ) {
	        color += letters[Math.floor(Math.random() * 16)];
	    }

	    return parseInt(color, 16);
	}
}