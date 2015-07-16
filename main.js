function main() {
	// renderer
	var renderer = PIXI.autoDetectRenderer(400, 300, {antialiasing: false, transparent: false, resolution: 1});
	renderer.backgroundColor = 0x1099bb;
	renderer.view.style.position = "absolute";
	renderer.view.style.display = "block";
	renderer.autoResize = true;
	renderer.resize(window.innerWidth, window.innerHeight);

	// add renderer to the DOM
	document.body.appendChild(renderer.view);

	var stage = new PIXI.Container(); // the root object
	var world = new PIXI.Container(); // contains the game world objects
	var menu = new PIXI.Container(); // for game menus later
	var tileMap = new Tilemap(world, Tile);
	
	stage.addChild(world);
	stage.addChild(menu);

	// keyboard object for keyboard events
	var keyboard = new Keyboard();

	// add player instance
	var myPlayer = new Player(world, renderer, keyboard);

	// add camera
	var camera = new Camera(1, world, renderer);
	camera.moveToX = myPlayer.sprite.x;
	camera.moveToY = myPlayer.sprite.y;

	animate();

	function animate() {
		requestAnimationFrame(animate);

		update();

		//render the stage
		renderer.render(stage);
	} // END animate

	function update() {
		myPlayer.update();
		// tileMap.update();

		// update camera's reference on move to point
		camera.moveToX = myPlayer.sprite.x;
		camera.moveToY = myPlayer.sprite.y;

		camera.update();

	} // END update

} // END main

var startMain = new main();