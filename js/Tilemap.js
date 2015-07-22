function Tilemap(parentContainer, tileIn) {
	this.map = new PIXI.Container(); // maybe make this a ParticleContainer?
	parentContainer.addChild(this.map);




	Tilemap.prototype.init = function(tileTextures) {
		var rows = 50;
		var columns = 50;
		var tiles = new Array(rows);
		var tileW = 50;
		var tileH = 50;

		// fix tile seams
		for (var i=0; i<tileTextures.length; i++) {
			tileTextures[i].baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;
		}

		// set a fill and line style
		var graphics = new PIXI.Graphics();
		graphics.beginFill(0xFF3300);
		graphics.lineStyle(1, 0xffd900, 1);
		graphics.moveTo(0, 0);
		parentContainer.addChild(graphics);

		// create tiles
		for (var r=0; r<rows; r++) {
			tiles[r] = new Array(columns);
			graphics.lineTo(r, 0);

			for (var c=0; c<columns; c++) {
				graphics.lineTo(r, c);

				var tileX = r * tileW;
				var tileY = c * tileH;
				var randomTile = getRandomInt(0, tileTextures.length-1);

				tiles[r][c] = new tileIn(this.map, tileX, tileY, tileW, tileH, tileTextures[randomTile]);
			}
		}

		graphics.endFill();
	} // END init()


	Tilemap.prototype.update = function() {

	} // END update()


	function getRandomInt(min, max) {
	    return Math.floor(Math.random() * (max - min + 1)) + min;
	}
}