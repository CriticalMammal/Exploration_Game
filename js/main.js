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

	// load images
	var loader = PIXI.loader;
	loader
		.add("img/tilesheet.png")
		.load(setup(world));

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

function setup(world) {

  //Create the `tileset` sprite from the texture
  // var texture = PIXI.utils.TextureCache["img/tilesheet.png"];
  var texture = PIXI.Texture.fromImage("img/tilesheet.png");

  //Create a rectangle object that defines the position and
  //size of the sub-image you want to extract from the texture
  var rectangle = new PIXI.Rectangle(64, 64, 32, 32); // why are the coordinates not working right? won't go past 64??????

  //Tell the texture to use that rectangular section
  texture.frame = rectangle;

  //Create the sprite from the texture
  var rocket = new PIXI.Sprite(texture);

  //Position the rocket sprite on the canvas
  rocket.x = 0;
  rocket.y = 0;

  //Add the rocket to the stage
  world.addChild(rocket);

  //Render the stage   
  // renderer.render(stage);
}

var startMain = new main();