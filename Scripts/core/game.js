/// <reference path="_reference.ts"/>
/*
    Name: Ga-alo Omar 300175123
    Source File Name: Advanced Graphics
    Last Modified by: Ga-alo Omar
    Date last Modified: Feb 3, 2016
    Program description: Creating a humanoid character out of various shaped cubes
    Revision History:
    Commit 1: Created the visual code file
    Commit 2-5: Updated the visual code file by adding bits of code
    Commit 6: Followed the BoilerPlare example from class
    Commit 7: Added a cube, from class example
    Commit 8: Added rotation to my cube
    Commit 9: Added body parts
    Commit 10: Added colour
    Commit 11: Fixed the body shape
    Commit 12: Played with the Ambient Light
    Commit 13: Added shoes
    
*/
// MAIN GAME FILE
// THREEJS Aliases
var Scene = THREE.Scene;
var Renderer = THREE.WebGLRenderer;
var PerspectiveCamera = THREE.PerspectiveCamera;
var BoxGeometry = THREE.BoxGeometry;
var CubeGeometry = THREE.CubeGeometry;
var PlaneGeometry = THREE.PlaneGeometry;
var SphereGeometry = THREE.SphereGeometry;
var Geometry = THREE.Geometry;
var AxisHelper = THREE.AxisHelper;
var LambertMaterial = THREE.MeshLambertMaterial;
var MeshBasicMaterial = THREE.MeshBasicMaterial;
var Material = THREE.Material;
var Mesh = THREE.Mesh;
var Object3D = THREE.Object3D;
var SpotLight = THREE.SpotLight;
var PointLight = THREE.PointLight;
var AmbientLight = THREE.AmbientLight;
var Control = objects.Control;
var GUI = dat.GUI;
var Color = THREE.Color;
var Vector3 = THREE.Vector3;
var Face3 = THREE.Face3;
var Point = objects.Point;
var CScreen = config.Screen;
//Custom Game Objects
var gameObject = objects.gameObject;
var scene;
var renderer;
var camera;
var axes;
var leftLeg;
var rightLeg;
var rightArm;
var leftArm;
var torso;
var head;
var rightShoe;
var leftShoe;
var plane;
var sphere;
var ambientLight;
var spotLight;
var control;
var gui;
var stats;
var step = 0;
var cubeGeometry;
var cubeMaterial;
function init() {
    // Instantiate a new Scene object
    scene = new Scene();
    setupRenderer(); // setup the default renderer
    setupCamera(); // setup the camera
    // add an axis helper to the scene
    axes = new AxisHelper(10);
    scene.add(axes);
    console.log("Added Axis Helper to scene...");
    //Add a Plane to the Scene
    plane = new gameObject(new PlaneGeometry(19.5, 19.5, 1, 1), new LambertMaterial({ color: 0xf99F5B }), 0, 0, 0);
    plane.rotation.x = -0.5 * Math.PI;
    scene.add(plane);
    console.log("Added Plane Primitive to scene...");
    //Add a Torso
    torso = new Mesh(new CubeGeometry(2, 3, 2), new LambertMaterial({ color: 0xA9F5F2 }));
    torso.castShadow = true;
    torso.receiveShadow = true;
    torso.position.y = 4;
    scene.add(torso);
    console.log("Added Torso to scene...");
    //Add Left Arm
    leftArm = new Mesh(new CubeGeometry(3.5, 0.5, 0.5), new LambertMaterial({ color: 0xF8BA8B }));
    leftArm.castShadow = true;
    leftArm.receiveShadow = true;
    leftArm.position.x = -1;
    leftArm.position.y = 0.5;
    torso.add(leftArm);
    console.log("Added Left Arm to scene...");
    //Add Right Arm
    rightArm = new Mesh(new CubeGeometry(3.5, 0.5, 0.5), new LambertMaterial({ color: 0xF8BA8B }));
    rightArm.castShadow = true;
    rightArm.receiveShadow = true;
    rightArm.position.x = 1;
    rightArm.position.y = 0.5;
    torso.add(rightArm);
    console.log("Added Right Arm to scene...");
    //Add Left Shoe
    leftShoe = new Mesh(new CubeGeometry(0.6, 0.5, 1.3), new LambertMaterial({ color: 0x000000 }));
    leftShoe.castShadow = true;
    leftShoe.receiveShadow = true;
    leftShoe.position.y = -4;
    leftShoe.position.x = -0.5;
    leftShoe.position.z = -0.5;
    torso.add(leftShoe);
    console.log("Added Left Shoe to scene...");
    //Add Left Leg
    leftLeg = new Mesh(new CubeGeometry(0.5, 4.5, 0.5), new LambertMaterial({ color: 0xFF0040 }));
    leftLeg.castShadow = true;
    leftLeg.receiveShadow = true;
    leftLeg.position.y = -1.5;
    leftLeg.position.x = -0.5;
    torso.add(leftLeg);
    console.log("Added Left Leg to scene...");
    //Add Right Shoe
    rightShoe = new Mesh(new CubeGeometry(0.6, 0.5, 1.3), new LambertMaterial({ color: 0x000000 }));
    rightShoe.castShadow = true;
    rightShoe.receiveShadow = true;
    rightShoe.position.y = -4;
    rightShoe.position.x = 0.5;
    rightShoe.position.z = -0.5;
    torso.add(rightShoe);
    console.log("Added Right Shoe to scene...");
    //Add Right Leg
    rightLeg = new Mesh(new CubeGeometry(0.5, 4.5, 0.5), new LambertMaterial({ color: 0xFF0040 }));
    rightLeg.castShadow = true;
    rightLeg.receiveShadow = true;
    rightLeg.position.y = -1.5;
    rightLeg.position.x = 0.5;
    torso.add(rightLeg);
    console.log("Added Right Leg to scene...");
    //Add Head
    head = new Mesh(new CubeGeometry(1.5, 1.5, 1.5), new LambertMaterial({ color: 0xD8D8D8 }));
    head.castShadow = true;
    head.receiveShadow = true;
    head.position.y = 2;
    torso.add(head);
    console.log("Added Head to scene...");
    // Add an AmbientLight to the scene
    ambientLight = new AmbientLight(0x404040);
    scene.add(ambientLight);
    console.log("Added an Ambient Light to Scene....");
    // Add a SpotLight to the scene
    spotLight = new SpotLight(0xffffff);
    spotLight.position.set(-40, 60, 10);
    //spotLight.position.set(5.6, 23.1, 5.4);
    // spotLight.rotation.set(-0.8, 42.7, 19.5);
    spotLight.castShadow = true;
    scene.add(spotLight);
    console.log("Added a SpotLight Light to Scene...");
    // add controls
    gui = new GUI();
    control = new Control(0.05);
    addControl(control);
    // Add framerate stats
    addStatsObject();
    console.log("Added Stats to scene...");
    document.body.appendChild(renderer.domElement);
    gameLoop(); // render the scene	
    window.addEventListener('resize', onResize, false);
}
function onResize() {
    camera.aspect = CScreen.RATIO;
    //camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    //renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setSize(CScreen.WIDTH, CScreen.HEIGHT);
}
function addControl(controlObject) {
    gui.add(controlObject, 'rotationSpeedx', -0.5, 0.5);
    gui.add(controlObject, 'rotationSpeedy', -0.5, 0.5);
    gui.add(controlObject, 'rotationSpeedz', -0.5, 0.5);
    gui.add(controlObject, 'randomColour');
}
function addStatsObject() {
    stats = new Stats();
    stats.setMode(0);
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left = '0px';
    stats.domElement.style.top = '0px';
    document.body.appendChild(stats.domElement);
}
// Setup main game loop
function gameLoop() {
    stats.update();
    torso.rotation.x += control.rotationSpeedx;
    torso.rotation.y += control.rotationSpeedy;
    torso.rotation.z += control.rotationSpeedz;
    // render using requestAnimationFrame
    requestAnimationFrame(gameLoop);
    // render the scene
    renderer.render(scene, camera);
}
// Setup default renderer
function setupRenderer() {
    renderer = new Renderer();
    renderer.setClearColor(0xEEEEEE, 1.0);
    renderer.setSize(CScreen.WIDTH, CScreen.HEIGHT);
    //renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    console.log("Finished setting up Renderer...");
}
// Setup main camera for the scene
function setupCamera() {
    camera = new PerspectiveCamera(45, CScreen.RATIO, 0.1, 1000);
    //  camera = new PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.x = 0.6;
    camera.position.y = 16;
    camera.position.z = -20.5;
    camera.lookAt(new Vector3(0, 0, 0));
    console.log("Finished setting up Camera...");
}
//# sourceMappingURL=game.js.map