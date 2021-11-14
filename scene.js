function createScene() {
  
  // create a new scene
  const scene = new THREE.Scene();

  // add light to the scene
  const lightColor = 0xffffff;
  const lightIntensity = 1;

  const light = new THREE.DirectionalLight(lightColor, lightIntensity);
  light.position.set(0, 20, 20);
  scene.add(light);

  return scene;
}