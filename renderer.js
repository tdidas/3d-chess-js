
// create a new camera with the desired properties 
const fov = 75;
const aspect = window.innerWidth/window.innerHeight;
const near = 0.1;
const far = 20000;
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

camera.position.x = 0;
camera.position.y = 30;
camera.position.z = 120;


// create renderer to display the scene with the given camera in the canvas
const canvas = document.querySelector('#canvas');
const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });

renderer.setSize(window.innerWidth, window.innerHeight);

function render(time) {
    time *= 0.001;   
    containerGroup.rotation.y = 0.1 * time;

    renderer.render(scene, camera);

    requestAnimationFrame(render);
}