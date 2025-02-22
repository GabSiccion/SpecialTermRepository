// module aliases
var Engine = Matter.Engine,
	Render = Matter.Render,
	Runner = Matter.Runner,
	Bodies = Matter.Bodies,
	Composite = Matter.Composite;

// create an engine
var engine = Engine.create();

// create a renderer
var render = Render.create({
	element: document.body,
	engine: engine,
});

// create two boxes and a ground
var ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });

// add all of the bodies to the world
Composite.add(engine.world, ground);

// run the renderer
Render.run(render);

// create runner
var runner = Runner.create();

// run the engine
Runner.run(runner, engine);

// body object
function box() {
	this.body = Bodies.rectangle(400, 200, 20, 20, {
		render: {
			sprite: {
				texture: "crate.png"
			},
		},
	});
	Composite.add(engine.world, this.body);
}
