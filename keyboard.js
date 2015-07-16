function Keyboard() {
	// key input
	this.up = keys(38);
	this.right = keys(39);
	this.down = keys(40);
	this.left = keys(37);
	

	function keys(keyCode) {
		var key = {};
		key.code = keyCode;
		key.isDown = false;
		key.isUp = true;
		key.press = undefined;
		key.release = undefined;

		// down handler
		key.downHander = function(event) {
			if (event.keyCode === key.code) {
				if (key.isUp && key.press) key.press();
				key.isDown = true;
				key.isUp = false;
			}
			event.preventDefault();
		};

		// up handler
		key.upHander = function(event) {
			if (event.keyCode === key.code) {
				if (key.isDown && key.release) key.release();
				key.isDown = false;
				key.isUp = true;
			}
			event.preventDefault();
		};

		// attach event listeners
		window.addEventListener("keydown", key.downHander.bind(key), false);
		window.addEventListener("keyup", key.upHander.bind(key), false);
		
		return key;
	} // END keyboard()
}