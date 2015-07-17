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

		// create tiles
		for (var r=0; r<rows; r++) {
			tiles[r] = new Array(columns);

			for (var c=0; c<columns; c++) {
				var tileX = r * tileW;
				var tileY = c * tileH;
				var randomTile = getRandomInt(0, tileTextures.length-1);

				tiles[r][c] = new tileIn(this.map, tileX, tileY, tileW, tileH, tileTextures[randomTile]);
			}
		}
	} // END init()


	Tilemap.prototype.update = function() {

	} // END update()


	function getRandomInt(min, max) {
	    return Math.floor(Math.random() * (max - min + 1)) + min;
	}
}