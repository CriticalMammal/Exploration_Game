function Tilemap(parentContainer, tileIn) {
	this.map = new PIXI.Container();
	parentContainer.addChild(this.map);

	var rows = 100;
	var columns = 100;
	var tiles = new Array(rows);
	var tileW = 50;
	var tileH = 50;

	for (var r=0; r<rows; r++) {
		tiles[r] = new Array(columns);

		for (var c=0; c<columns; c++) {
			var tileX = r * tileW;
			var tileY = c * tileH;

			tiles[r][c] = new tileIn(this.map, tileX, tileY, tileW, tileH);
		}
	}

	Tilemap.prototype.update = function() {

	}

	function getRandomInt(min, max) {
	    return Math.floor(Math.random() * (max - min + 1)) + min;
	}
}